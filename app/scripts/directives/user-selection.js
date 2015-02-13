'use strict';

angular.module('beerGameApp')
    .directive('userSelection', function () {
        return {
            templateUrl: "views/user-selection.html",
            restrict: 'E',
            link: function postLink(scope, element, attrs) {

            }
        };
    });
