'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp',
        [
            'ngRoute',
            'myApp.log',
            'myApp.list',
            'myApp.stats',
            'myApp.admin',
            'myApp.about',
            'myApp.version'
        ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/log'});
    }])
    .controller('MenuCtrl', ['$scope', '$location',
        function ($scope, $location) {
            $scope.isActive = function (path) {
                return path == $location.path();
            };
        }]);
