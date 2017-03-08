'use strict';

var register = angular.module('userManagement.register', ['ngRoute']);

register.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
    });
}]);

register.controller('registerCtrl', function ($scope, $http, $location) {

    $scope.register = function () {
        $http.post('http://127.0.0.1:9091/api/user/', $scope.user)
            .success(function (response) {
                $location.url('/login');
            })
            .error(function (response) {
                $scope.error = response;
            });
    };

    $scope.login = function () {
        $location.url('/login');
    };

    $scope.home = function () {
        $location.url('/home');
    }
});