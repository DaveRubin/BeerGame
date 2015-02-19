'use strict';

angular.module('beerGameApp')
    .controller('MainCtrl', function ($scope, Player, Config, MissionsDB) {
        $scope.database = MissionsDB;
        $scope.players = [new Player(),new Player(),new Player(),new Player()];
        $scope.config = Config;

        $scope.state = Config.STATE_OPENING ; //pre-turn,  turn, menu
        $scope.state = Config.STATE_PRE_TURN ; //pre-turn,  turn, menu

        $scope.setState = function(state){
            $scope.state = state;
        };

        $scope.toggleSidebar = function () {
            $scope.menuOpen = !$scope.menuOpen;
        };
    });
