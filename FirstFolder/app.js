(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('myFirstController', function ($scope) {
            $scope.name = "Hurricane",
                $scope.sayHello = function () {
                    return "hello test";
                }
        });

})();