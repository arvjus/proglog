'use strict';

angular.module('myApp.log', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/log', {
            templateUrl: 'log/log.html',
            controller: 'LogCtrl'
        });
    }])
    .controller('LogCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

        $scope.formData = {
            date: new Date().toISOString().slice(0, 10),
            duration: 15,
            environment: 'undefined',
            model: 'undefined',
            speed: 100,
            exercise: 'undefined',
            rating: 0,
            crashes: 0,
            comments: ''
        };
        $scope.formDataWeather = {}

        $http.get('data/models.json').success(function (data) {
            $scope.models = data;
        });
        $http.get('data/exercises.json').success(function (data) {
            $scope.exercises = data;
        });

        $scope.options = [];
        $scope.loadExercise = function () {
            var options = [];
            for (var i = 0; i < $scope.exercises.length; i++) {
                if ($scope.exercises[i].id == $scope.formData.exercise) {
                    options = $scope.exercises[i].options;
                    break;
                }
            }
            $scope.options = options;
        }

        $scope.submitForm = function () {
            var params = [];

            // form data
            for (var key in $scope.formData) {
                params.push(key + '=' + encodeURIComponent($scope.formData[key]));
            }

            // weather
            for (var key in $scope.formDataWeather) {
                if ($scope.formDataWeather[key]) {
                    params.push(encodeURIComponent('weather[]') + '=' + key);
                }
            }

            // dynamic options
            var elements = $("input.dynamic:checked,input.dynamic[type='range']");
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                params.push(encodeURIComponent(element.name) + '=' + element.value);
            }

            // post data
            $http({
                method: 'POST',
                url: '/scripts/dolog.php',
                data: params.join('&'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
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