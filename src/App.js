import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <div id="synthButton"></div>
      </div>

    );
  }
}

export default App;

/*
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

    oscillator.stop(1); // the tone will stop again in 5 seconds.

    oscillator.onended = function() {
      console.log('Your tone has now stopped playing!');
    }
}



document.getElementById("synthButton") .addEventListener("click", playSynth);

function playSynth() {
    document.getElementById("synthButton").innerHTML = synthNote();
}
*/