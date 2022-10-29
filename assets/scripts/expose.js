// expose.js

window.addEventListener('DOMContentLoaded', init);
var HornAudio;
var Volume;
var HornSelect;
var HornImage;
var VolumeImage;
const jsConfetti = new JSConfetti();
function init() {
  // TODO\
  //change image, volume and play sound, animation.
  document.querySelector("#horn-select").addEventListener('change', ChangeHornImg);
  document.querySelector("#volume-controls").addEventListener('input', ChangeVolume);
  document.querySelector("button").addEventListener('click', AnimationAndSound);
}

function ChangeHornImg() {
  //select image
  HornSelect = document.querySelector("#horn-select");
  HornImage = document.querySelector("#expose img");
  //condition 
  if (HornSelect.value == "air-horn") {
    HornImage.src = "./assets/images/air-horn.svg";
    HornImage.alt = "This is air-horn";
  }
  else if (HornSelect.value == "car-horn") {
    HornImage.src = "./assets/images/car-horn.svg";
    HornImage.alt = "This is car-horn";
  }
  else if (HornSelect.value == "party-horn") {
    HornImage.src = "./assets/images/party-horn.svg";
    HornImage.alt = "This is party-horn";
  }
  else {
    HornImage.src = "./assets/images/no-image.png";
    HornImage.alt = "No image";
  }
}

function ChangeVolume() {
  //change volume
  Volume = document.querySelector("#volume-controls input").value;
  //change image
  VolumeImage = document.querySelector("#volume-controls img");

  if (Volume == 0) {
    VolumeImage.src = "./assets/icons/volume-level-0.svg";
    VolumeImage.alt = "Volumelevel 0";
  }
  else if (Volume >= 1 && Volume < 33) {
    VolumeImage.src = "./assets/icons/volume-level-1.svg";
    VolumeImage.alt = "VolumeLevel 1";
  }
  else if (Volume >= 33 && Volume < 67) {
    VolumeImage.src = "./assets/icons/volume-level-2.svg";
    VolumeImage.alt = "Volumelevel 2";
  }
  else {
    VolumeImage.src = "./assets/icons/volume-level-3.svg";
    VolumeImage.alt = "Volumelevel 3";
  }
  HornAudio.volume = Volume / 100;
}

function AnimationAndSound() {
  //play audio 
  HornAudio = document.querySelector("audio");
  if (HornSelect.value == "air-horn") {
    HornAudio.src = "./assets/audio/air-horn.mp3";
    HornAudio.alt = "This is air-horn.mp3";
  }

  else if (HornSelect.value == "car-horn") {
    HornAudio.src = "./assets/audio/car-horn.mp3";
    HornAudio.alt = "This is car-horn.mp3";
  }
  //play audio and add animation
  else if (HornSelect.value == "party-horn") {
    HornAudio.src = "./assets/audio/party-horn.mp3";
    HornAudio.alt = "This is party-horn.mp3";
    jsConfetti.addConfetti();
  }

  else {
    HornAudio.src = "";
    HornAudio.alt = "No Audio";
  }
  HornAudio.play();
}