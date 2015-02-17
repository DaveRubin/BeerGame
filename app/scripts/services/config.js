'use strict';

angular.module('beerGameApp')
  .service('Config', function Config() {
        this.STATE_OPENING = 'opening' ;
        this.STATE_PRE_TURN = 'pre turn' ;
        this.STATE_TURN = 'turn' ;
        this.STATE_MENU = 'menu' ;

        this.POSITION_CURRENT = 'current';
        this.POSITION_PAST = 'past';
        this.POSITION_NEXT = 'next';
        this.POSITION_OUT = 'out';
  });
