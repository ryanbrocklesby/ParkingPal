var app = angular.module('app', []);

app.controller('dataController', function($scope, $http) {
  $http.get("https://assignment-1-rbgli.c9users.io/sample/").then(function (response) {
    
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(function() {
        formatDataTable(response.data);
      });
  });
});

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Year', 'China', 'United States'];
  
  data.push(header);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i].Year);
    temp.push(chartdata[i].China);
    temp.push(chartdata[i]["United States"]);
    data.push(temp);
  }
  
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.charts.Bar(document.getElementById('columnchart_values'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: 'Comparing Sustainability between China and United States',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Year',
          minValue: 0
        },
        vAxis: {
          title: 'Renewable electricity output (% of total electricity output)'
        }
      };

    return options;
}
