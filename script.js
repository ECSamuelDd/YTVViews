document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById("video-grid");

    // Function to create video elements dynamically
    function createVideoElement(src) {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");

        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.preload = "metadata"; // Lazy load video metadata
        video.autoplay = true; // Enable autoplay
        videoContainer.appendChild(video);

        videoGrid.appendChild(videoContainer);

        return video;
    }

    // Example: Adding multiple videos
    const videoSources = [
        "video1.mp4",
        "video2.mp4",
        "video3.mp4",
        // Add more video sources here
    ];

    const videos = videoSources.map(createVideoElement);

    // Synchronize video playback
    function playAllVideos() {
        videos.forEach(video => {
            if (video.readyState >= 2) {
                video.currentTime = 0; // Reset to start
                video.play();
            } else {
                video.addEventListener("canplay", () => video.play(), { once: true });
            }
        });
    }

    // Pause all videos
    function pauseAllVideos() {
        videos.forEach(video => video.pause());
    }

    // Add play/pause controls
    const playButton = document.createElement("button");
    playButton.textContent = "Play All";
    playButton.addEventListener("click", playAllVideos);

    const pauseButton = document.createElement("button");
    pauseButton.textContent = "Pause All";
    pauseButton.addEventListener("click", pauseAllVideos);

    document.body.insertBefore(playButton, videoGrid);
    document.body.insertBefore(pauseButton, videoGrid);
});
