
var app = angular
            .module("myApp", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "customersCtrl"
                    })
                    .when("/Germany", {
                        templateUrl: "Templates/Germany.html",
                        controller: "germanyController"
                    })
                    .when("/Mexico", {
                        templateUrl: "Templates/Mexico.html",
                        controller: "mexicoController"
                    })
                    .when("/UK", {
                      templateUrl: "Templates/UK.html",
                      controller: "UKController"
                    })
                    .when("/Sweden", {
                      templateUrl: "Templates/Sweden.html",
                      controller: "swedenController"
                    })
                    .when("/France", {
                      templateUrl: "Templates/France.html",
                      controller: "franceController"
                    })
                    .when("/Spain", {
                      templateUrl: "Templates/Spain.html",
                      controller: "spainController"
                    })
                    .when("/Canada", {
                      templateUrl: "Templates/Canada.html",
                      controller: "canadaController"
                    })
                    .when("/Argentina", {
                      templateUrl: "Templates/Argentina.html",
                      controller: "argentinaController"
                    })
                    .when("/Brazil", {
                      templateUrl: "Templates/Brazil.html",
                      controller: "brazilController"
                    })
                    .when("/Switzerland", {
                      templateUrl: "Templates/Switzerland.html",
                      controller: "switzerlandController"
                    })
                    

              })
             .controller("germanyController", function ($scope) {
                $scope.message = " Germany";
             })
             .controller("mexicoController", function ($scope) {
              $scope.message = "Mexico";
             })
             .controller("UKController", function ($scope) {
              $scope.message = "UK";
             })
             .controller("swedenController", function ($scope) {
              $scope.message = "Sweden";
             })
             .controller("franceController", function ($scope) {
              $scope.message = "France";
             })
             .controller("spainController", function ($scope) {
              $scope.message = "Spain";
             })
             .controller("canadaController", function ($scope) {
              $scope.message = "Canada";
             })
             .controller("brazilController", function ($scope) {
              $scope.message = "Brazil";
             })
             .controller("argentinaController", function ($scope) {
              $scope.message = "Argentina";
             })
             .controller("switzerlandController", function ($scope) {
              $scope.message = "Switzerland";
             })  
             .controller("customersCtrl", function ($scope, $http) {
              $scope.message = "customer";
                 $http.get("https://www.w3schools.com/angular/customers.php")
                                        .then(function (response) {
                                            $scope.myData = response.data.records;
                                        });
             });
