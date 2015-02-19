'use strict';

angular.module('beerGameApp')
    .directive('currentPlayer', function (Config) {
        return {
            restrict: 'E',
            templateUrl:'views/current-player.html',
            link: function postLink(scope, element, attrs) {
                var numPlayers = scope.players.length;
                scope.$watch('currentPlayer',function(currentPlayer){
                    if (numPlayers > 1){
                        for (var i = 0; i < scope.players.length; i++) {
                            var player = scope.players[i];
                            if (i == currentPlayer){
                                player.position = Config.POSITION_CURRENT;
                                if (numPlayers ==2) player.position+=" dual ";
                            }
                            else if (numPlayers == 2 ){
                                if ( i != currentPlayer )
                                    player.position = Config.POSITION_OUT +" dual";
                            }
                            else{
                                if ((i + 1) % numPlayers == currentPlayer)
                                    player.position = Config.POSITION_NEXT;
                                else if ((i + numPlayers - 1) % numPlayers == currentPlayer)
                                    player.position = Config.POSITION_PAST;
                                else player.position = Config.POSITION_OUT;

                                if (numPlayers == 4){
                                    player.position += " max"
                                }
                            }
                        }
                    }
                });
            }
        };
    });
