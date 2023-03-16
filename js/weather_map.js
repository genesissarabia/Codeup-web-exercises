
// FORECAST INFORMATION
function geoCodeBuildForecast(searchString) {
    let html = "";
    geocode(searchString, mapBoxAppId).then(function (results1) {
        // FLIES TO SEARCHED LOCATION
        let markerFlyTo = {center: results1, zoom: 12}
        map.flyTo(markerFlyTo);
        marker.setLngLat(results1)

        html += `<div class="row">`

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results1[1]}&lon=${results1[0]}&appid=${openWeatherAppId}&units=imperial`).done(function (data) {
            // LOOPS THROUGH EACH 8TH ITEM OF THE 40 ITEMS IN DATA OBJECT
            // RESULTING IN 5 DAY FORECAST FOR SEARCH BAR
            for (var i = 0; i <= 39; i += 8) {

                let date = new Date((data.list[i].dt) * 1000);
                let forecastDate = date.toLocaleDateString("en-US");

                html += `<div class="col-2 card mx-2 fade-in-text" style="color: #F0F0F0; font-family: Inter, sans-serif;">`

                html += `<img class='icons card-img-top' width="10" height="90" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`

                html += `<div class="card-body" style="background: #8ECAE6">`

                html += `<h4 class="card-title">Date: ${forecastDate}</h4>`;

                html += `<p class="card-text">Min & Max: ${data.list[i].main.temp_min}&deg; / ${data.list[0].main.temp_max}&deg;</p>`;


                html += `<p class="card-text">Description: ${data.list[i].weather[0].description}</p>`;

                html += `<p class="card-text">Humidity: ${data.list[i].main.humidity}%</p>`;

                html += `<p class="card-text"Wind: ${parseInt(data.list[i].wind.speed)}</p>`;

                html += `<p class="card-text">Pressure: ${data.list[i].main.pressure}</p>`;

                html += `</div>` //card-body

                html += `</div>` //card

                html += `</div>` //column

            }
            html += `</div>`

            $("#weatherBody").html(html);
            //CURRENT LOCATION FOR SEARCH BAR
            let city = "";
            city += `<h4 class="d-flex justify-content-center align-content-center" style="font-family: Inter, sans-serif; color: #FB8500">Current Location: ${data.city.name}</h4>`
            $("#city").html(city);
        })
        html = "";
    })
}

//CONNECTS SEARCH BAR TO FORECAST FUNCTION
$("#weatherSearch").click(function (e) {
    e.preventDefault();
    geoCodeBuildForecast($("#searchInput").val());

})


// MAPBOX INFORMATION

mapboxgl.accessToken = mapBoxAppId;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [ -98.48008626235448, 29.425988469224475], // starting position [lng, lat]
    zoom: 12, // starting zoom
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    marker.setLngLat([ -98.48008626235448, 29.425988469224475])
    marker.addTo(map);

//MARKER DRAGGABLE ON MAP, BELOW FUNCTION GATHERS DATA FROM MARKER LOCATION
marker.on("dragend", function(e) {
     let html="";

    let coordinates = e.target._lngLat;

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng
        }&appid=${openWeatherAppId}&units=imperial`).done(function (data){
            // LOOPS THROUGH EACH 8TH ITEM OF THE 40 ITEMS IN DATA OBJECT
            // RESULTING IN 5 DAY FORECAST FOR MARKER
            for (var i = 0; i <= 39; i += 8) {

                let date = new Date((data.list[i].dt) * 1000);
                let forecastDate = date.toLocaleDateString("en-US");

                html += `<div class="col-2 card mx-2" style="color: #F0F0F0; font-family: Inter, sans-serif;">`

                html += `<img class='icons card-img-top' width="10" height="90" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`

                html += `<div class="card-body" style="background: #8ECAE6">`

                html += `<h4 class="card-title">Date: ${forecastDate}</h4>`;

                html += `<p class="card-text">Min & Max: ${data.list[i].main.temp_min}&deg; / ${data.list[0].main.temp_max}&deg;</p>`;


                html += `<p class="card-text">Description: ${data.list[i].weather[0].description}</p>`;

                html += `<p class="card-text">Humidity: ${data.list[i].main.humidity}%</p>`;

                html += `<p class="card-text"Wind: ${parseInt(data.list[i].wind.speed)}</p>`;

                html += `<p class="card-text">Pressure: ${data.list[i].main.pressure}</p>`;

                html += `</div>` //card-body

                html += `</div>` //card

                html += `</div>` //column

            }
            html += `</div>`


            $("#weatherBody").html(html);
            //CURRENT LOCATION FOR MARKER
            let city = "";
            city += `<h4 class="d-flex justify-content-center align-content-center" style="font-family: Inter, sans-serif; color: #FB8500">Current Location: ${data.city.name}</h4>`
            $("#city").html(city);

        })
    })

//CALLS FORECAST FUNCTION AS DEFAULT UPON OPENING/RELOADING WINDOW
geoCodeBuildForecast("San Antonio, TX");




