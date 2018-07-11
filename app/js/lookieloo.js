
///    Lookin    ///
function lookIn() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    document.querySelector("#speaker-off").style.display = "none";
    document.querySelector("#speaker-on").style.display = "none";
    gibbo.pause();
    anime({
      targets: "#record-lines",
      scale: 0,
      easing: "easeOutExpo",
      duration: 300,
      opacity: 0
    });
    anime({
      targets: "#record-pin",
      opacity: 0,
      easing: "easeOutExpo",
      duration: 700
    });
    anime({
      targets: "#record-shine",
      opacity: 0,
      easing: "easeOutExpo",
    });
    anime({
      targets: "#record-needle",
      rotate: 18,
      skewX: 65,
      translateX: '14%',
      easing: "easeOutExpo",
      duration: 700,
    });
    anime({
      targets: "#speaker-off",
      opacity: 0,
      duration: 1200,
    });
    anime({
      targets: "#speaker-on",
      opacity: 0,
      duration: 1200,
    });
    anime({
      targets: "#white-circle",
      scaleY: 0.2,
      scaleX: 1,
      translateX: '-50%',
      translateY: '-669%',
      easing: "easeInOutCubic",
      duration: 750
    });
    anime({
      targets: "#circle-shadow",
      scaleY: -6,
      opacity: 1,
      delay: 250,
      duration: 750
    });
    anime({
      targets: "#pop-up-mask",
      opacity: 1,
      delay: 400,
      duration: 450,
      complete: function(anim) {
        return animationState = [false, 2];
      }
    });
  }
}
