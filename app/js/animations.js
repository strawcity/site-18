var animationState = [false, 0];
var startButton = document.querySelector("#loading-circle");
var spotlight = document.querySelector("#spotlight");
var circleShadow = document.querySelector("#circle-shadow");
var popUpMask = document.querySelector("#pop-up-mask");
var tractorBeam = document.querySelector("#tractor-beam");
var recordNeedle = document.querySelector("#record-needle");
var gibbo = new Audio('/audio/Gibbo-St.DenisBeatTape-05Tribe.m4a');

window.onload = loadingCircle;
startButton.addEventListener("mouseenter", raiseLoadingCircle, false);
startButton.addEventListener("mouseleave", lowerLoadingCircle, false);
startButton.addEventListener("click", invertCircle, false);
spotlight.addEventListener("click", easterEggs);
circleShadow.addEventListener("click", easterEggs);
popUpMask.addEventListener("click", easterEggs);
spotlight.addEventListener("mouseenter", flickerTractorBeam, false);
spotlight.addEventListener("mouseleave", shiftTractorBeamLeft, false);

function easterEggs() {
  console.log(animationState);
  switch (true) {
    case animationState[1] === 1 && animationState[0] !== true:
      makeHole();
      break;
    case animationState[1] === 2 && animationState[0] !== true:
      // putYourRecordsOn();
      basketballToss();
      break;
    case animationState[1] === 3 && animationState[0] !== true:
      beginUFO();
      break;
    case animationState[1] === 4 && animationState[0] !== true:
      putYourRecordsOn();
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
      duration: 1000
    });
    anime({
      targets: "#spotlight",
      opacity: 1,
      duration: 1000
    });
    anime({
      targets: '#title-credit',
      opacity: 1,
      duration: 1000,
      complete: function(anim) {
        return animationState = [false, 1];
      }
    });
  }
}



///    Make the Hole    ///
function makeHole() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    anime({
      targets: "#spotlight",
      scaleY: 0.2,
      translateX: '-50%',
      translateY: '190%',
      easing: "easeInOutCubic",
      duration: 800
    });
    anime({
      targets: "#circle-shadow",
      scaleY: 5,
      opacity: 1,
      delay: 350,
      duration: 800
    });
    anime({
      targets: "#pop-up-mask",
      opacity: 1,
      delay: 800,
      duration: 400,
      complete: function(anim) {
        return animationState = [false, 2];
      }
    });
    anime({
      targets: '#about-credit',
      opacity: 1,
      duration: 1500
    });
  }
}


///    Basketball    ///
function basketballToss() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    console.log('animation can start');
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
function beginUFO() {
  if (animationState[0] !== true) {
    console.log('animation can start');
    popUpMask.style.display = "none";
    anime({
      targets: "#circle-shadow",
      scaleY: -2,
      translateY: '-146%',
      easing: "easeOutSine",
      duration: 350,
      complete: function(anim) {
        transitionUFO();
      }
    });
  }
}

function transitionUFO() {
    tractorBeam.style.display = "block";
    anime({
      targets: "#circle-shadow",
      scaleY: 2,
      translateY: '59%',
      easing: "easeInOutExpo",
      delay: 500,
      elasticity: 0,
      duration: 950
    });
    anime({
      targets: "#spotlight",
      scaleY: 0.2,
      translateX: '-50%',
      translateY: '-700%',
      easing: "easeInOutExpo",
      delay: 100,
      duration: 1750,
      complete: function(anim) {
        console.log('animation stop');
        return animationState = [false, 4];
      }
    });
    anime({
      targets: "#tractor-beam",
      opacity: 1,
      delay: 1500,
      duration: 2500
    });
}
function flickerTractorBeam() {
  anime({
    targets: "#tractor-beam path",
    fill: "#B7FDFF",
    duration: 500,
    easing: "easeInOutExpo",
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: "#tractor-beam ellipse",
    fill: "#74F9FD",
    duration: 500,
    easing: "easeInOutExpo",
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: "#tractor-beam",
    duration: 750,
    skewX: 17,
    translateX: '20%',
  });
}
function shiftTractorBeamLeft() {
  anime({
    targets: "#tractor-beam",
    duration: 750,
    skewX: -17,
    translateX: '-20%',
  });
  anime({
    targets: "#tractor-beam path",
    fill: "#74F9FD",
    duration: 500,
    easing: "easeInOutExpo",
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: "#tractor-beam ellipse",
    fill: "#B7FDFF",
    duration: 500,
    easing: "easeInOutExpo",
    direction: 'alternate',
    loop: true
  });
}


///    Records    ///
function putYourRecordsOn() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    tractorBeam.style.display = "none";
    anime({
      targets: "#circle-shadow",
      scaleY: 6,
      translateY: '-30%',
      easing: "easeInOutExpo",
      opacity: 0,
      duration: 550
    });
    anime({
      targets: "#tractor-beam",
      opacity: 0,
      duration: 150
    });
    anime({
      targets: "#spotlight",
      scaleY: 0.3,
      translateX: '-50%',
      translateY: '-80%',
      easing: "easeInOutExpo",
      duration: 1500,
    });
    anime({
      targets: "#record-lines",
      scale: 1,
      easing: "easeOutExpo",
      duration: 1500,
      opacity: 1,
      delay: 600
    });
    anime({
      targets: "#record-pin",
      translateY: '-90%',
      easing: "easeOutExpo",
      duration: 1500,
      opacity: 1,
      delay: 500
    });
    anime({
      targets: "#record-shine",
      rotateZ: {
        value: '+=11000',
        duration: 1000000
      },
      opacity: 1,
      easing: "easeOutExpo",
      delay: 800
    });
    anime({
      targets: "#record-needle",
      rotate: 0,
      skewX: 0,
      translateX: '-14%',
      easing: "easeOutExpo",
      duration: 2200,
      delay: 2800,
      complete: function(anim) {
        recordSkip();
        return animationState = [false, 5];
      }
    });
  }
}
function recordSkip() {
  anime({
    targets: "#speaker-off",
    opacity: 0.5,
    duration: 800,
  });
  anime({
    targets: "#record-needle",
    rotate: 0.3,
    translateX: '-14%',
    duration: 378,
    direction: 'alternate',
    loop: true
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
