// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var voiceSelect = document.querySelector('select');
var voices = [];
var SmileImage = document.querySelector('img');
var textInput = document.querySelector("#text-to-speak");
function init() {
  // TODOA
  document.querySelector('button').addEventListener('click', SpeakText);
}


function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function SpeakText() {
  var utterThis = new SpeechSynthesisUtterance(textInput.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);

  SmileImage.src = "./assets/images/smiling-open.png";

  utterThis.addEventListener('end', (event) => {
    SmileImage.src = "./assets/images/smiling.png";
  });
}


