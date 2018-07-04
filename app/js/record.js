var recordPin = document.querySelector("#record-pin");
var recordShine = document.querySelector("#record-shine");

///    Records    ///
function finishAbduction() {
  if (animationState[0] !== true) {
    animationState[0] = true;
    anime({
      targets: "#abductee",
      translateY: "-390%",
      opacity: 0,
      easing: "easeInQuad",
      duration: 500
    });
    anime({
      targets: "#hour-hand",
      rotate: 270,
      scaleX: 0,
      scaleY: 0,
      translateX: '3%',
      translateY: '4%',
      easing: "easeInOutCubic",
      duration: 500
    });
    anime({
      targets: "#minute-hand",
      rotate: 51,
      scaleX: 0,
      scaleY: 0,
      translateX: '-1%',
      translateY: '-11%',
      easing: "easeInOutCubic",
      duration: 500
    });
    anime({
      targets: "#ufo",
      translateY: '-31%',
      easing: "easeInOutQuad",
      delay: 500,
      duration: 200
    });
    anime({
      targets: "#tractor-beam",
      scaleX: 0,
      easing: "easeInOutQuad",
      delay: 250,
      duration: 250,
      complete: function(anim) {
        putYourRecordsOn();
      }
    });
  }
}

function putYourRecordsOn() {
  recordPin.style.display = "block";
  recordShine.style.display = "block";
  anime({
    targets: "#spotlight",
    scaleY: 0.3,
    scaleX: 1,
    translateX: '-50%',
    translateY: '-80%',
    easing: "easeInOutQuad",
    duration: 500
  });
  anime({
    targets: "#record-lines",
    scale: 1,
    opacity: 1,
    easing: "easeInOutQuad",
    delay: 250,
    duration: 1000
  });
  anime({
    targets: "#record-pin",
    translateY: '-90%',
    delay: 250,
    duration: 1000,
    opacity: 1
  });
  anime({
    targets: "#record-shine",
    loop: 20,
    rotateZ: 360,
    easing: "linear",
    duration: 3250
  });
  anime({
    targets: "#record-needle",
    rotate: 0,
    skewX: 0,
    translateX: '-14%',
    easing: "easeOutExpo",
    delay: 250,
    duration: 1500,
    complete: function(anim) {
      return animationState = [false, 4];
    }
  });
  anime({
    targets: "#speaker-off",
    opacity: 0.8,
    delay: 1000,
    duration: 200
  });
}


function playGibbo() {
    // This will allow us to play video later...
    gibbo.load();
    fetcGibboAndPlay();
  }

  function fetcGibboAndPlay() {
    fetch('http://nada.strawcitydesign.com/audio/Gibbo-St.DenisBeatTape-05Tribe.m4a')
    .then(response => response.blob())
    .then(blob => {
      gibbo.srcObject = blob;
      return gibbo.play();
    })
    .then(_ => {
      // Video playback started ;)
    })
    .catch(e => {
      // Video playback failed ;(
    })
  }
  // if (gibbo.paused) {
  //
  // } else {
  //   gibbo.pause();
  //   anime({
  //     targets: "#speaker-off",
  //     opacity: 0.5,
  //     duration: 100,
  //   });
  //   anime({
  //     targets: "#speaker-on",
  //     opacity: 0,
  //     duration: 100,
  //   });
  // }

document.querySelector("#speaker-on").addEventListener("click", playGibbo, false);
document.querySelector("#record-needle").addEventListener("click", playGibbo, false);
