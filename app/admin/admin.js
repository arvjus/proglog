'use strict';

angular.module('myApp.admin', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl'
        });
    }])
    .controller('AdminCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.target = new Date().toISOString().slice(0, 10);

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

        $scope.submitForm = function() {
            $http({
                method: 'POST',
                url: '/scripts/dobackup.php',
                data: 'target=' + encodeURIComponent($scope.target),
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