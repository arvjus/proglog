'use strict';

angular.module('myApp.log', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/log', {
            templateUrl: 'log/log.html',
            controller: 'LogCtrl'
        });
    }])
    .controller('LogCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.today = new Date().toISOString().slice(0, 10);
        $http.get('data/exercises.json').success(function (data) {
            $scope.exercises = data;
        });
        $http.get('data/models.json').success(function (data) {
            $scope.models = data;
        });
    }]);