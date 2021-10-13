

// api url
const api_url =
	"https://api.covid19api.com/live/country/Malaysia";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log();
	// if (response) {
	// 	hideloader();
	// }
	show();
}
// Calling that async function

getapi(api_url);


// Tested and made sure that the correct data (new and recovered cases) was shown
let date1 = []
let new_cases1 = []
let cases_recovered1 = []
$.ajax({
    url: "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv",
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
        });
        if (output.data) {
            for(let i= 0; i<output.data.length-1;i++){
                date1.push(output.data[i].date)
                new_cases1.push(output.data[i].cases_new)
                cases_recovered1.push(output.data[i].cases_recovered)
            }
          console.log(output.data);
        } else {
          console.log(output.errors);
        }
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
});

// data set 2 with date, new_death
// Tested and made sure that the correct data (death cases) was shown
let date2 = []
let new_death2 = []
$.ajax({
    url: "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/deaths_malaysia.csv",
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
        });
        if (output.data) {
            for(let i= 0; i<output.data.length-1;i++){
                date2.push(output.data[i].date)
                new_death2.push(output.data[i].deaths_new)
            }
          console.log(output.data);
        } else {
          console.log(output.errors);
        }
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
});

// data set 3 with date, daily vacinated
// Tested and made sure that the correct data (vaccinated numbers) was shown
let date3 = []
let daily_vacinated3 = []
$.ajax({
    url: "https://raw.githubusercontent.com/CITF-Malaysia/citf-public/main/vaccination/vax_malaysia.csv",
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
        });
        if (output.data) {
            for(let i= 0; i<output.data.length-1;i++){
                date3.push(output.data[i].date)
                daily_vacinated3.push(output.data[i].daily)
            }
          console.log(output.data);
        } else {
          console.log(output.errors);
        }
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
});

// data set 4 with date, daily tested
// Tested and made sure that the correct data (daily covid test) was shown
let date4 = []
let daily_tested4 = []
$.ajax({
    url: "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/tests_malaysia.csv",
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
        });
        if (output.data) {
            for(let i= 0; i<output.data.length-1;i++){
                date4.push(output.data[i].date)
                daily_tested4.push(output.data[i].pcr)
            }
          console.log(output.data);
        } else {
          alert("Data error")
        }
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
});

// Function to define innerHTML for HTML table
function show() {

  new Chart("daily_confirm_case_chart", {
    type: "bar",
    data: {
      labels: date1,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: new_cases1
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily New Cases'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:Math.max(...new_cases1)},
           scaleLabel: {
             display: true,
             labelString: 'Number of Confirmed Cases',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });
  document.getElementById("today_new_cases").innerHTML = "Today's new cases: " + new_cases1[new_cases1.length - 1];
  document.getElementById("today_death_cases").innerHTML = "Today's death cases: " + new_death2[new_death2.length - 1];
  document.getElementById("today_recovered_cases").innerHTML = "Today's recovered: " + cases_recovered1[cases_recovered1.length - 1];
  document.getElementById("today_vaccinated_cases").innerHTML = "Today's vaccinated: " + daily_vacinated3[daily_vacinated3.length - 1];
  document.getElementById("today_tested_cases").innerHTML = "Today's tested: " + daily_tested4[daily_tested4.length - 1];

  new Chart("daily_death_case_chart", {
    type: "bar",
    data: {
      labels: date2,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: new_death2
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily Death Cases'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:Math.max(...new_death2)},
           scaleLabel: {
             display: true,
             labelString: 'Number of Death Cases',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });
  new Chart("daily_recovered_case_chart", {
    type: "bar",
    data: {
      labels: date1,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: cases_recovered1
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily Cases Recovered'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:Math.max(...cases_recovered1)},
           scaleLabel: {
             display: true,
             labelString: 'Number of Recovered Cases',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });

  new Chart("daily_vaccinated_case_chart", {
    type: "bar",
    data: {
      labels: date3,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: daily_vacinated3
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily Vaccinated'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:Math.max(...daily_vacinated3)},
           scaleLabel: {
             display: true,
             labelString: 'Number of People Vaccinated',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });
  new Chart("daily_tested_case_chart", {
    type: "bar",
    data: {
      labels: date4,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: daily_tested4
      }]
    },
    options: {
        title: {
          display: true,
          text: 'Daily Tested'
      },
      legend: {display: false},
      scales: {
        yAxes: [
          {ticks: {min: 0, max:90000},
           scaleLabel: {
             display: true,
             labelString: 'Number of People Tested',
           }
        }
        ],
        xAxes: [
          {
           scaleLabel: {
             display: true,
             labelString: 'Dates',
           }
        }
        ],
      }
    }
  });
}

var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = "TIME: " + d.toLocaleTimeString();
}

let today = new Date().toISOString().slice(0, 10)
document.getElementById("date").innerHTML = "DATE: " + today;



function userPage(){

  window.location = "superUserPage.html";
}