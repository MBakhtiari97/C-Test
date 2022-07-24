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

    function DIController($scope, $filter) {
        $scope.name = "John";
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    };

    angular.module('Index5', [])
        .controller('Index5Controller', function ($scope) {
            $scope.query = "";
            $scope.artists = [{
                "artistName": "John Smith",
                "artistAge": "25",
                "artistBio": "He was born in 1997 in usa , California ..."
            }, {
                "artistName": "Sara Callins",
                "artistAge": "35",
                "artistBio": "He was born in 1987 in usa , Los Angles ..."
            }, {
                "artistName": "James Rodriguez",
                "artistAge": "21",
                "artistBio": "He was born in 2001 in usa , Newyork ..."
            }, {
                "artistName": "Maria Brandi",
                "artistAge": "32",
                "artistBio": "He was born in 1990 in usa , Texas ..."
            }]
        });
})();