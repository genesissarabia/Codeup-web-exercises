"use strict";

var i=0;

while (i<=65000){
    i=i*2
    console.log(i+2);
    i++;
}

console.log("End of While Loop exercise.")
//do-while loop
console.log("Beginning of Do-While Loop exercise.")

var allCones = Math.floor(Math.random() * 50) + 50;

function iceCream(allCones) {

    do {
        console.log(allCones)
        var conesSoldToCustomer = Math.floor(Math.random() * 5) + 1;
        console.log(conesSoldToCustomer + " cones sold to customer.")
        if (allCones < conesSoldToCustomer) {
            console.log("Cannot sell you " + conesSoldToCustomer + ", I" +
                " only have " + allCones)
        } else {
            allCones -= conesSoldToCustomer;
            console.log(conesSoldToCustomer + " have been sold.");
            console.log(allCones + " left.")
        }

    } while (allCones > 0);
    console.log("Yay, I sold them all!")
}


iceCream(allCones);

