
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const filterType = params.get("filter");
  const filterValue = params.get("value");

  const songList = document.getElementById("song-list");
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const cover = document.getElementById("cover");
  const pageTitle = document.getElementById("page-title");
  const progress = document.getElementById("progress");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const volume = document.getElementById("volume");
  const playPauseBtn = document.getElementById("playPauseBtn");

  let currentIndex = 0;
  let filteredSongs = [];

  if (filterType && filterValue && typeof songs !== 'undefined') {
    filteredSongs = songs.filter(song => song[filterType]?.toLowerCase() === filterValue.toLowerCase());

    pageTitle.textContent = `${filterValue} Songs`;

    filteredSongs.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.singer}`;
      li.onclick = () => {
        currentIndex = index;
        loadSong(currentIndex);
      };
      songList?.appendChild(li);
    });

    if (filteredSongs.length > 0) loadSong(currentIndex);
  }

  function loadSong(index) {
    const song = filteredSongs[index];
    if (!song) return;
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = `${song.singer} • ${song.movie}`;
    cover.src = song.cover;
    audio.play();
    playPauseBtn.textContent = "⏸️";
    localStorage.setItem("lastPlayedSong", JSON.stringify({
      title: song.title,
      movie: song.movie,
      cover: song.cover,
      src: song.src
    }));
  }

  if (audio) {
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
      }
    });

    audio.addEventListener("ended", () => {
      currentIndex++;
      if (currentIndex < filteredSongs.length) {
        loadSong(currentIndex);
      } else {
        playPauseBtn.textContent = "▶️";
      }
    });

    progress.addEventListener("input", () => {
      audio.currentTime = (progress.value / 100) * audio.duration;
    });

    volume.addEventListener("input", () => {
      audio.volume = volume.value;
    });

    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
      } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
      }
    });
  }

  const lastPlayed = JSON.parse(localStorage.getItem("lastPlayedSong"));
  if (lastPlayed) {
    const section = document.getElementById("now-playing-section");
    const npAudio = document.getElementById("np-audio");
    const titleEl = document.getElementById("np-title");
    const movieEl = document.getElementById("np-movie");
    const coverEl = document.getElementById("np-cover");
    const npPlayPauseBtn = document.getElementById("np-play-pause");
    const npProgress = document.getElementById("np-progress");
    const npCurrent = document.getElementById("np-current-time");
    const npDuration = document.getElementById("np-duration");
    const npVolume = document.getElementById("np-volume");

    section.style.display = "block";
    titleEl.textContent = lastPlayed.title;
    movieEl.textContent = lastPlayed.movie;
    coverEl.src = lastPlayed.cover;
    npAudio.src = lastPlayed.src;
    npAudio.volume = 1;

    let isPlaying = false;

    npPlayPauseBtn.addEventListener("click", () => {
      if (isPlaying) {
        npAudio.pause();
        npPlayPauseBtn.textContent = "▶️";
      } else {
        npAudio.play();
        npPlayPauseBtn.textContent = "⏸️";
      }
      isPlaying = !isPlaying;
    });

    npVolume.addEventListener("input", () => {
      npAudio.volume = npVolume.value;
    });

    npAudio.addEventListener("timeupdate", () => {
      if (npAudio.duration) {
        npProgress.value = (npAudio.currentTime / npAudio.duration) * 100;
        npCurrent.textContent = formatTime(npAudio.currentTime);
        npDuration.textContent = formatTime(npAudio.duration);
      }
    });

    npProgress.addEventListener("input", () => {
      if (npAudio.duration) {
        npAudio.currentTime = (npProgress.value / 100) * npAudio.duration;
      }
    });

    npAudio.addEventListener("ended", () => {
      npPlayPauseBtn.textContent = "▶️";
      isPlaying = false;
    });
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }
};

