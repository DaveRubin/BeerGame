'use strict';

angular.module('beerGameApp')
    .factory('Player', function () {
        var Player = function (avatar, gender, attractedTo) {
            this.avatar = "images/jinjo.png";
            this.gender = "male";
            this.attractedTo = "female";
            this.step = 0;
        };

        // Public API here
        return Player;
    });
