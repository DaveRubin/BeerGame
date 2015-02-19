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

        this.MISSION_TYPE_PRE_TURN = 'pre-turn';
        this.MISSION_TYPE_BONUS = 'bonus';
        this.MISSION_TYPE_PENALTY = 'penalty';
        this.MISSION_TYPE_TRUTH = 'truth';
        this.MISSION_TYPE_DARE = 'dare';

        this.DB_KEY = '1ewfvl4LxyKlY45DELASkmw7mMIdNYwy4KGxsoSzwzXs';
        this.SPREADSHEET_URL = "https://spreadsheets.google.com/feeds/list/"+
            this.DB_KEY+
            "/od6/public/values?alt=json"
  });
