"use strict";

var i=0;

while (i<=65000){
    i=i*2
    console.log(i+2);
    i++;
}

//do-while loop


var allCones = Math.floor(Math.random() * 50) + 50;

function iceCream(allCones) {

    do {
        console.log(allCones)
        var conesSoldToCustomer = Math.floor(Math.random() * 5) + 1;
        var allCones = allCones - conesSoldToCustomer;
        console.log(allCones)
        console.log(conesSoldToCustomer + " cones sold to customer.")
    } while (allCones > conesSoldToCustomer);

        if (allCones<conesSoldToCustomer){
            console.log("Cannot sell you " + conesSoldToCustomer + ", I" +
                " only have " + allCones)
        }
}
        if (allCones === 0){
            console.log("Yay, I sold them all!")
}

iceCream(allCones)

