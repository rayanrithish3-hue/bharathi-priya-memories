/* script.js */

let pin = "";

/* PIN */

function enterPin(num){

  if(pin.length < 4){

    pin += num;

    updateDots();

  }

}

function clearPin(){

  pin = pin.slice(0,-1);

  updateDots();

}

function updateDots(){

  const dots =
  document.querySelectorAll(".dot");

  dots.forEach((dot,index)=>{

    if(index < pin.length){

      dot.style.background =
      "#E50914";

    }

    else{

      dot.style.background =
      "transparent";

    }

  });

}

function checkPin(){

  if(pin === "5689"){

    document.getElementById(
      "password-screen"
    ).style.display = "none";

    document.getElementById(
      "intro-touch"
    ).style.display = "flex";

  }

}

/* TOUCH SCREEN */

document.getElementById(
  "intro-touch"
).addEventListener("click",()=>{

  document.getElementById(
    "intro-touch"
  ).style.display = "none";

  document.getElementById(
    "intro"
  ).style.display = "block";

  const introVideo =
  document.getElementById(
    "intro-video"
  );

  introVideo.play();

  setTimeout(()=>{

    document.getElementById(
      "intro"
    ).style.display = "none";

    document.getElementById(
      "main-content"
    ).style.display = "block";

  },18000);

});

/* PLAY */

function scrollToChapters(){

  document.getElementById(
    "chapters"
  ).scrollIntoView({
    behavior:"smooth"
  });

}

/* VIDEO */

function openVideo(videoName){

  document.getElementById(
    "video-popup"
  ).style.display = "flex";

  document.getElementById(
    "video-source"
  ).src = videoName;

  const player =
  document.getElementById(
    "movie-player"
  );

  player.load();

  player.play();

}

function closeVideo(){

  document.getElementById(
    "video-popup"
  ).style.display = "none";

  document.getElementById(
    "movie-player"
  ).pause();

}

/* MY LIST */

let added = false;

function toggleList(){

  const icon =
  document.getElementById(
    "list-icon"
  );

  added = !added;

  if(added){

    icon.innerHTML = "✓";

  }

  else{

    icon.innerHTML = "＋";

  }

}

/* RATING */

function openRating(){

  document.getElementById(
    "rating-popup"
  ).style.display = "flex";

}

function closeRating(){

  document.getElementById(
    "rating-popup"
  ).style.display = "none";

}

function rateStar(star){

  star.style.color = "gold";

}

/* SHARE */

function shareWebsite(){

  navigator.share({

    title:
    "Bharathi Priya's Memories",

    text:
    "Check this out",

    url:
    window.location.href

  });

}

/* DOWNLOAD */

function openDownloadPopup(){

  document.getElementById(
    "download-popup"
  ).style.display = "flex";

}

function closeDownloadPopup(){

  document.getElementById(
    "download-popup"
  ).style.display = "none";

}
