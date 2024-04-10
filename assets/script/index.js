'use strict';

/*
  selectors
*/

const findButton = document.querySelector('.find-button');
const map = document.querySelector('.map-box');
let longitude = 0;
let latitude = 0;

/*
  functions
*/

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
//window.addEventListener('load', loadMap);