function lunarLander() {
  animationState[0] = true;
  document.querySelector("#moon-shadow").style.display = "block";
  anime({
    targets: "#moon-shadow",
    translateX: '-67%',
    opacity: 1,
    easing: "easeInOutQuad",
    duration: 750,
    complete: function(anim) {
      return animationState = [false, 1];
    }
  });
  anime({
    targets: "#rocket",
    translateX: '-410%',
    rotate: '-121',
    easing: "linear",
    duration: 2050,
    delay: 600
  });
}