'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
    var httpRequest = $http({
        method: 'POST',
        url: '/scripts/getlist.php'
    }).success(function(data, status) {
        $scope.list = data;
    });
}]);