'use strict';

var MyNamespace = MyNamespace || {};

// Define app level helpers
MyNamespace.helpers = {
    toParams: function (obj) {
        var p = [];
        for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
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
