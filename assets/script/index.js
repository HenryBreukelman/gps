'use strict';

/*
  selectors
*/

const findButton = document.querySelector('.find-button');
const mapBox = document.querySelector('.map-box');
let longitude = 0;
let latitude = 0;

/*
  functions
*/

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVucnktYnJldWtlbG1hbiIsImEiOiJjbHVzdnVmbmowbWFuMnRvYXc5bnoxZzJhIn0.3dWxxXjWkhgnmthMfPBSiA';

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-97.135049, 49.888825], // starting position [lng, lat]
	zoom: 9, // starting zoom
});

function loadMap() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      getLocation, errorHandler, options
    );
  } else {
    console.log('geolocation not supported')
  }
}

function getLocation(position) {
  let { latitude, longitude } = position.coords

  console.log(
    `Latitude: ${latitude}, 
    longitude: ${longitude}`
  );
}

function errorHandler() {
  console.log('unable to get location')
}

const options = {
  enableHighAccuracy: true
}

/*
  eventlisteners
*/

findButton.addEventListener('click', loadMap);
