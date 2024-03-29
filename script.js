document.addEventListener("DOMContentLoaded", function() {
  var ctx = document.getElementById('population-chart').getContext('2d');

  var years = [1990, 2000, 2010, 2020];
  var preproductive = [29.0, 24.4, 18.8, 18.1];
  var productive = [58.2, 60.8, 64.4, 60.0];
  var postproductive = [12.8, 14.8, 16.8, 21.9];

  var populationChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Preproductive (0-17 years)',
        data: preproductive,
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
        borderColor: 'yellow',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'yellow',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'yellow',
        fill: false
      }, {
        label: 'Productive (18-59/64 years)',
        data: productive,
        backgroundColor: 'rgba(255, 215, 0, 0.5)',
        borderColor: 'gold',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'gold',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'gold',
        fill: false
      }, {
        label: 'Postproductive (60/65 years and older)',
        data: postproductive,
        backgroundColor: 'rgba(192, 192, 192, 0.5)',
        borderColor: 'lightgrey',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'lightgrey',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'lightgrey',
        fill: false
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Population by Economic Age Groups Over Years',
        fontSize: 18,
        fontColor: 'black',
        fontFamily: 'Arial',
        padding: 20
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Year',
            fontSize: 16,
            fontColor: 'black',
            fontFamily: 'Arial'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 14,
            fontColor: 'black',
            fontFamily: 'Arial'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Percentage (%)',
            fontSize: 16,
            fontColor: 'black',
            fontFamily: 'Arial'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 14,
            fontColor: 'black',
            fontFamily: 'Arial',
            callback: function(value) {
              return value + '%';
            }
          }
        }]
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 14,
          fontColor: 'black',
          fontFamily: 'Arial'
        }
      }
    }
  });
});
