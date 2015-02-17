'use strict';

angular.module('beerGameApp')
    .controller('MainCtrl', function ($scope,Player,Config) {

        $scope.players = [new Player()];
        $scope.config = Config;

        $scope.state = Config.STATE_OPENING ; //pre-turn,  turn, menu

        $scope.toggleSidebar = function () {
            $scope.menuOpen = !$scope.menuOpen;
        };

    });
