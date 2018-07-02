function eekAMouse() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    document.querySelector("#flashlight-holder").style.display = "block";
    document.querySelector("#flashlight-beam").style.display = "block";
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    recordShine.remove();
    document.querySelector("#speaker-off").style.display = "none";
    document.querySelector("#speaker-on").style.display = "none";
    gibbo.pause();
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
      targets: "#flashlight-holder",
      translateY: '-240%',
      translateX: '-44.4%',
      easing: 'easeOutQuad',
      duration: 250
    });
    anime({
      targets: "#flashlight-button",
      opacity: 1,
      delay: 750,
      duration: 750,
      complete: function(anim) {
        return animationState = [false, 9];
      }
    });
  }
}

function turnOnFlashlight() {
  if (animationState[0] !== true) {
    anime({
      targets: "#flashlight-button",
      opacity: 1,
      scaleX: 0.8,
      translateX: '10%',
      direction: 'alternate',
      duration: 100
    });
    anime({
      targets: "#flashlight-beam",
      opacity: 1,
      duration: 100
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

document.querySelector("#flashlight-button").addEventListener("click", turnOnFlashlight, false);
