'use strict';

angular.module('beerGameApp')
    .service('MissionsDB', function Googlespreadsheet($http,Config ,Mission) {
        this.isLoaded = false;
        var that = this;
        this.missions = [];
        this.preTurns = [];

        function extractMissions(data) {
            var rows = data.feed.entry;
            var tmpMission = {};

            angular.forEach(rows, function(row) {
                tmpMission = new Mission(row);
                if ( tmpMission.type == Config.MISSION_TYPE_PRE_TURN )
                    that.preTurns.push(tmpMission);
                else that.missions.push(tmpMission);
            });

            that.isLoaded = true;
            console.log(that.missions);
            console.log(that.preTurns);
        }
        function getRandomItem(arr){
            return arr[ Math.round( Math.random() * (arr.length-1)) ];
        }

        this.getRandomMission = function(){
            return getRandomItem(that.missions);
        };

        this.getRandomPreTurn = function(){
            return getRandomItem(that.preTurns);
        };

        $http.get(Config.SPREADSHEET_URL).then(function(response) {
            extractMissions(response.data);
        });
    });
