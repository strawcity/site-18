function makeTheMoon() {
  animationState[0] = true;
  document.querySelector("#moon-shadow").style.display = "block";
  anime({
    targets: "#moon-shadow",
    translateX: '-67%',
    opacity: 1,
    easing: "easeInOutQuad",
    duration: 750,
    complete: function(anim) {
      return animationState = [false, 6];
    }
  });
}

function rocketFlyOver() {
  anime({
    targets: "#rocket",
    translateX: '-1200%',
    easing: "linear",
    duration: 3750,
    delay: 750
  });
  anime({
    targets: "#propellant-1",
    left: '99%',
    easing: "easeOutQuart",
    duration: anime.random(600, 900),
    loop: 7
  });
  anime({
    targets: "#propellant-2",
    left: '99%',
    top: '25%',
    easing: "easeOutQuart",
    duration: anime.random(600, 700),
    loop: 7
  });
  anime({
    targets: "#propellant-3",
    left: '99%',
    top: '30%',
    easing: "easeOutQuart",
    duration: anime.random(400, 600),
    loop: 7
  });
  anime({
    targets: "#propellant-4",
    left: '99%',
    top: '23%',
    easing: "easeOutQuart",
    duration: anime.random(800, 1500),
    loop: 6
  });
}