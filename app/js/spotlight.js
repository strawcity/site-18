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
      console.log(anim.completed);
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
    translateY: '-140%',
    easing: "easeOutCubic",
    direction: 'alternate',
    duration: 1000
  });
  anime({
    targets: "#basketball-lines",
    bottom: 52,
    easing: "easeInSine",
    duration: 1500,
    complete: function(anim) {
      return clickCount = 3;
    }
  });
}

function beginUFO() {
  console.log('begin');
  popUpMask.style.display = "none";
  anime({
    targets: "#circle-shadow",
    scaleY: -2,
    translateY: '-170%',
    easing: "easeInOutExpo",
    duration: 500,
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
      duration: 2200
    });
    anime({
      targets: "#spotlight",
      scaleY: 0.2,
      translateX: '-50%',
      translateY: '-700%',
      easing: "easeInOutExpo",
      delay: 500,
      duration: 2500,
      complete: function(anim) {
        flickerTractorBeam();
      }
    });
    anime({
      targets: "#tractor-beam",
      opacity: 1,
      delay: 2500,
      duration: 2500
    });
}

function flickerTractorBeam() {
  anime({
    targets: "#tractor-beam path",
    opacity: 0.9,
    d: "M0.0317009116,217.571777 C-0.359900651,227.125163 2.87659023,231.901855 9.74117357,231.901855 C16.6057569,231.901855 22.724572,227.125163 28.0976189,217.571777 C29.5253533,227.125163 33.7948845,231.901855 40.9062126,231.901855 C48.0175408,231.901855 53.1773715,227.125163 56.3857048,217.571777 C57.9911736,227.125163 62.4402296,231.901855 69.7328728,231.901855 C77.025516,231.901855 81.8743116,226.752279 84.2792595,216.453125 C85.6005486,226.752279 90.5434197,231.901855 99.1078728,231.901855 C107.672326,231.901855 112.044396,226.752279 112.224084,216.453125 L56.1278923,0 L0.0317009116,217.571777 Z",
    duration: 1000,
    easing: "easeInOutExpo",
    direction: 'alternate',
    loop: true
  });
}

window.onload = loadingCircle;
startButton.addEventListener("mouseenter", raiseLoadingCircle, false);
startButton.addEventListener("mouseleave", lowerLoadingCircle, false);
startButton.addEventListener("click", invertCircle, false);
spotlight.addEventListener("click", easterEggs);
circleShadow.addEventListener("click", easterEggs);
popUpMask.addEventListener("click", easterEggs);
