'use strict';

// Declare app level module which depends on views, and components
var userManagement = angular.module('userManagement', [
    'ngRoute',
    'userManagement.login',
    'userManagement.register',
    'userManagement.details'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'indexCtrl'
            })
            .otherwise({redirectTo: '/'});
    }]);


userManagement.controller('indexCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.login = function () {
        $location.url('/login');
    };
    $scope.register = function () {
        $location.url('/register');

    };

}]);
