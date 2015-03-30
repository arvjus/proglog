'use strict';

angular.module('myApp.admin', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl'
        });
    }])
    .controller('AdminCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.today = new Date().toISOString().slice(0, 10);

        $scope.postBackup = function (target) {
            var httpRequest = $http({
                method: 'POST',
                url: '/scripts/dobackup.php',
                params: {target: target}
            }).success(function (data, status) {
                if (data.msg != '') {
                    $scope.msg = data.msg;
                }
            }).error(function (data, status) {
                if (data.err != '') {
                    $scope.err = data.err;
                } else {
                    $scope.err = status;
                }
            })
        };
    }]);