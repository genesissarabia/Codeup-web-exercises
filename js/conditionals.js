"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//function analyzeColor(color){
//    if (color==="red"){
//        return "Red is the color of the Northern Cardinal.";
//    } else if (color==="orange"){
//        return "Orange is the color of the Painted Bat.";
//    } else if (color==="yellow"){
//        return "Yellow is the color of the Galapagos Land Iguana.";
//    } else if (color==="green"){
//        return "Green is the color of the Luna Moth.";
//    } else if (color==="blue") {
//        return "Blue is the color of the Emperor Butterflies.";
//    } else if (color==="violet") {
//        return "Violet is the color of the Costa's Hummingbird.";
//    } else {
//        return "I don't know anything about " + color + ".";
//    }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and
 * console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    switch (color) {
        case "red":
            return "Red is the color of the Northern Cardinal."
            break;
        case "orange":
            return ("Orange is the color of the Painted Bat.");
            break;
        case "yellow":
            return ("Yellow is the color of the Galapagos Land Iguana.");
            break;
        case "green":
            return ("Green is the color of the Luna Moth.");
            break;
        case "blue":
            return ("Blue is the color of the Emperor Butterflies.");
            break;
        case "violet":
            return ("Violet is the color of the Costa's Hummingbird.");
            break;
        default:
            return ("I don't know anything about " + color + ".");
            break;
    }
}
analyzeColor(randomColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
alert("Hi! Let's learn about which colors certain animals are! ");
var pickAColor=prompt("Go ahead! Pick a color!");
alert("Here's your animal color fact: " + analyzeColor(pickAColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//If you get 0- 0% discount
//If you get 1, 10% discount
//If you get 2, 25% discount
//If you get 3, 35% discount
//If you get 4, 50% discount
//If you get 5, 100% discount-- FREE!

//function calculateTotal(luckyNumber, cartTotal){
//    if (luckyNumber === 0) {
//        return cartTotal - (cartTotal * 0);
//    } else if (luckyNumber === 1) {
//        return cartTotal - (cartTotal * 0.10);
//    } else if (luckyNumber === 2) {
//        return cartTotal - (cartTotal * 0.25);
//    } else if (luckyNumber === 3) {
//        return cartTotal - (cartTotal * 0.35);
//    } else if (luckyNumber === 4) {
//        return cartTotal -(cartTotal * 0.50);
//    } else if (luckyNumber === 5) {
//        return cartTotal - cartTotal;
//    } else {
//        return "Please enter a number from 0-5."
//    }
//}

function calculateTotal(luckyNumber, cartTotal) {
    switch (luckyNumber) {
        case 0:
            return cartTotal - cartTotal * 0;
            break;
        case 1:
            return cartTotal - cartTotal * 0.10;
            break;
        case 2:
            return cartTotal - (cartTotal * 0.25);
            break;
        case 3:
            return cartTotal - (cartTotal * 0.35);
            break;
        case 4:
            return cartTotal - (cartTotal * 0.50);
            break;
        case 5:
            return cartTotal - cartTotal;
            break;
        default:
            return "Please enter a number from 0-5";
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
alert("Thank you for shopping on our website today! Enter in our sweepstakes" +
    " for your chance to win a discount on your shopping cart! Please click" +
    " 'OK' to continue.");
var whatsTheCart = prompt("Please enter your shopping cart total.");
alert("Here is your generated lucky number! " + luckyNumber);
alert("Your shopping cart total prior to discount is: $" + whatsTheCart + ". Based on" +
    " your lucky number, your discounted shopping cart total is:  $" +
    calculateTotal(luckyNumber, whatsTheCart));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var wantANumberFact= confirm("Would you like to pick a number for number" +
    " facts?");
var pickANumber= prompt("Enter any number of your choice!");
var isOddOrEven= (wantANumberFact % 2 === 0) ? "Even!" : "Odd!";
alert("You picked the number: " + pickANumber + ". Is the number you picked" +
    " odd" +
    " or even? And the result is: " + isOddOrEven);
var plusOneHundred = parseInt(pickANumber) + 100;
alert("You picked the number: " + pickANumber + ". The number plus One" +
    " Hundred is: " + plusOneHundred + ".");