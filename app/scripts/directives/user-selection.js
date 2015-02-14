'use strict';

angular.module('beerGameApp')
    .directive('userSelection', function (Player,$timeout) {
        return {
            templateUrl: "views/user-selection.html",
            restrict: 'E',
            link: function postLink(scope) {
                var OPENING_DELAY = 50;

                scope.startGame = function(){
                    console.log("A");
                };

                scope.addPlayer = function(){
                    var player = new Player();
                    scope.players.push(player);
                    $timeout(function(){
                        scope.toggleEdit(player)
                    },OPENING_DELAY);
                };

                scope.toggleEdit = function(selectedPlayer){

                    for (var i = 0; i < scope.players.length; i++) {
                        var player = scope.players[i];

                        if (selectedPlayer == player){
                            player.edit = !player.edit;
                        }
                        else player.edit = false;
                    }
                };
            }
        };
    });
