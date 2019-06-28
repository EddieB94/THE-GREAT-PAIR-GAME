"use strict";
var game = {
    state: {
        currentLevel: 1,//window.localStorage.getItem("currentLevel"),
        time: {
            second: 0,
            minute: 0,
            hour: 0,
            total: function () {
                return (this.time.hour * 100) + this.time.minute + (this.time.second * 0.01);
            }
        },
        moves: 0
    },
    levels: {
        one: {
            id: 1,
            gridWidth: 4,
            targetTime: {
                second: 0,
                minute: 1,
                hour: 0
            },
            targetMoves: 20
        },
        two: {
            id: 2,
            gridWidth: 4,
            targetTime: {
                second: 0,
                minute: 1,
                hour: 0
            },
            targetMoves: 20
        },
        three: {
            id: 3,
            gridWidth: 4,
            targetTime: {
                second: 0,
                minute: 1,
                hour: 0
            },
            targetMoves: 20
        }
    }
};

module.exports = game;