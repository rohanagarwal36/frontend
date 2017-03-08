'use strict';

var login = angular.module('userManagement.login', ['ngRoute']);

login.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    });
}]);

login.controller('loginCtrl', function ($scope, $http, $location) {
    if (localStorage.getItem('user_id') != null) {
        $location.url('/details');
    }
    $scope.login = function () {
        $http.post('http://127.0.0.1:9091/api/login/', $scope.user)
            .success(function (response) {
                localStorage.setItem("token_key", response.key);
                localStorage.setItem("user_id", response.id);
                $location.url('/details');
            })
            .error(function (response) {
                $scope.errorr_message = response;
                $location.url('/login');
            });
    };

    $scope.register = function () {
        $location.url('/register');
    };

    $scope.home = function () {
        $location.url('/home');
    }

});