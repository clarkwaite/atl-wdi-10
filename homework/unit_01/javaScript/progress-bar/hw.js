// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

  /*The progress bar is a rectangle (with class `progress-bar`) inside the
  element with id `progress-bars`. As the timer counts down from 100
  to 0, the progress bar should expand its width from `0%` to `100%` of the
  width of its parent element, the `progress-bars` component.
  The function responsible for implementing this is
  `drawProgressBars(timerValue)`.*/
  //#### 3. The Lit Fuse

  /*This one's a little cutesy. Similar to to the progress bar, the lengths of the
  `.burnt` and `.unburnt` divs will need to change over time as the counter runs
  down. Specifically. `.unburnt` will need to go from 98% of the width of the
  component (since the `.flame` div also takes up some space) to 0% of the width
  as the timer runs down, while `.burnt` does the reverse. The function
  responsible for implementing this is `drawLitFuses(timerValue)`.*/
 /* #### 4. The Crawler

  If you thought the last one was cutesy, hoo boy. The crawler will make its
  way from left to right across the screen, at a rate of 10 pixels per second.
  Additionally, as the crawler makes its way across the screen, it should move
  back and forth (i.e. up and down) by 10 px with each step. The function
  responsible for implementing this behavior is `drawCrawlers(timerValue)`.

> Under what conditions will the crawler make it all the way across the screen?*/

var timerUI = {
  drawNumericDisplay: function(timerValue){
     var countdownTimer = document.getElementById('numeric-display');
     countdownTimer.innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    // var theProgressBar = document.getElementsByClassName('progress-bar');
     var timeElapsed = (100 - timerValue);
     document.getElementsByClassName('progress-bar')[0].style.width = (timeElapsed +'%');
  },
  drawLitFuses: function(timerValue){
     var timeElapsed = (100 - timerValue);
     document.getElementsByClassName('unburnt')[0].style.width = (timerValue -2 +'%');
  },
  drawCrawlers: function(timerValue){
     var timeElapsed = (100 - timerValue);
     var ladyBug = document.getElementsByClassName('crawler')[0];
     ladyBug.style.marginLeft = (timeElapsed*(6.56) +'px');
     if (timeElapsed%2===0) {
     ladyBug.style.marginTop = '10px';
    } else {
     ladyBug.style.marginTop = '0px';
   }
  }
}


 //    var container = document.getElementsByClassName('component')[0];
 //    container.style.backgroundColor = 'red';
