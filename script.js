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

    // Apply Instagram-like styles
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Arial', sans-serif";
    document.body.style.background = "linear-gradient(to bottom, #fdf497, #fdf497, #fd5949, #d6249f, #285AEB)";
    document.body.style.color = "#fff";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.minHeight = "100vh";

    videoGrid.style.display = "grid";
    videoGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    videoGrid.style.gap = "20px";
    videoGrid.style.width = "90%";
    videoGrid.style.maxWidth = "1200px";

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.padding = "10px 20px";
        button.style.margin = "10px";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.backgroundColor = "#fd5949";
        button.style.color = "#fff";
        button.style.cursor = "pointer";
        button.style.fontSize = "16px";
        button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#d6249f";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#fd5949";
        });
    });

    const videoContainers = document.querySelectorAll(".video-container");
    videoContainers.forEach(container => {
        container.style.border = "2px solid #fff";
        container.style.borderRadius = "10px";
        container.style.overflow = "hidden";
        container.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
});
