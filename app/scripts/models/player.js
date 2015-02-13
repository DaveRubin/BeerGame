'use strict';

angular.module('beerGameApp')
    .factory('Player', function () {
        var Player = function (avatar, gender, attractedTo) {
            this.avatar = "";
            this.gender = "";
            this.attractedTo = "";
        };

        // Public API here
        return Player;
    });
