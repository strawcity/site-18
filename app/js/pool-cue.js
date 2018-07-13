function poolCue() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    recordShine.remove();
    document.querySelector("#spotlight-glass").style.display = "block";
    document.querySelector("#spotlight-beam").style.display = "block";
    document.querySelector("#white-circle").style.display = "none";
    gibbo.pause();
    anime({
      targets: "#record",
      rotate: -130,
      translateX: '11%',
      translateY: '-66%',
      easing: "easeInOutCubic",
      duration: 750
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
      delay: 600,
      duration: 900,
      opacity: 0
    });
  }
}