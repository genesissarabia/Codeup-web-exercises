"use strict";

console.log("Number to skip is: 27")
for (i=1; i<50; i++){
    if (i % 2 === 0) {
        continue;
    }
        if (i===27){
            console.log("Yikes! Skipping number: 27");
        }
        else {
            console.log("Here is an odd number: " + i);
    }
}


