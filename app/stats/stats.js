'use strict';

angular.module('myApp.stats', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stats', {
    templateUrl: 'stats/stats.html',
    controller: 'StatsCtrl'
  });
}])

.controller('StatsCtrl', ['$scope', '$http', function($scope, $http) {
    var httpRequest = $http({
        method: 'POST',
        url: '/scripts/getstats.php'
    }).success(function(data, status) {
        $scope.stats = data;
    });
}]);