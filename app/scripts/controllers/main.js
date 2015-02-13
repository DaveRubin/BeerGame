'use strict';

angular.module('beerGameApp')
    .controller('MainCtrl', function ($scope,Player) {

        $scope.players = [new Player()];


        $scope.toggleSidebar = function () {
            console.log("toggle");
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
