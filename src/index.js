import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();
var freqX = 160; 

oscillator.type = 'sine';
oscillator.frequency.value = freqX; // value in hertz
oscillator.connect(audioCtx.destination);

function synthNote() {
    oscillator.start(); // start the tone playing

    oscillator.stop(2); // the tone will stop again in 5 seconds.

    oscillator.onended = function() {
      console.log('Your tone has now stopped playing!');
    }
}



document.getElementById("synthButton").addEventListener("click", playSynth);

function playSynth() {
    document.getElementById("synthButton").innerHTML = synthNote();
}