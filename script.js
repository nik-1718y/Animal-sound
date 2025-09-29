
const audio = new Audio();

let imgs = document.querySelectorAll(".ani img, .bir img");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", () => {
    let imgAlt = imgs[i].alt.toLowerCase();
    playSound(imgAlt);
  });
}

function playSound(key) {
  let src = "";
  switch (key) {
    case "tiger":
      src = "animal-sound/tiger-371353.mp3";
      break;
    case "fox":
      src = "animal-sound/010467_red-fox-calls-at-night-59627.mp3";
      break;
    case "horse":
      src = "animal-sound\horse-neigh-390297.mp3";
      break;
    case "bear":
      src = "animal-sound/bear-191995.mp3";
      break;
    case "lion":
      src = "animal-sound/lion-roaring-sfx-293295.mp3";
      break;
    case "elephant":
      src = "animal-sound/elephant-trumpets-growls-6047.mp3";
      break;
    case "monkey":
      src = "animal-sound/monkey-128368.mp3";
      break;
    case "deer":
      src = "animal-sound/deer-baby-calling-for-mama-233035.mp3";
      break;
    case "parrot":
      src = "animal-sound/parrots-88486.mp3";
      break;
    case "peacock":
      src = "animal-sound/peacock-call-sound-effect-238053.mp3";
      break;
    case "king":
      src = "animal-sound/humming-bird-333662.mp3";
      break;
    case "eagle":
      src = "animal-sound/eagle-355831.mp3";
      break;
    case "crow":
      src = "animal-sound/creepy-crow-caw-322991.mp3";
      break;
  }

  if (src) {
    audio.pause();          
    audio.currentTime = 0;  
    audio.src = src;        
    audio.play();           
  }
}
