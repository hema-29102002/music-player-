const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playlist = document.getElementById('playlist');

playlist.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    audio.src = e.target.getAttribute('data-src');
    title.textContent = e.target.getAttribute('data-title');
    artist.textContent = e.target.getAttribute('data-artist');
    audio.play();
  }
});

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

audio.addEventListener('timeupdate', () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});