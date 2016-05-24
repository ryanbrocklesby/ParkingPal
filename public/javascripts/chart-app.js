/*var app = angular.module('simple-chart', []);


google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainCtrl', ['$scope', '$http',  function($scope, $http) {
  $http.get("/data").success(function (data) {
        formatDataTable(data);
  });
}]);

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Year', 'China', 'United States'];
  
  data.push(header);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(parseInt(chartdata[i].Year));
    temp.push(parseInt(chartdata[i].China));
    temp.push(chartdata[i]["United States"]);
    data.push(temp);
  }
  
  console.table(data);
  
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: 'Comparing Sustainability between China and The United States',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Renewable electricity output (% of total electricity output)',
          minValue: 0,
          format: '#\'%\''
        },
        vAxis: {
          title: 'Year',
          maxValue: 2012,
          minValue: 2000,
          format: '0'
        }
      };

    return options;
}

*/