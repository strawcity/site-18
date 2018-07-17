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
  console.log(animationState[1]);
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
      finishAbduction();
      loadRecordCredit();
      break;
    case animationState[1] === 4 && animationState[0] !== true:
      poolCue();
      loadContactCredit();
      break;
    case animationState[1] === 5 && animationState[0] !== true:
      breakTheRack();
      break;
    case animationState[1] === 6 && animationState[0] !== true:
      breakTheRack()
      break;
    case animationState[1] === 7 && animationState[0] !== true:
      breakTheRack()
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