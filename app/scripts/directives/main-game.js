'use strict';

angular.module('beerGameApp')
    .directive('mainGame', function ($timeout) {
        return {
            templateUrl: 'views/main-game.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                var FAN_DURATION = 1250;
                scope.currentPlayer = 0;
                scope.nextPlayer = function(){
                    scope.currentPlayer++;
                    if (scope.currentPlayer == scope.players.length){
                        scope.currentPlayer -= scope.players.length;
                    }
                };
                scope.startFan = function(){
                    scope.fanAnimation = false;
                    scope.fanAnimation = true;
                    $timeout(function(){
                        scope.fanAnimation = false;
                    },FAN_DURATION)
                }
            }
        };
    });
