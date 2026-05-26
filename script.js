setTimeout(() => {

  document.getElementById("intro").style.display = "none";

  document.getElementById("main-content").style.display = "block";

}, 4500);

function openVideo(videoName){

  document.getElementById("video-popup").style.display = "flex";

  document.getElementById("video-source").src = videoName;

  const player = document.getElementById("movie-player");

  player.load();

  player.play();

}

function closeVideo(){

  document.getElementById("video-popup").style.display = "none";

  const player = document.getElementById("movie-player");

  player.pause();

}