import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const playlist = [
    "/iwasneverthere.mp3",
    "/escapism.mp3",
    "/blue.mp3",
    "/YAD.mp3",
    "/stars.mp3",
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [infoText, setInfoText] = useState("Click to play music 🎵");
  const audioRef = useRef(null);
  const lastTapTime = useRef(0);
  const clickTimeout = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Core play function — always called from user gesture
  const playAudio = (index) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[index];
    audio.volume = 0.6;
    audio.muted = false;

    audio.load();

    audio.play()
      .then(() => {
        setIsPlaying(true);
        setInfoText("Double click to change track 🎶");
      })
      .catch(() => {
        setIsPlaying(false);
        setInfoText("Click to play music 🎵");
      });
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setInfoText("Click to play music 🎵");
  };

  const togglePlay = () => {
    if (isPlayingRef.current) {
      pauseAudio();
    } else {
      playAudio(currentTrackIndex);
    }
  };

  const shuffleNextTrack = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } while (nextIndex === currentTrackIndex && playlist.length > 1);

    setCurrentTrackIndex(nextIndex);
    // Only play if already playing
    if (isPlayingRef.current) {
      playAudio(nextIndex);
    } else {
      // Just update src silently
      if (audioRef.current) {
        audioRef.current.src = playlist[nextIndex];
        audioRef.current.load();
      }
    }
  };

  const handleTrackEnd = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } while (nextIndex === currentTrackIndex && playlist.length > 1);
    setCurrentTrackIndex(nextIndex);
    playAudio(nextIndex);
  };

  // Volume keys
  useEffect(() => {
    const handleVolumeKeys = (e) => {
      const audio = audioRef.current;
      if (!audio) return;
      if (e.key === "ArrowUp") {
        e.preventDefault();
        audio.volume = Math.min(1, Math.round((audio.volume + 0.05) * 100) / 100);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        audio.volume = Math.max(0, Math.round((audio.volume - 0.05) * 100) / 100);
      }
    };
    window.addEventListener("keydown", handleVolumeKeys, { passive: false });
    return () => window.removeEventListener("keydown", handleVolumeKeys);
  }, []);

  // Mobile double tap
  const handleDoubleTapMobile = () => {
    const now = Date.now();
    if (now - lastTapTime.current < 400) {
      shuffleNextTrack();
    }
    lastTapTime.current = now;
  };

  // Desktop single vs double click
  const handleClick = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      shuffleNextTrack();
    } else {
      clickTimeout.current = setTimeout(() => {
        togglePlay();
        clickTimeout.current = null;
      }, 250);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
      <p className="text-xs text-gray-300 italic">{infoText}</p>

      <audio
        ref={audioRef}
        onEnded={handleTrackEnd}
        preload="none"
      />

      <button
        onClick={handleClick}
        onTouchStart={handleDoubleTapMobile}
        className="p-4 rounded-full shadow-lg transition transform hover:scale-110"
        style={{
          background: isPlaying
            ? "linear-gradient(135deg, #00f0ff, #00ff80)"
            : "linear-gradient(135deg, #555, #333)",
          boxShadow: isPlaying
            ? "0 0 15px #00f0ff, 0 0 25px #00ff80"
            : "0 0 10px rgba(0,0,0,0.5)",
          color: "white",
          transition: "all 0.3s ease"
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;