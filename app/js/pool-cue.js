function poolCue() {
  animationState[0] = true;
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
    targets: "#restart-button",
    opacity: 0,
    duration: 10,
  });
  anime({
    targets: "#pool-cue",
    easing: "easeInOutSine",
    translateY: "-28%",
    duration: 500,
    delay: 350,
    complete: function(anim) {
      lineUpShot();
    }
  });
}

function lineUpShot() {
  anime({
    targets: "#pool-cue",
    easing: "easeInOutSine",
    translateY: "-18%",
    duration: 1000,
    direction: 'alternate',
    complete: function(anim) {
      return animationState = [false, 5];
    }
  });
}

function breakTheRack() {
  animationState[0] = true;
  pullBackCue();
}

function pullBackCue() {
  anime({
    targets: "#pool-cue",
    easing: "easeInOutSine",
    translateY: "2%",
    duration: 750,
    complete: function(anim) {
      shootCue();
    }
  });
}

function shootCue() {
  anime({
    targets: "#pool-cue",
    easing: "easeOutQuart",
    translateY: "-88%",
    translateX: "-76%",
    rotate: -4,
    duration: 300,
  });
  anime({
    targets: "#white-circle",
    easing: "linear",
    translateX: "40%",
    translateY: "-250%",
    duration: 200,
    delay: 70,
    complete: function(anim) {
      bumpOff();
    }
  });
}

function bumpOff() {
  anime({
    targets: "#pool-cue",
    easing: "easeInOutSine",
    translateY: "2%",
    translateX: "-86%",
    rotate: -1,
    duration: 600,
  });
  anime({
    targets: "#white-circle",
    easing: "easeOutQuart",
    translateX: "-50%",
    translateY: "-50%",
    duration: 3500,
    delay: 1500,
    complete: function(anim) {
      makeTheMoon();
      showThisHideThis(thanksCredit, contactCredit);
    }
  });
}