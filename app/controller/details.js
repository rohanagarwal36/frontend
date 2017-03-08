'use strict';

var details = angular.module('userManagement.details', ['ngRoute']);

details.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/details', {
            templateUrl: 'views/details.html',
            controller: 'detailsCtrl'
        })
        .when('/edit', {
            templateUrl: 'views/edit.html',
            controller: 'detailsCtrl'
        });
}]);

details.controller('detailsCtrl', function ($scope, $http, $location) {
    if (localStorage.getItem('token_key') === null) {
        $location.url('/login');
        return;
    }
    $http.get('http://127.0.0.1:9091/api/user/' + localStorage.getItem('user_id') + '/', {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token_key')
            }
        }
    ).success(function (response) {
        $scope.user = response;
    }).error(function (response) {
        $location.url('/login');
    });

    $scope.onClickEdit = function () {
        $location.url('/edit');
    };

    $scope.edit = function () {
        $http.put('http://127.0.0.1:9091/api/user/' + localStorage.getItem('user_id') + '/', $scope.user, {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token_key')
                }
            }
        ).success(function (response) {
            $scope.user = response;
            alert($scope.editSuccess);
            $location.url('/details')
        }).error(function (response) {
            $scope.errorMessage = response.detail;
        });
    };

    $scope.logout = function () {
        localStorage.clear();
        $location.url('/login');
    };
});