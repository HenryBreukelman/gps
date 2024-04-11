'use strict';

/*
  selectors
*/

const findButton = document.querySelector('.find-button');
const mapBox = document.querySelector('.map-box');

/*
  functions
*/

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVucnktYnJldWtlbG1hbiIsImEiOiJjbHVzdnVmbmowbWFuMnRvYXc5bnoxZzJhIn0.3dWxxXjWkhgnmthMfPBSiA';

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-97.135049, 49.888825], // starting position [lng, lat]
	zoom: 12, // starting zoom
  pitch: 45,
});

function loadMap() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      getLocation, errorHandler, options
    );
  } else {
    console.log('geolocation not supported');
  }
}

function getLocation(position) {
  let { latitude, longitude } = position.coords;

  let location = [longitude, latitude];
  map.flyTo({ center: location, zoom: 10 });
  let marker = new mapboxgl.Marker({
    color: "#0079f4",
    }).setLngLat(location)
    .addTo(map);
}

function errorHandler() {
  console.log('unable to get location');
}

const options = {
  enableHighAccuracy: true
}

/*
  eventlisteners
*/

findButton.addEventListener('click', loadMap);
