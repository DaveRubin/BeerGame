'use strict';

angular.module('beerGameApp')
    .directive('mainGame', function () {
        return {
            templateUrl: 'views/main-game.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                scope.currentPlayer = 0;
                scope.nextPlayer = function(){
                    scope.currentPlayer++;
                    if (scope.currentPlayer == scope.players.length){
                        scope.currentPlayer -= scope.players.length;
                    }
                }
            }
        };
    });
