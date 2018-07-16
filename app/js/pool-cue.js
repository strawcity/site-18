function poolCue() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    recordShine.remove();
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
      duration: 500,
      delay: 350,
      complete: function(anim) {
        lineUpShot();
      }
    });
  }
}

function lineUpShot() {
  anime({
    targets: "#pool-cue",
    // loop: 2,
    easing: "easeInOutQuart",
    translateX: "58%",
    translateY: "80%",
    duration: 1000,
    direction: 'alternate',
    complete: function(anim) {
      return animationState = [false, 5];
    }
  });
}

function breakTheRack() {
  pullBackCue();
}

function pullBackCue() {
  anime({
    targets: "#pool-cue",
    easing: "easeInOutQuart",
    translateX: "18%",
    translateY: "74%",
    duration: 1000,
    complete: function(anim) {
      shootCue();
    }
  });
}

function shootCue() {
  anime({
    targets: "#pool-cue",
    easing: "easeInQuart",
    translateX: "70.7%",
    translateY: "80%",
    duration: 300,
  });
  anime({
    targets: "#white-circle",
    easing: "linear",
    translateX: "250%",
    translateY: "-50%",
    duration: 200,
    delay: 300,
    complete: function(anim) {
      bumpOff();
    }
  });
}

function bumpOff() {
  anime({
    targets: "#pool-cue",
    easing: "easeOutQuart",
    translateX: "0%",
    translateY: "-130%",
    rotate: -10,
    duration: 650
  });
  anime({
    targets: "#white-circle",
    easing: "easeOutQuart",
    translateX: "-50%",
    translateY: "-50%",
    duration: 4000,
    delay: 2000
  });
}