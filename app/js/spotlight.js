var startButton = document.querySelector("#loading-circle");
var spotlight = document.querySelector("#spotlight");
var circleShadow = document.querySelector("#circle-shadow");
var popUpMask = document.querySelector("#pop-up-mask");
var clickCount;

function easterEggs() {
  switch (true) {
    case clickCount === 1:
      makeSpotlight();
      break;
    case clickCount === 2:
      basketballToss();
      break;
    case clickCount === 3:
      beginUFO();
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
    duration: 1000
  });
}

function makeSpotlight() {
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
      return clickCount = 2;
    }
  });
  anime({
    targets: '#about-credit',
    opacity: 1,
    duration: 1500
  });
}

function basketballToss() {
  anime({
    targets: "#basketball",
    translateY: '-170%',
    easing: "easeOutCubic",
    direction: 'alternate',
    duration: 1000
  });
  anime({
    targets: "#basketball-lines",
    bottom: 33,
    easing: "easeInSine",
    delay: 100,
    duration: 1700,
    complete: function(anim) {
      return clickCount = 3;
    }
  });
}

function beginUFO() {
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

function transitionUFO() {
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
        flickerTractorBeam();
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
    duration: 1500,
    skewX: 17,
    translateX: '20%',
    complete: function(anim) {
      shiftTractorBeamLeft();
      return clickCount = 4;
    }
  });
}
function shiftTractorBeamLeft() {
  anime({
    targets: "#tractor-beam",
    duration: 1500,
    skewX: -17,
    translateX: '-20%',
    complete: function(anim) {
      flickerTractorBeam();
    }
  });
}

window.onload = loadingCircle;
startButton.addEventListener("mouseenter", raiseLoadingCircle, false);
startButton.addEventListener("mouseleave", lowerLoadingCircle, false);
startButton.addEventListener("click", invertCircle, false);
spotlight.addEventListener("click", easterEggs);
circleShadow.addEventListener("click", easterEggs);
popUpMask.addEventListener("click", easterEggs);
