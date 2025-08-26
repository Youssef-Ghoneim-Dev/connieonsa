import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioPlayer.css";

const formatTime = (seconds) => {
  if (isNaN(seconds)) return "00:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  return [h, m, s]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};

const AudioPlayer = ({ audioUrl, title }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#d93691",
      progressColor: "#c12b7d",
      cursorColor: "#000000ff",
      cursorWidth: 3,   // 👈 حجم المؤشر (لو الإصدار بيدعمه)
      height: 80,
      responsive: true,
    });

    wavesurferRef.current.load(audioUrl);

    wavesurferRef.current.on("ready", () => {
      setDuration(wavesurferRef.current.getDuration());
      setIsLoading(false);
    });

    wavesurferRef.current.on("audioprocess", () => {
      setCurrentTime(wavesurferRef.current.getCurrentTime());
    });

    wavesurferRef.current.on("finish", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => wavesurferRef.current.destroy();
  }, [audioUrl]);

  const togglePlay = () => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.playPause();
    setIsPlaying(wavesurferRef.current.isPlaying());
  };

  return (
    <div className="player">
      <h3>{title}</h3>

      {isLoading && (
        <div className="loading">
          <span>جارٍ تحميل التسجيل الصوتي...</span>
          <div className="spinner"></div>
        </div>
      )}

      <div ref={waveformRef} className="waveform"></div>

      <div className="flex12">
        <div className="time">
          {formatTime(currentTime)} | {formatTime(duration)}
        </div>
        <button onClick={togglePlay} className="btn">
          {isPlaying ? <i className="bx bx-pause"></i> : <i className="bx bx-play"></i>}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
