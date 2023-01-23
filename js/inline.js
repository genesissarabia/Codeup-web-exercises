"use strict";
console.log('Hello from JavaScript!');

alert("Welcome to my website!");
var userInput= prompt("What is your favorite color?");
alert("Great, " + userInput + " is my favorite color too!");

//-----------------------------------

alert("We have movies for you to rent! At this time, our selection consists " +
    "of 'The Little Mermaid, 'Brother Bear' and 'Hercules'!");
confirm("The daily rental amount is $3/day. Would you like to join in on " +
    "the fun?");
alert("Well, if you said yes, please enter the amount of days you would like " +
    "to rent for! If you selected to opt out, please enter '0' for every" +
    " pop up to proceed with website! Thank you!");
var dailyRentPrice=3;

var rentLittleMermaid=prompt("For how many days would you like to " +
    "rent 'The Little Mermaid'?");
alert("Sweet, you will rent 'The Little Mermaid' for " + rentLittleMermaid +
    " day(s).");

var rentBrotherBear= prompt("For how many days would you like to rent" +
    " 'Brother Bear'?");
alert("Awesome,  you will rent 'Brother Bear' for " + rentBrotherBear +
    " day(s).");

var rentHercules= prompt("For how many days would you like to rent " +
    "'Hercules'?");
alert("Yes! You will rent 'Hercules' for " + rentHercules + " day(s).");

var totalRent=((rentLittleMermaid*dailyRentPrice) +
    (rentBrotherBear*dailyRentPrice) + (rentHercules*dailyRentPrice));
alert("Now for the grand total. Drumroll please! *Imagine the drumroll*");
alert("Your total purchase amount to rent 'The Little Mermaid', 'Brother " +
    "Bear' and 'Hercules' is: $" + totalRent + ". Thank you for your " +
    "purchase and have an awesome day!");

console.log('First bullet point complete of Exercise 3.');
//--------------------------------

var googleRate=400;
var amazonRate=380;
var facebookRate=350;

alert("Howdy! It's that time of the week- PAY DAY! Let's take a look at " +
    "your earnings.")

var googleHours=prompt("How many hours did you perform work for " +
    "Google?"); // 6 hours
var amazonHours=prompt("Awesome! Now let's move on to Amazon. How many " +
    "hours of work did you perform for Amazon?"); // 4 hours
var facebookHours=prompt("Nice! And finally, Facebook. How many " +
    "hours of work did you perform for Facebook?"); // 10 hours

var totalPay=((googleRate*googleHours) + (amazonRate*amazonHours) + (facebookRate*facebookHours));
alert("Thank you for entering your information. Your total weekly pay from " +
    "Google, Amazon and Facebook will be: $" + totalPay + ".");

console.log('Second bullet point complete of Exercise 3.')
//-------------------------------


alert("Hello Student! Thank you for showing interest in Michigan State " +
    "University's 'Surviving the Coming Zombie Apocalypse - " +
    "Catastrophes and Human Behavior' course. For your course scheduler, " +
    "please answer the following prompts to see if you are eligible to " +
    "enroll.");

var scheduleNoConflict=confirm("Are you currently enrolled in any courses" +
    " from " +
    "1:00pm-2:30pm EST? If not enrolled in any courses at this time, please " +
    "select 'OK'. If you are in enrolled at another course during this time, " +
    "please select 'Cancel'.");
var classNotFull=confirm("From the course selection page, is the Student " +
    "Enrollment currently under 35 students? If this section shows under 35, " +
    "please select 'OK'. If at 35 students, please select 'Cancel'.");
var enrolled=scheduleNoConflict&&classNotFull;
alert("Your response came back as " + enrolled + ". If 'true', you are free" +
    " to enroll in our course. If 'false', please try again the following" +
    " semester. Thank you.");
console.log('Third bullet point complete of Exercise 3.');


//----------------------------

alert("Hello! Welcome to our store where we only sell orange juice! The" +
    " Orange Juice Connoisseurs!");

var purchaseInquiry= prompt ("How many cartons" +
    " of orange juice would you like to purchase today?");
var premiumCustomer= confirm("Are you one of our beloved Orange Juice" +
    " Connoisseur premium customers?");
var offerExpiryInquiry= confirm("Are you purchasing our awesome orange juice" +
    " after the date: February 10th, 2008?");
var orangeJuiceDeal= ((purchaseInquiry>=2) && offerExpiryInquiry) || premiumCustomer;

alert("Retrieving your answers...");
alert("Your ultimate result: " + orangeJuiceDeal + ". If showing 'true'," +
    " congratulations! You qualify for our Orange Juice half off discount" +
    " today! If showing 'false', you are still getting a great deal on our" +
    " orange juice! Thank you for shopping!");
console.log('Fourth bullet point complete of Exercise 4.')



















