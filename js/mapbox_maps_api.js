"use strict"

let myMarker = new mapboxgl.Marker();
myMarker.setLngLat([-98.48503860638156, 29.56599326856003]);
myMarker.addTo(map);

let popup = new mapboxgl.Popup();

popup.setLngLat([-98.48503860638156, 29.56599326856003])
popup.setHTML("<span>El Bucanero</span>");

myMarker.setPopup(popup);

