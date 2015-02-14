'use strict';

angular.module('beerGameApp')
    .directive('userSelection', function (Player) {
        return {
            templateUrl: "views/user-selection.html",
            restrict: 'E',
            link: function postLink(scope) {
                scope.startGame = function(){
                    console.log("A");
                };

                scope.addPlayer = function(){
                  scope.players.push(new Player());
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
