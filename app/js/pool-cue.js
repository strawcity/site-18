function poolCue() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    recordShine.remove();
    // document.querySelector("#white-circle").style.display = "none";
    gibbo.pause();
    anime({
      targets: "#white-circle",
      scaleY: 1,
      translateX: "-50%",
      translateY: "-50%",
      easing: "easeInOutSine",
      duration: 530
    });
    anime({
      targets: "#record-needle",
      rotate: 40,
      skewX: 65,
      translateX: '14%',
      easing: "easeOutExpo",
      duration: 1500,
    });
    anime({
      targets: "#speaker-off",
      opacity: 0,
      duration: 100,
    });
    anime({
      targets: "#speaker-on",
      opacity: 0,
      duration: 100,
    });
    anime({
      targets: "#record-pin",
      delay: 150,
      duration: 350,
      opacity: 0
    });
    anime({
      targets: "#record-lines",
      easing: "easeInOutSine",
      scaleY: 1,
      opacity: 0,
      translateY: "-11%",
      duration: 500
    });
    anime({
      targets: "#pool-cue",
      easing: "easeInOutSine",
      translateX: "68%",
      translateY: "90%",
      rotate: 0,
      duration: 750,
      delay: 600,
      complete: function(anim) {
        lineUpShot();
        return animationState = [false, 5];
      }
    });
  }
}

function lineUpShot() {
  anime({
    targets: "#pool-cue",
    loop: 20,
    easing: "easeInOutSine",
    translateX: "58%",
    translateY: "80%",
    duration: 1250,
    direction: 'alternate'
  });
}