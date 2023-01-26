"use strict";

/*var x =  7;

function showMultiplicationTable(x) {
    for (var y = 0; y <= 10; y++) {
        var z=x*y;
        console.log("7 x " + y  +"= " + z);
    }
}*/



function randomNumber(){
    return Math.floor(Math.random() * 200 + 20);
}
function isOddOrEven(a) {
        if (a % 2 === 0) {
            console.log(a + " is even.");
        } else {
            console.log(a + " is odd.");
        }
}
function randomOddOrEven () {
    for (var i = 0; i < 10; i++) {
        isOddOrEven(randomNumber());
    }
}

randomOddOrEven();

