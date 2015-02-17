'use strict';

angular.module('beerGameApp')
    .service('Avatars', function Avatars() {
        var avatarsArr = [
            'images/jinjo.png',
            'images/dudi.jpg',
            'images/oizo.jpg',
            'images/tom.jpg'
        ];

        this.getAvatar = function () {
            if (avatarsArr.length == 0) return '';
            var randNum = Math.round(Math.random() * (avatarsArr.length - 1));
            return avatarsArr.splice(randNum,1)[0];

        }
    });
