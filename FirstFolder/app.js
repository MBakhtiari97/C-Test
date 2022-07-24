(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('myFirstController', function ($scope) {
            $scope.name = "Hurricane",
                $scope.sayHello = function () {
                    return "hello test";
                }
        });
    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope) {
            $scope.fullName,
                $scope.getLength = function (fullName) {
                    return fullName.length;
                }
        });

    angular.module('TestModule', [])
        .controller('NameCalculatorController', function ($scope) {
            $scope.fullName,
                $scope.getLength = function (fullName) {
                    return fullName.length;
                }
        });
    angular.module('DIApp', [])
        .controller('DIController', DIController);

    function DIController($scope) {
        $scope.name = "John";
    }
})();