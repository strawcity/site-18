var animationState = [false, 0];
var startButton = document.querySelector("#loading-circle");
var spotlight = document.querySelector("#spotlight");
var circleShadow = document.querySelector("#circle-shadow");
var popUpMask = document.querySelector("#pop-up-mask");
var tractorBeam = document.querySelector("#tractor-beam");
var recordNeedle = document.querySelector("#record-needle");
var gibbo = new Audio('audio/Gibbo-St.DenisBeatTape-05Tribe.m4a');
var d = new Date();
var hour = d.getHours();
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
      break;
    case animationState[1] === 2 && animationState[0] !== true:
      putYourRecordsOn();
      break;
    case animationState[1] === 3 && animationState[0] !== true:
      showUFO();
      break;
    case animationState[1] === 4 && animationState[0] !== true:
      putYourRecordsOn();
      break;
    case animationState[1] === 5 && animationState[0] !== true:
      dartBoard();
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
    clickCount = 1;
    startButton.remove();
    spotlight.style.display = "block";
    anime({
      targets: ".screen-frame",
      background: '#000',
      duration: 100
    });
    anime({
      targets: "#spotlight",
      opacity: 1,
      duration: 100,
      complete: function(anim) {
        return animationState = [false, 1];
      }
    });
    anime({
      targets: '#title-credit',
      opacity: 1,
      duration: 1000
    });
  }
}

function tellTime() {
  if (animationState[0] !== true) {
    document.querySelector("#hour-hand").style.display = "block";
    document.querySelector("#minute-hand").style.display = "block";
    var hourRotate = -1 * (360 - (hour/12) * 360);
    var minuteRotate = -1 * (360 - (minutes/60) * 180);
    console.log(hourRotate);
    console.log(minuteRotate);
    anime({
      targets: "#hour-hand",
      rotate: hourRotate,
      easing: "easeInOutCubic",
      duration: 750
    });
    anime({
      targets: "#minute-hand",
      rotate: minuteRotate,
      easing: "easeInOutCubic",
      duration: 750,
      complete: function(anim) {
        return animationState = [false, 2];
      }
    });
  }
}


///    Records    ///
function putYourRecordsOn() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    document.querySelector("#record-pin").style.display = "block";
    document.querySelector("#record-shine").style.display = "block";
    anime({
      targets: "#hour-hand",
      rotate: 180,
      opacity: 0,
      scaleY: 1.3,
      translateY: '-4%',
      easing: "easeInOutCubic",
      duration: 750
    });
    anime({
      targets: "#minute-hand",
      rotate: 90,
      opacity: 0,
      translateY: '-4%',
      easing: "easeInOutCubic",
      duration: 750
    });
    anime({
      targets: "#circle-shadow",
      scaleY: 6,
      translateY: '-30%',
      easing: "easeInOutQuad",
      opacity: 0,
      duration: 350
    });
    anime({
      targets: "#tractor-beam",
      scaleX: 0,
      duration: 400
    });
    anime({
      targets: "#spotlight",
      scaleY: 0.3,
      scaleX: 1,
      translateX: '-50%',
      translateY: '-80%',
      easing: "easeInOutQuad",
      duration: 750,
    });
    anime({
      targets: "#record-lines",
      scale: 1,
      easing: "easeInOutQuad",
      duration: 750,
      opacity: 1,
      delay: 200
    });
    anime({
      targets: "#record-pin",
      translateY: '-90%',
      easing: "easeInOutQuad",
      duration: 750,
      opacity: 1,
      delay: 200
    });
    anime({
      targets: "#record-shine",
      loop: 20,
      rotateZ: 360,
      easing: "linear",
      duration: 3250,
    });
    anime({
      targets: "#record-needle",
      rotate: 0,
      skewX: 0,
      translateX: '-14%',
      easing: "easeOutExpo",
      duration: 1500,
      delay: 1000,
      complete: function(anim) {
        showSpeaker();
        return animationState = [false, 3];
      }
    });
  }
}
function showSpeaker() {
  anime({
    targets: "#speaker-off",
    opacity: 0.5,
    duration: 800,
  });
}

function playGibbo() {
  if (gibbo.paused) {
    gibbo.play();
    anime({
      targets: "#speaker-on",
      opacity: 0.5,
      duration: 100,
    });
    anime({
      targets: "#speaker-off",
      opacity: 0,
      duration: 100,
    });
  } else {
    gibbo.pause();
    anime({
      targets: "#speaker-off",
      opacity: 0.5,
      duration: 100,
    });
    anime({
      targets: "#speaker-on",
      opacity: 0,
      duration: 100,
    });
  }
}

document.querySelector("#speaker-on").addEventListener("click", playGibbo, false);
document.querySelector("#record-needle").addEventListener("click", playGibbo, false);


///    Make the Hole    ///
function makeHole() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    anime({
      targets: "#spotlight",
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
    anime({
      targets: '#about-credit',
      opacity: 1,
      duration: 1500
    });
    anime({
      targets: '#contact-credit',
      opacity: 1,
      duration: 1500
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


///    UFO    ///
function showUFO() {
  if (animationState[0] !== true) {
    document.querySelector("#hour-hand").style.display = "none";
    popUpMask.style.display = "none";
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
      easing: "easeOutExpo"
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
      targets: "#spotlight",
      scaleY: 0.2,
      scaleX: 1,
      translateX: '-50%',
      translateY: '190%',
      easing: "easeInOutCubic",
      delay: 100,
      duration: 750
    });
    anime({
      targets: "#tractor-beam",
      scaleX: 1,
      easing: "easeInOutQuad",
      delay: 700,
      duration: 250,
      complete: function(anim) {
        return animationState = [false, 4];
      }
    });
    anime({
      targets: "#abductee",
      opacity: 1,
      easing: "easeInOutQuad",
      translateY: "-19%",
      delay: 700,
      duration: 750,
      complete: function(anim) {
        floatAbductee();
      }
    });
  }
}

function floatAbductee() {
  anime({
    targets: "#abductee",
    translateY: "19%",
    easing: "easeInOutQuad",
    loop: 30,
    duration: 1800,
    direction: 'alternate'
  });
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
      targets: "#spotlight",
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

function eekAMouse() {
  if (animationState[0] !== true) {
    document.querySelector("#dart-1").style.display = "none";
    document.querySelector("#dart-2").style.display = "none";
    document.querySelector("#dart-3").style.display = "none";
    document.querySelector("#dart-board").style.display = "none";
    document.querySelector("#spotlight").style.display = "none";
    document.querySelector("#flashlight-holder").style.display = "block";
    document.querySelector("#flashlight-beam").style.display = "block";
    document.querySelector("#flashlight-mask").style.display = "block";
    anime({
      targets: "#flashlight",
      translateX: '65%',
      elasticity: 10,
      delay: 1000,
      duration: 500
    });
    anime({
      targets: "#flashlight-button",
      opacity: 1,
      translateX: '199%',
      delay: 1000,
      duration: 600,
      complete: function(anim) {
        return animationState = [false, 9];
      }
    });
    anime({
      targets: "#flashlight-mask",
      opacity: 1,
      delay: 1400,
      duration: 100
    });
  }
}

function rotateFlashlight() {
  if (animationState[0] !== true) {
    document.querySelector("#mouse").style.display = "block";
    anime({
      targets: "#flashlight-button",
      opacity: 1,
      translateX: '272%',
      duration: 200
    });
    anime({
      targets: "#flashlight-beam",
      opacity: 1,
      duration: 100
    });
    anime({
      targets: "#flashlight-holder",
      rotate: 25,
      translateX: '5%',
      translateY: '117%',
      delay: 1000,
      easing: "easeInOutQuad",
      duration: 2250
    });
    anime({
      targets: "#mouse",
      rotate: 5,
      skewY: 5,
      delay: 2800,
      easing: "easeInOutQuad",
      duration: 800,
      complete: function(anim) {
        mouseRun();
        return animationState = [false, 9];
      }
    });
  }
}

function mouseRun() {
  if (animationState[0] !== true) {
    anime({
      targets: "#flashlight-holder",
      rotate: 90,
      translateX: '13%',
      translateY: '117%',
      easing: "easeInBack",
      delay: 1250,
      duration: 400
    });
    anime({
      targets: "#mouse",
      rotate: -1,
      skewY: -5,
      translateX: '-500%',
      easing: "easeInBack",
      delay: 1000,
      duration: 600
    });
    anime({
      targets: "#flashlight-beam",
      opacity: 0,
      delay: 1600,
      duration: 100
    });
  }
}

document.querySelector("#flashlight-button").addEventListener("click", rotateFlashlight, false);
