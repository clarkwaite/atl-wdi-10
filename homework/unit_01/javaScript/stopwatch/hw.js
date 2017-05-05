// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    Stopwatch.millisecs += 10;
    if (Stopwatch.millisecs > 999) {
      Stopwatch.secs++, Stopwatch.millisecs = 0;
    if (Stopwatch.secs > 59) {
      Stopwatch.mins++, Stopwatch.secs = 0;
    } 
   } 
  },
  reset: function(){
    // Your Code Here
  },
  start: function(){
    Stopwatch.isRunning = true;
    Stopwatch.tickClock();
     
  },
  stop: function(){
    // Your Code Here
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
// It displays the values of minutes, seconds, and (tens of)
//   milliseconds elapsed in the DOM element with id `time-display`, in
//   the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
//   `00:00:00`.
//It pads the values of minutes, seconds, and (tens of) milliseconds
//   with zeros so that the strings are at least two characters long.
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    $('#millisecs').html(Stopwatch.millisecs);
    $('#secs').html(Stopwatch.secs);
    $('#mins').html(Stopwatch.mins);
//It retrieves the current time values (mins, secs, millisecs) from `Stopwatch`.
//It calls `updateTimeDisplay` on `ViewEngine`.
  },
  handleClickStart: function() {
    Stopwatch.start(); 

  },

  handleClickStopReset: function(){
    // Your Code Here
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
    $('#lap').on('click', AppController.handleClickLap);
      $('#stop').on('click', AppController.handleClickStopReset);
};