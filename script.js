const videoGrid = document.getElementById('video-grid');
const videoId = 'jJWgm0crzeU'; // Replace with your desired YouTube video ID
const numberOfViews = 200;

for (let i = 0; i < numberOfViews; i++) {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);
    videoGrid.appendChild(videoContainer);
}
