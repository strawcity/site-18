function birdman() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    document.querySelector("#flashlight-holder").style.display = "block";
    document.querySelector("#flashlight-beam").style.display = "block";
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    recordShine.remove();
    document.querySelector("#speaker-off").style.display = "none";
    document.querySelector("#speaker-on").style.display = "none";
    gibbo.pause();
    anime({
      targets: "#record-lines",
      scale: 0,
      easing: "easeOutExpo",
      duration: 500,
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
      duration: 500
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
      scaleY: 0.3,
      scaleX: 1,
      translateX: '-50%',
      translateY: '33%',
      easing: "easeOutQuad",
      duration: 500
    });
    anime({
      targets: "#spotlight-holder",
      translateY: '-176%',
      translateX: '0',
      easing: 'easeOutQuad',
      duration: 250,
      delay: 100
    });
    anime({
      targets: "#spotlight-lever",
      translateX: '164%',
      rotate: '40',
      easing: 'easeOutQuad',
      duration: 500,
      delay: 200
    });
  }
}

function activateSpotlight() {
  anime({
    targets: "#spotlight-lever",
    translateX: '164%',
    rotate: '140',
    easing: 'easeInExpo',
    duration: 750
  });
  anime({
    targets: "#white-circle",
    opacity: 0,
    duration: 100
  });
  anime({
    targets: "#spotlight-glass",
    opacity: 1,
    duration: 100
  });
  anime({
    targets: "#spotlight-holder",
    translateY: '-176%',
    translateX: '-90%',
    easing: 'easeOutQuad',
    duration: 500,
    delay: 700
  });
}

document.querySelector("#spotlight-lever").addEventListener("click", activateSpotlight, false);