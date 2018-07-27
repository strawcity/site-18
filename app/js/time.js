function tellTime() {
  animationState[0] = true;
  document.querySelector("#hour-hand").style.display = "block";
  document.querySelector("#minute-hand").style.display = "block";
  var hourRotate = -360 + 360 * (hour / 12);
  var minuteRotate = -360 + 360 * (minutes / 60);
  anime({
    targets: "#hour-hand",
    rotate: hourRotate,
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 750
  });
  anime({
    targets: "#minute-hand",
    rotate: minuteRotate,
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 750,
    complete: function(anim) {
      return animationState = [false, 2];
    }
  });
  anime({
    targets: "#moon-shadow",
    opacity: 0,
    easing: "easeInOutQuad",
    duration: 250,
    complete: function(anim) {
      document.querySelector("#moon-shadow").style.display = "none";
    }
  });
}

function resetTime() {
  document.querySelector("#hour-hand").style.display = "none";
  document.querySelector("#minute-hand").style.display = "none";
  anime({
    targets: "#hour-hand",
    rotate: 0,
    duration: 10
  });
  anime({
    targets: "#minute-hand",
    rotate: 0,
    duration: 10
  });
}