var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
      $scope.myData = response.data.records;
  });
});