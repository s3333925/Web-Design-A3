AOS.init();

// Forget or remember user contact information

checkUserDetails();

// Function to check if any user data is stored in local storage
function checkUserDetails() {
  if (localStorage.getItem("name") === null) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  } else {
    document.getElementById("name").value = localStorage.name;
    document.getElementById("email").value = localStorage.email;
    document.getElementById("remember").setAttribute("checked", "checked");
  }
}

// Function to clear or store user data in local storage
function forgetOrRememberMe() {
  // If switch is unchecked delete user information from local storage
  if (document.getElementById("remember").checked !== true) {
    localStorage.clear();
  }
  // Otherwise store user information in local storage
  else {
    localStorage.name = document.getElementById("name").value;
    localStorage.email = document.getElementById("email").value;
  }
}

// Back to top button

let button = document.getElementById("button-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
button.addEventListener("click", backToTop);

function backToTop() {
  document.documentElement.scrollTop = 0;
}

//

var originLat;
var originLon;
var destLat;
var destLon;
var dist;
var hyperTravelTime;
var planeTravelTime;
var carTravelTime;

function estimateTravelTime() {
  let origin = document.getElementById("origin").value;
  let dest = document.getElementById("dest").value;

  setOriginLatitudeLongitude(origin);
  setDestLatitudeLongitude(dest);

  calcDistanceBetween(originLat, originLon, destLat, destLon);

  calcHyperTravelTime(dist);
  calcPlaneTravelTime(dist);
  calcCarTravelTime(dist);

  document.getElementById("hyperPB").value = (hyperTravelTime * 60) / 7.5;
  document.getElementById("planePB").value = (planeTravelTime * 60) / 7.5;
  document.getElementById("trainPB").value = (carTravelTime * 60) / 7.5;

  document.getElementById("hyperRes").innerHTML = hyperTravelTime * 60 + " min";
  document.getElementById("planeRes").innerHTML = planeTravelTime * 60 + " min";
  document.getElementById("carRes").innerHTML = carTravelTime * 60 + " min";
}

function setOriginLatitudeLongitude(origin) {
  if (origin == "ade") {
    originLat = -34.92123;
    originLon = 138.599503;
  } else if (origin == "bri") {
    originLat = -27.4705;
    originLon = 153.026;
  } else if (origin == "mel") {
    originLat = -37.8136;
    originLon = 144.9631;
  } else if (origin == "per") {
    originLat = -31.9523;
    originLon = 115.8613;
  } else {
    originLat = -33.8688;
    originLon = 151.2093;
  }
}

function setDestLatitudeLongitude(destination) {
  if (destination == "ade") {
    destLat = -34.92123;
    destLon = 138.599503;
  } else if (destination == "bri") {
    destLat = -27.4705;
    destLon = 153.026;
  } else if (destination == "mel") {
    destLat = -37.8136;
    destLon = 144.9631;
  } else if (destination == "per") {
    destLat = -31.9523;
    destLon = 115.8613;
  } else {
    destLat = -33.8688;
    destLon = 151.2093;
  }
}

// Function to calculate the distance between two latitude and longitude co-ordinates in km
function calcDistanceBetween(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  dist = d;
}

// Converts degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function calcHyperTravelTime(dist) {
  hyperTravelTime = (dist / 1000).toFixed(1);
}

function calcPlaneTravelTime(dist) {
  planeTravelTime = (dist / 740).toFixed(1);
}

function calcCarTravelTime(dist) {
  carTravelTime = (dist / 90).toFixed(1);
}
