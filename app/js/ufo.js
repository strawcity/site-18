///    UFO    ///
function showUFO() {
  animationState[0] = true;
  popUpMask.style.display = "none";
  anime({
    targets: "#white-circle",
    scaleY: 0.3,
    scaleX: 1,
    translateX: '-50%',
    translateY: '129%',
    easing: "easeInOutCubic",
    delay: 100,
    duration: 750
  });
  anime({
    targets: "#hour-hand",
    rotate: 270,
    scaleX: 6,
    scaleY: 0.5,
    translateX: '3%',
    translateY: '4%',
    easing: "easeInOutCubic",
    delay: 450,
    duration: 500
  });
  anime({
    targets: "#minute-hand",
    rotate: 51,
    scaleX: 6,
    scaleY: 0.4,
    translateX: '-1%',
    translateY: '-11%',
    easing: "easeInOutCubic",
    delay: 250,
    duration: 500
  });
  anime({
    targets: "#ufo",
    translateY: '60%',
    easing: "easeInOutQuad",
    delay: 500,
    duration: 200
  });
  anime({
    targets: "#tractor-beam",
    scaleX: 1,
    easing: "easeInOutQuad",
    delay: 700,
    duration: 250
  });
  anime({
    targets: "#abductee",
    opacity: 1,
    easing: "easeInOutQuad",
    translateY: "-19%",
    delay: 700,
    duration: 250,
    complete: function(anim) {
      return animationState = [false, 3];
    }
  });
}