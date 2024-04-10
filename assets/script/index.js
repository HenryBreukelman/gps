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

}

/*
  eventlisteners
*/

findButton.addEventListener('click', loadMap);
window.addEventListener('load', loadMap);