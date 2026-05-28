/* script.js */

const tapLayer =
document.getElementById("tap-layer");

const introVideo =
document.getElementById("intro-video");

/* INTRO */

tapLayer.addEventListener("click", () => {

  tapLayer.style.display = "none";

  introVideo.play();

  setTimeout(() => {

    document.getElementById("intro")
    .style.display = "none";

    document.getElementById("main-content")
    .style.display = "block";

  }, 18000);

});

/* PLAY BUTTON */

function scrollToChapters(){

  document.getElementById("chapters")
  .scrollIntoView({
    behavior:"smooth"
  });

}

/* VIDEO */

function openVideo(videoName){

  document.getElementById("video-popup")
  .style.display = "flex";

  document.getElementById("video-source")
  .src = videoName;

  const player =
  document.getElementById("movie-player");

  player.load();

  player.play();

}

function closeVideo(){

  document.getElementById("video-popup")
  .style.display = "none";

  document.getElementById("movie-player")
  .pause();

}

/* INFO */

function openInfo(){

  document.getElementById("info-popup")
  .style.display = "flex";

}

function closeInfo(){

  document.getElementById("info-popup")
  .style.display = "none";

}

/* MY LIST */

let added = false;

function toggleList(){

  const icon =
  document.getElementById("list-icon");

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

  document.getElementById("rating-popup")
  .style.display = "flex";

}

function closeRating(){

  document.getElementById("rating-popup")
  .style.display = "none";

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
