function birdman() {
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
      duration: 900,
      delay: 150
    });
    anime({
      targets: "#record-needle",
      rotate: 18,
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
      delay: 300,
      duration: 250,
      opacity: 0
    });
    anime({
      targets: "#record-lines",
      delay: 600,
      duration: 900,
      opacity: 0
    });
    anime({
      targets: "#spotlight-holder",
      translateY: '-224%',
      translateX: '24%',
      easing: 'easeInOutQuad',
      duration: 500,
      delay: 500
    });
    anime({
      targets: "#spotlight-beam",
      opacity: 0.2,
      duration: 500,
      delay: 1000
    });
    anime({
      targets: "#spotlight-lever",
      translateY: '-50%',
      rotate: '40',
      easing: 'easeOutQuad',
      duration: 250,
      delay: 1000
    });
  }
}

function activateSpotlight() {
  anime({
    targets: "#spotlight-lever",
    translateY: '-50%',
    rotate: '-40',
    easing: 'easeInExpo',
    duration: 750
  });
  anime({
    targets: "#spotlight-beam",
    opacity: 0.6,
    delay: 800,
    duration: 200
  });
  anime({
    targets: "#eggman",
    opacity: 1,
    delay: 800,
    duration: 300
  });
}

document.querySelector("#spotlight-lever").addEventListener("click", activateSpotlight, false);