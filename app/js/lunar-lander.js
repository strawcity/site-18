function lunarLander() {
  if (animationState[0] !== true) {
    document.querySelector("#moon-shadow").style.display = "block";
    anime({
      targets: "#moon-shadow",
      translateX: '-67%',
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 750
    });
  }
}