var recordPin = document.querySelector("#record-pin");
var recordShine = document.querySelector("#record-shine");
var speakerOn = document.querySelector("#speaker-on");
var speakerOff = document.querySelector("#speaker-off");
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function webAudioTouchUnlock(context) {
  return new Promise(function(resolve, reject) {
    if (context.state === "suspended" && "ontouchstart" in window) {
      var unlock = function() {
        context.resume().then(
          function() {
            document.body.removeEventListener("touchstart", unlock);
            document.body.removeEventListener("touchend", unlock);

            resolve(true);
          },
          function(reason) {
            reject(reason);
          }
        );
      };

      document.body.addEventListener("touchstart", unlock, false);
      document.body.addEventListener("touchend", unlock, false);
    } else {
      resolve(false);
    }
  });
}
///    Records    ///
function finishAbduction() {
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

function putYourRecordsOn() {
  document.querySelector("#record").style.display = "block";
  recordPin.style.display = "block";
  recordShine.style.display = "block";
  anime({
    targets: "#white-circle",
    scaleY: 0.3,
    scaleX: 1,
    translateX: '-50%',
    translateY: '-80%',
    easing: "easeInOutQuad",
    duration: 500
  });
  anime({
    targets: "#record-lines",
    scaleY: 0.3,
    opacity: 1,
    easing: "easeInOutQuad",
    delay: 150,
    duration: 750
  });
  anime({
    targets: "#record-pin",
    translateY: '-90%',
    easing: "linear",
    delay: 500,
    duration: 150,
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
    skewX: 13,
    translateX: '-14%',
    easing: "easeOutExpo",
    delay: 250,
    duration: 1500,
    complete: function(anim) {
      return animationState = [false, 4];
    }
  });
  anime({
    targets: speakerOff,
    opacity: 0.8,
    delay: 1000,
    duration: 200
  });
}

const gibbo = document.querySelector('#gibbo');

function playGibbo() {
  var playPromise = Promise.resolve(gibbo.play());
  webAudioTouchUnlock(context).then(
    function(unlocked) {
      if (unlocked) {
        playPromise.then(() => {}).catch(e => {
          console.log(e.message);
        });
      } else {
        playPromise.then(() => {}).catch(e => {
          console.log(e.message);
        });
      }
    },
    function(reason) {
      console.error(reason);
    }
  );
}

function pauseGibbo() {
  gibbo.pause();
}

function toggleSpeaker() {
  if (gibbo.paused) {
    playGibbo();
    anime({
      targets: "#record-needle",
      skewX: 0,
      translateX: '-14%',
      easing: "easeOutExpo",
      duration: 500,
    });
    anime({
      targets: speakerOff,
      opacity: 0,
      duration: 100,
    });
    anime({
      targets: speakerOn,
      opacity: 0.8,
      duration: 100,
    });
  } else {
    pauseGibbo();
    anime({
      targets: "#record-needle",
      skewX: 13,
      translateX: '-14%',
      easing: "easeOutExpo",
      duration: 500,
    });
    anime({
      targets: "#speaker-off",
      opacity: 0.8,
      duration: 100,
    });
    anime({
      targets: speakerOn,
      opacity: 0,
      duration: 100,
    });
  }
}


speakerOn.addEventListener("click", toggleSpeaker, false);
document.querySelector("#record-needle").addEventListener("click", toggleSpeaker, false);
recordPin.addEventListener("click", easterEggs, false);