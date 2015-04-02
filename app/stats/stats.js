'use strict';

angular.module('myApp.stats', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/stats', {
            templateUrl: 'stats/stats.html',
            controller: 'StatsCtrl'
        });
    }])
    .controller('StatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

        $scope.dateFrom = "2010-01-01";
        $scope.dateTo = new Date().toISOString().slice(0, 10);

        $scope.loadData = function (dateFrom, dateTo) {
            $http({
                method: 'GET',
                url: '/scripts/getstats.php',
                params: {dateFrom: dateFrom, dateTo: dateTo}
            }).success(function (data, status) {
                $scope.stats = data;
            });
        }

        // initial load
        $scope.loadData($scope.dateFrom, $scope.dateTo);
    }]);