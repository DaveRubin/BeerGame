'use strict';

angular.module('beerGameApp')
    .controller('MainCtrl', function ($scope,Player) {

        $scope.players = [new Player()];

        $scope.addPlayer = function(){
          $scope.players.push(new Player());
        };

        $scope.toggleEdit = function(selectedPlayer){
            for (var i = 0; i < $scope.players.length; i++) {
                var player = $scope.players[i];
                if (selectedPlayer == player){
                    player.edit = !player.edit;
                }
                else player.edit = false;
            }
        };

        $scope.toggleSidebar = function () {
            console.log("toggle");
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
