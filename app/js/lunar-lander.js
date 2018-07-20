function lunarLander() {
  if (animationState[0] !== true) {
    startButton.style.display = "block";
    anime({
      targets: startButton,
      translateX: '30%',
      translateY: '-50%',
      easing: "linear",
      duration: 5000
    });
  }
}