(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|');

    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

     planetsArray.forEach (function (planets){
        console.log(planets + "<br>");
    });

    var pups = ['Roxy', 'Ordekie', 'Kazzy', 'Suzy'];

    var pupsUnorderedList = document.createElement('ul');

    pups.forEach(function (doggos){
        var li = document.createElement('li');
        li.textContent = doggos;
        pupsUnorderedList.appendChild(li);
    });

    console.log(pupsUnorderedList)
    var app = document.querySelector('#app')
    // app.appendChild(pupsUnorderedList); (couldn't get this to work so it
    // could show on the HTML document, it said that it was null?

//     console.log(planetsArray);
// document.body.innerHTML += planetsArray;
//     console.log(document.body.innerHTML);


})();













