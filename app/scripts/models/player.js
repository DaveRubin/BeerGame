'use strict';

angular.module('beerGameApp')
    .factory('Player', function (Avatars) {
        var Player = function (avatar, gender, attractedTo) {
            this.avatar = Avatars.getAvatar();
            this.gender = 'male';
            this.attractedTo = 'female';
            this.step = 0;
        };

        // Public API here
        return Player;
    });
