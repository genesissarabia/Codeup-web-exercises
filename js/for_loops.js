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


//will i have to use a string that adds a 1 to each multiplier? bc it seems
// like it's multiplying by 1, 11, 111, 1111, and so on..
//
var t=9;
var string="";

    for (var u = 1; u <= t; u++) {
        for (var v=1; v<=u; v++){
            string += u;
        }
    string += "\n"

}
console.log(string);

// I need multiples of 5 and I need them to go down by 5 from 100.

    for (var i=100; i>=5; i-=5){
        console.log(i);
    }
