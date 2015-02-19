'use strict';

angular.module('beerGameApp')
    .directive('missionCard', function () {
        return {
            restrict: 'E',
            templateUrl:'views/mission-card.html',
            link: function postLink(scope) {
                scope.mission = scope.database.getRandomPreTurn();
            }
        };
    });
