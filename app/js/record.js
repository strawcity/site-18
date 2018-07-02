var recordPin = document.querySelector("#record-pin");
var recordShine = document.querySelector("#record-shine");

///    Records    ///
function putYourRecordsOn() {
  recordPin.style.display = "block";
  recordShine.style.display = "block";
  if (animationState[0] !== true) {
    animationState[0] = true;
    anime({
      targets: "#abductee",
      translateY: "-390%",
      opacity: 0,
      easing: "easeInQuad",
      duration: 500
    });
    anime({
      targets: "#hour-hand",
      rotate: 270,
      scaleX: 0,
      scaleY: 0,
      translateX: '3%',
      translateY: '4%',
      easing: "easeInOutCubic",
      duration: 500
    });
    anime({
      targets: "#minute-hand",
      rotate: 51,
      scaleX: 0,
      scaleY: 0,
      translateX: '-1%',
      translateY: '-11%',
      easing: "easeInOutCubic",
      duration: 500
    });
    anime({
      targets: "#tractor-beam",
      scaleX: 0,
      easing: "easeInOutQuad",
      delay: 250,
      duration: 250,
    });
    anime({
      targets: "#spotlight",
      scaleY: 0.3,
      scaleX: 1,
      translateX: '-50%',
      translateY: '-80%',
      easing: "easeInOutQuad",
      delay: 250,
      duration: 750
    });
    anime({
      targets: "#record-lines",
      scale: 1,
      easing: "easeInOutQuad",
      duration: 750,
      opacity: 1,
      delay: 750
    });
    anime({
      targets: "#record-pin",
      translateY: '-90%',
      duration: 750,
      opacity: 1,
      delay: 750
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
        return animationState = [false, 4];
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
