function birdman() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    circleShadow.style.display = "block";
    popUpMask.style.display = "block";
    recordShine.remove();
    document.querySelector("#spotlight-glass").style.display = "block";
    document.querySelector("#white-circle").style.display = "none";
    gibbo.pause();
    anime({
      targets: "#record",
      rotate: -130,
      translateX: '11%',
      translateY: '-66%',
      easing: "easeInOutQuad",
      duration: 750,
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
      duration: 100,
    });
    anime({
      targets: "#speaker-on",
      opacity: 0,
      duration: 100,
    });
    anime({
      targets: "#record-pin",
      delay: 250,
      duration: 250,
      opacity: 0
    });
    anime({
      targets: "#record-lines",
      delay: 500,
      duration: 250,
      opacity: 0
    });
    anime({
      targets: "#spotlight-holder",
      translateY: '-224%',
      translateX: '-117%',
      easing: 'easeOutQuad',
      duration: 500,
      delay: 250
    });
    // anime({
    //   targets: "#spotlight-lever",
    //   translateX: '164%',
    //   rotate: '40',
    //   easing: 'easeOutQuad',
    //   duration: 500,
    //   delay: 200
    // });
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