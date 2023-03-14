// "use strict"


// FORECAST INFORMATION
function geoCodeBuildForecast(searchString) {
    let html = "";
    geocode(searchString, mapBoxAppId).then(function (results1) {
        let markerFlyTo = {center: results1, zoom: 12}
        map.flyTo(markerFlyTo);
        marker.setLngLat(results1)

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results1[1]}&lon=${results1[0]}&appid=${openWeatherAppId}&units=imperial`).done(function (data) {
            console.log(data)

            for (var i = 0; i <= 39; i += 8) {

                html += `<h4>Date: ${data.list[i].dt_txt}</h4>`;

                html += `<h5>Min & Max: ${data.list[i].main.temp_min}&deg; / ${data.list[0].main.temp_max}&deg;</h5>`;

                html += `<img class='icons' src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`

                html += `<h5>Description: ${data.list[i].weather[0].description}</h5>`;

                html += `<h5>Humidity: ${data.list[i].main.humidity}</h5>`;

                html += `<h5>Wind: ${parseInt(data.list[i].wind.speed)}</h5>`;

                html += `<h5>Pressure: ${data.list[i].main.pressure}</h5>`;
            }

            $("#weatherBody").html(html);

        })
        html = "";
    })
}
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
    .setLngLat([ -98.48008626235448, 29.425988469224475])
    .addTo(map);

marker.on("dragend", function(e) {
    let coordinates = e.target._lngLat;
    reverseGeocode({lat: coordinates.lat, lng: coordinates.lng}, mapBoxAppId).then(function (results) {
        console.log(results)

        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherAppId}&units=imperial`).done(function (data){

            html="";

            for (var i = 0; i <= 39; i += 8) {

                html += `<h4>Date: ${data.list[i].dt_txt}</h4>`;

                html += `<h5>Min & Max: ${data.list[i].main.temp_min}&deg; / ${data.list[0].main.temp_max}&deg;</h5>`;

                html += `<img class='icons' src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`

                html += `<h5>Description: ${data.list[i].weather[0].description}</h5>`;

                html += `<h5>Humidity: ${data.list[i].main.humidity}</h5>`;

                html += `<h5>Wind: ${parseInt(data.list[i].wind.speed)}</h5>`;

                html += `<h5>Pressure: ${data.list[i].main.pressure}</h5>`;
            }

            $("#weatherBody").html(html);

        })
    })
})
