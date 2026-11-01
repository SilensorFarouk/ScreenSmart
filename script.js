
// Get the video and status elements
const video = document.getElementById("tutorialVideo");
const status = document.getElementById("status");

// Get the buttons
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");

// PLAY BUTTON
playBtn.addEventListener("click", function () {

    video.play().catch(function () {
        status.textContent = "Status: Unable to play video.";
    });

});

// PAUSE BUTTON
pauseBtn.addEventListener("click", function () {

    video.pause();

});

// RESTART BUTTON
restartBtn.addEventListener("click", function () {

    video.currentTime = 0;

    video.play().catch(function () {
        status.textContent = "Status: Unable to play video.";
    });

});

// VIDEO PLAYING
video.addEventListener("playing", function () {

    status.textContent = "Status: Video is currently playing.";

});

// VIDEO PAUSED
video.addEventListener("pause", function () {

    if (video.ended) return;

    status.textContent = "Status: Video is paused.";

});

// VIDEO FINISHED
video.addEventListener("ended", function () {

    status.textContent = "Status: Video has finished playing.";

});

// VIDEO LOADING
video.addEventListener("waiting", function () {

    status.textContent = "Status: Video is loading...";

});

// VIDEO READY
video.addEventListener("loadedmetadata", function () {

    status.textContent = "Status: Video is ready to play.";

});

// VIDEO ERROR
video.addEventListener("error", function () {

    status.textContent = "Status: Unable to load video. Check the video file.";

});
