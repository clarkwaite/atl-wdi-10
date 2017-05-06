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
    Stopwatch.millisecs += 10;
    if (Stopwatch.millisecs > 999) {
      Stopwatch.secs++ , Stopwatch.millisecs = 0;
      if (Stopwatch.secs > 59) {
        Stopwatch.mins++ , Stopwatch.secs = 0;
      }
    }
  },
  reset: function () {
    Stopwatch.mins = '0' + '0';
    Stopwatch.secs = '0' + '0';
    Stopwatch.millisecs = '0' + '0';
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
    if (Stopwatch.secs.length < 2) {
      '0' + Stopwatch.secs;
    }

    // It displays the values of minutes, seconds, and (tens of)
    //   milliseconds elapsed in the DOM element with id `time-display`, in
    //   the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
    //   `00:00:00`.
    //It pads the values of minutes, seconds, and (tens of) milliseconds
    //   with zeros so that the strings are at least two characters long.
  },
  updateLapListDisplay: function (laps) {
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function (number, length) {
    //1.  If `number` has fewer digits than `length`,
    //  a.  it should return a `number` as a string, padded on the left with
    //      zeros until its length is equal to `length`
    //2.  If `number` does not have fewer digits than `length`,
    //  a.  it should return `number` as a string, unaltered.

  }
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function () {
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);

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
