'use strict';

angular.module('beerGameApp')
    .directive('playerItem', function () {
        return {
            templateUrl:'views/player-item.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {

            }
        };
    });
