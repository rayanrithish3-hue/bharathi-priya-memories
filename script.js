const introVideo =
document.getElementById("intro-video");

introVideo.onended = () => {

  document.getElementById("intro")
  .style.display = "none";

  document.getElementById("main-content")
  .style.display = "block";

};

function scrollToChapters(){

  document.getElementById("chapters")
  .scrollIntoView({
    behavior:"smooth"
  });

}

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

function openInfo(){

  document.getElementById("info-popup")
  .style.display = "flex";

}

function closeInfo(){

  document.getElementById("info-popup")
  .style.display = "none";

}