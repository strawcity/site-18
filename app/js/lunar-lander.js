function lunarLander() {
  if (animationState[0] !== true) {
    document.querySelector("#moon-shadow").style.display = "block";
    anime({
      targets: "#moon-shadow",
      translateX: '-67%',
      easing: "linear",
      duration: 3000
    });
  }
}