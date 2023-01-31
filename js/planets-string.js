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
   /* var planetsBreak = "<br>Mercury</br><br>Venus</br><br>Earth</br><br>Mars</br><br>Jupiter</br><br>Saturn</br><br>Uranus</br>";*/

     planetsArray.forEach (function (planets){
        console.log(planets + "<br>");
    });

   /*

    console.log(planetsBreak);
document.body.innerHTML += planetsBreak;
    console.log(document.body.innerHTML);*/

})();