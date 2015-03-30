'use strict';

angular.module('myApp.list', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'list/list.html',
            controller: 'ListCtrl'
        });
    }])
    .controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.dateFrom = "2010-01-01";
        $scope.dateTo = new Date().toISOString().slice(0, 10);

        $scope.loadData = function (dateFrom, dateTo) {
            var httpRequest = $http({
                method: 'GET',
                url: '/scripts/getlist.php',
                params: {dateFrom: dateFrom, dateTo: dateTo}
            }).success(function (data, status) {
                $scope.list = data;
            });
        }

        // initial load
        $scope.loadData($scope.dateFrom, $scope.dateTo);
    }]);

