'use strict';

var MyNamespace = MyNamespace || {};

// Define app level helpers
MyNamespace.helpers = {
    dummy: function (arg) {
        return arg;
    }
};

// Declare app level module which depends on views, and components
angular.module('myApp',
    [
        'ngRoute',
        'myApp.log',
        'myApp.list',
        'myApp.stats',
        'myApp.admin',
        'myApp.version'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/log'});
    }]);
