// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function () {
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
  advanceTenMillisecs: function () {
    Stopwatch.millisecs ++;
    if (Stopwatch.millisecs <= 9) {
      Stopwatch.millisecs = "0" + Stopwatch.millisecs;
    }
    if (Stopwatch.millisecs > 99) {
      Stopwatch.secs ++, Stopwatch.millisecs = 0;
      if (Stopwatch.secs > 59) {
        Stopwatch.mins++ , Stopwatch.secs = 0;
      }
    }
  },
  reset: function () {
    Stopwatch.mins = '00';
    Stopwatch.secs = '00';
    Stopwatch.millisecs = '00';
    Stopwatch.laps = [];
  },
  start: function () {
    if (Stopwatch.isRunning === false) {
      Stopwatch.isRunning = true;
      Stopwatch.tickClock();
    }
  },

  stop: function () {
    Stopwatch.isRunning = false;
  },

  lap: function () {
    var timeDisplayForLapTime = Stopwatch.mins + ':' + Stopwatch.secs + ':' + Stopwatch.millisecs;
    if (Stopwatch.isRunning === true) {
      $('#lap-list').append('<li>' + timeDisplayForLapTime + '</li>');
    }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function (mins, secs, millisecs) {
    $('#millisecs').html(Stopwatch.millisecs);
    $('#secs').html(Stopwatch.secs);
    $('#mins').html(Stopwatch.mins);
    ViewHelpers.zeroFill();
  },
  updateLapListDisplay: function (laps) {
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function (number, length) {
    
    if (Stopwatch.secs.toString().length < 2) {
      Stopwatch.secs = '0' + Stopwatch.secs;
    }
    if (Stopwatch.mins.toString().length < 2) {
     Stopwatch.mins = '0' + Stopwatch.mins;
    }
  }
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function () {
    ViewEngine.updateTimeDisplay();

  },

  handleClickStart: function () {
    Stopwatch.start();
  },

  handleClickStopReset: function () {
    if (Stopwatch.isRunning === true) {
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      $('#lap-list').empty();
    }
  },
  handleClickLap: function () {
    Stopwatch.lap()
  }
};

window.onload = function () {
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
  $('#lap').on('click', AppController.handleClickLap);
  $('#stop').on('click', AppController.handleClickStopReset);
};
