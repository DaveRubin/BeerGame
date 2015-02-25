'use strict';

angular.module('beerGameApp')
    .factory('Mission', function () {

        function returnButton(string){
            var tmpArr = string.split("-");
            return {
                text:tmpArr[0],
                action:tmpArr[1]
            }
        }

        var Mission = function(data){
            var that = this;
            if (data){
                var tmpArr;
                that.buttons = [];
                that.id = data.title.$t;
                //clear spaces from content string
//                data.content.$t = data.content.$t.replace(/, /g, ',');

                angular.forEach(data.content.$t.split(", "), function(pair) {
                    tmpArr = pair.split(": ");
                    that[tmpArr[0]] = tmpArr[1];
                });

                that.buttons.push(returnButton(that.button1));
                if (that.button2)that.buttons.push(returnButton(that.button2));
            }
            else{
                that.id = 0;
                that.type = 'pre-turn';

                that.buttons = [
                    {text:'שחק',action:'nextPlayer'}
                ];
                that.text = 'האם זה טקסט?';
                that.points = "1";
            }
        };

        return Mission;
    });
