var startButton = document.querySelector("#loading-circle");
var spotlight = document.querySelector("#spotlight");
var durationTime = 400;

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
  startButton.remove();
  anime({
    targets: ".screen-frame",
    background: '#000',
    duration: 1500
  });
  anime({
    targets: "#spotlight",
    opacity: 1,
    duration: 1500
  });
}

function makeSpotlight() {
  anime({
    targets: "#spotlight",
    scaleY: 0.2,
    translateX: '-50%',
    translateY: '190%',
    easing: "easeInOutCubic",
    duration: durationTime
  });
  anime({
    targets: "#circle-shadow",
    opacity: 1,
    delay: 400,
    duration: 400
  });
  anime({
    targets: "#pop-up-mask",
    opacity: 1,
    delay: 400,
    duration: 400
  });
  anime({
    targets: '.credits',
    opacity: 1,
    duration: 1500
  });
}

window.onload = loadingCircle;
startButton.addEventListener("mouseenter", raiseLoadingCircle, false);
startButton.addEventListener("mouseleave", lowerLoadingCircle, false);
startButton.addEventListener("click", invertCircle);
spotlight.addEventListener("click", makeSpotlight);
