var animationState = [false, 0];
var startButton = document.querySelector("#loading-circle");
var spotlight = document.querySelector("#white-circle");
var circleShadow = document.querySelector("#circle-shadow");
var popUpMask = document.querySelector("#pop-up-mask");
var tractorBeam = document.querySelector("#tractor-beam");
var recordNeedle = document.querySelector("#record-needle");
var d = new Date();
var hour = (d.getHours() + 24) % 12 || 12;
var minutes = d.getMinutes();

window.onload = loadingCircle;
startButton.addEventListener("mouseenter", raiseLoadingCircle, false);
startButton.addEventListener("mouseleave", lowerLoadingCircle, false);
startButton.addEventListener("click", invertCircle, false);
spotlight.addEventListener("click", easterEggs);
circleShadow.addEventListener("click", easterEggs);
popUpMask.addEventListener("click", easterEggs);

function easterEggs() {
  switch (true) {
    case animationState[1] === 1 && animationState[0] !== true:
      tellTime();
      loadAboutCredit();
      break;
    case animationState[1] === 2 && animationState[0] !== true:
      showUFO();
      loadExperienceCredit();
      break;
    case animationState[1] === 3 && animationState[0] !== true:
      loadRecordCredit()
      finishAbduction();
      break;
    case animationState[1] === 4 && animationState[0] !== true:
      birdman();
      loadContactCredit();
      break;
    case animationState[1] === 5 && animationState[0] !== true:
      putYourRecordsOn();
      break;
    case animationState[1] === 6 && animationState[0] !== true:
      dartTwo();
      break;
    case animationState[1] === 7 && animationState[0] !== true:
      dartThree();
      break;
    case animationState[1] === 8 && animationState[0] !== true:
      eekAMouse();
      break;
    default:

  }
}

function loadingCircle() {
  anime({
    targets: "#loading-circle",
    width: '20%',
    easing: "easeInOutCubic",
    duration: 500
  });
}

function raiseLoadingCircle() {
  anime({
    targets: "#loading-circle",
    scale: 0.95,
    translateX: '-53%',
    translateY: '-53%',
    easing: "easeOutQuint",
    duration: 300
  });
}

function lowerLoadingCircle() {
  anime({
    targets: "#loading-circle",
    scale: 1,
    translateX: '-50%',
    translateY: '-50%',
    easing: "easeOutQuint",
    duration: 300
  });
}

function invertCircle() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    startButton.remove();
    spotlight.style.display = "block";
    anime({
      targets: ".screen-frame",
      background: '#000',
      duration: 100
    });
    anime({
      targets: "#white-circle",
      opacity: 1,
      duration: 100,
      complete: function(anim) {
        return animationState = [false, 1];
      }
    });
    document.querySelector("#title-credit").style.display = "block";
  }
}

function loadAboutCredit() {
  document.querySelector("#about-credit").style.display = "block";
}

function loadExperienceCredit() {
  document.querySelector("#about-credit").style.display = "none";
  document.querySelector("#experience-credit").style.display = "block";
}

function loadRecordCredit() {
  document.querySelector("#experience-credit").style.display = "none";
  document.querySelector("#record-credit").style.display = "block";
}

function loadContactCredit() {
  document.querySelector("#record-credit").style.display = "none";
  document.querySelector("#contact-credit").style.display = "block";
}


///    Make the Hole    ///
function makeHole() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    anime({
      targets: "#white-circle",
      scaleY: 0.2,
      scaleX: 1,
      translateX: '-50%',
      translateY: '190%',
      easing: "easeInOutCubic",
      duration: 450
    });
    anime({
      targets: "#circle-shadow",
      scaleY: 5,
      opacity: 1,
      delay: 250,
      duration: 450
    });
    anime({
      targets: "#pop-up-mask",
      opacity: 1,
      delay: 400,
      duration: 450,
      complete: function(anim) {
        return animationState = [false, 2];
      }
    });
  }
}



///    Basketball    ///
function basketballToss() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    anime({
      targets: "#basketball",
      translateY: '-170%',
      easing: "easeOutCubic",
      direction: 'alternate',
      duration: 1000,
      complete: function(anim) {
        return animationState = [false, 3];
      }
    });
    anime({
      targets: "#basketball-lines",
      bottom: 33,
      easing: "easeInSine",
      delay: 150,
      duration: 1600
    });
  }
}




function dartBoard() {
  if (animationState[0] !== true) {
    tractorBeam.style.display = "none";
    document.querySelector("#speaker-off").style.display = "none";
    document.querySelector("#speaker-on").style.display = "none";
    gibbo.pause();
    animationState[0] = true;
    anime({
      targets: "#record-lines",
      scale: 0,
      easing: "easeOutExpo",
      duration: 300,
      opacity: 0
    });
    anime({
      targets: "#record-pin",
      opacity: 0,
      easing: "easeOutExpo",
      duration: 700
    });
    anime({
      targets: "#record-shine",
      opacity: 0,
      easing: "easeOutExpo",
    });
    anime({
      targets: "#record-needle",
      rotate: 18,
      skewX: 65,
      translateX: '14%',
      easing: "easeOutExpo",
      duration: 700,
    });
    anime({
      targets: "#speaker-off",
      opacity: 0,
      duration: 1200,
    });
    anime({
      targets: "#speaker-on",
      opacity: 0,
      duration: 1200,
    });
    anime({
      targets: "#white-circle",
      scaleY: 1,
      scaleX: 0.5,
      translateX: '270%',
      translateY: '-80%',
      easing: "easeInOutQuad",
      duration: 500,
    });
    anime({
      targets: "#dart-board",
      opacity: 1,
      easing: "easeInOutQuad",
      delay: 500,
      duration: 400
    });
    anime({
      targets: "#dart-1",
      translateX: '1381%',
      translateY: '-243%',
      easing: "linear",
      rotate: 9,
      delay: 1200,
      duration: 500,
      complete: function(anim) {
        return animationState = [false, 6];
      }
    });
    anime({
      targets: "#dart-fins #fin-2",
      duration: 100,
      opacity: 1,
      loop: 13,
      direction: 'alternate',
      easing: 'linear'
    });
    anime({
      targets: "#dart-fins #fin-1",
      duration: 100,
      opacity: 0.6,
      loop: 13,
      direction: 'alternate',
      easing: 'linear'
    });
  }
}

function dartTwo() {
  if (animationState[0] !== true) {
    anime({
      targets: "#dart-2",
      translateX: '1071%',
      translateY: '-113%',
      easing: "linear",
      rotate: 4,
      duration: 300,
      complete: function(anim) {
        return animationState = [false, 7];
      }
    });
    anime({
      targets: "#dart-fins #fin-2",
      duration: 100,
      opacity: 1,
      loop: 13,
      direction: 'alternate',
      easing: 'linear'
    });
    anime({
      targets: "#dart-fins #fin-1",
      duration: 100,
      opacity: 0.6,
      loop: 13,
      direction: 'alternate',
      easing: 'linear'
    });
  }
}

function dartThree() {
  if (animationState[0] !== true) {
    anime({
      targets: "#dart-3",
      translateX: '1113%',
      translateY: '-68%',
      easing: "linear",
      rotate: 7,
      duration: 300,
      complete: function(anim) {
        return animationState = [false, 8];
      }
    });
    anime({
      targets: "#dart-fins #fin-2",
      duration: 100,
      opacity: 1,
      loop: 13,
      direction: 'alternate',
      easing: 'linear'
    });
    anime({
      targets: "#dart-fins #fin-1",
      duration: 100,
      opacity: 0.6,
      loop: 13,
      direction: 'alternate',
      easing: 'linear'
    });
  }
}