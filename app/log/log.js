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

        $http.get('data/models.json').success(function (data) {
            $scope.models = data;
        });
        $http.get('data/exercises.json').success(function (data) {
            $scope.exercises = data;
        });

        $scope.options = [];
        $scope.loadExercise = function(exercise) {
            var options = [];
            for (var i = 0; i < $scope.exercises.length; i++) {
                if ($scope.exercises[i].id == exercise) {
                    options = $scope.exercises[i].options;
                    break;
                }
            }
            $scope.options = options;
        }

        $scope.submitMyForm = function () {
            var httpRequest = $http({
                method: 'POST',
                url: '/scripts/dolog.php',
                params: {target: target}
            }).success(function (data, status) {
                if (data.msg != '') {
                    $scope.msg = data.msg;
                } else if (data.err != '') {
                    $scope.err = data.err;
                }
            }).error(function (data, status) {
                $scope.err = "Error occurred, status: " + status;
            })
        };

    }]);