function tellTime() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    document.querySelector("#hour-hand").style.display = "block";
    document.querySelector("#minute-hand").style.display = "block";
    var hourRotate = -1 * (360 - (hour/12) * 360);
    var minuteRotate = -1 * (360 - (minutes/60) * 180);
    anime({
      targets: "#hour-hand",
      rotate: hourRotate,
      easing: "easeInOutCubic",
      duration: 750
    });
    anime({
      targets: "#minute-hand",
      rotate: minuteRotate,
      easing: "easeInOutCubic",
      duration: 750,
      complete: function(anim) {
        return animationState = [false, 2];
      }
    });
  }
}