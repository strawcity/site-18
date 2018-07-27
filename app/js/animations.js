var animationState = [false, 0];
var startButton = document.querySelector("#loading-circle");
var spotlight = document.querySelector("#white-circle");
var popUpMask = document.querySelector("#pop-up-mask");
var tractorBeam = document.querySelector("#tractor-beam");
var recordNeedle = document.querySelector("#record-needle");
var aboutCredit = document.querySelector("#about-credit");
var experienceCredit = document.querySelector("#experience-credit");
var recordCredit = document.querySelector("#record-credit");
var contactCredit = document.querySelector("#contact-credit");
var thanksCredit = document.querySelector("#thanks-credit");
var d = new Date();
var hour = (d.getHours() + 24) % 12 || 12;
var minutes = d.getMinutes();

window.onload = loadingCircle;
startButton.addEventListener("mouseenter", raiseLoadingCircle, false);
startButton.addEventListener("mouseleave", lowerLoadingCircle, false);
startButton.addEventListener("click", invertCircle, false);
spotlight.addEventListener("click", easterEggs);
document.querySelector("#pool-cue").addEventListener("click", easterEggs);

function easterEggs() {
  if (animationState[0] === true) {
    return;
  } else {
    switch (true) {
      case animationState[1] === 1:
        tellTime();
        // poolCue();
        showThisHideThis(aboutCredit, thanksCredit);
        showThisHideThis(null, thanksCredit);
        break;
      case animationState[1] === 2:
        showUFO();
        showThisHideThis(experienceCredit, aboutCredit);
        break;
      case animationState[1] === 3:
        finishAbduction();
        showThisHideThis(recordCredit, experienceCredit);
        showThisHideThis(speakerOff, restartButton);
        break;
      case animationState[1] === 4:
        poolCue();
        showThisHideThis(contactCredit, recordCredit);

        showThisHideThis(null, speakerOn);
        break;
      case animationState[1] === 5:
        showThisHideThis(restartButton, speakerOff);
        breakTheRack();
        break;
      case animationState[1] === 6:
        restart();
        showThisHideThis(thanksCredit, contactCredit);
        break;
      case animationState[1] === 7:
        break;
      default:
    }
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
  animationState[0] = true;
  startButton.style.display = "none";
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

function showThisHideThis(showThis, hideThis) {
  hideThis.style.display = "none";
  if (showThis === null) {
    return;
  } else {
    showThis.style.display = "block";
  }
}