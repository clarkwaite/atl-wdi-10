// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
  /*Your first priority will be to show the current value left on the clock.
  Every time the countdown value updates, the numeric display will need to
  update as well. The function you'll be writing to implement this is
  `drawNumericDisplay(timerValue)`.*/
  /*The progress bar is a rectangle (with class `progress-bar`) inside the
  element with id `progress-bars`. As the timer counts down from 100
  to 0, the progress bar should expand its width from `0%` to `100%` of the
  width of its parent element, the `progress-bars` component.
  The function responsible for implementing this is
  `drawProgressBars(timerValue)`.*/

window.onload = function(){
  var timerVal = 100;
  console.log(timerUI);


  var countDown = function(){
    if (timerVal >= 0) {
      // Trigger All TimerUI Methods //
      for (var key in timerUI) {
        timerUI[key](timerVal);
      }
      console.log(timerVal);
      timerVal -= 1;
      setTimeout(countDown, 1000);
    }
  };
  countDown();
};
