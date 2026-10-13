import React, {useRef, useEffect, useState} from 'react';
import './player.css';

export default function Player({src, title, subtitles = [], poster, onClose}){
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);

  useEffect(() => {
    const v = videoRef.current;
    if(!v) return;
    const onTime = () => setCurrentTime(v.currentTime);
    const onDuration = () => setDuration(v.duration || 0);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onDuration);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onDuration);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, [src]);

  useEffect(() => {
    const handler = (e) => {
      // Remote / keyboard controls
      if(e.key === ' ' || e.code === 'Space'){
        e.preventDefault();
        togglePlay();
      } else if(e.key === 'ArrowRight'){
        seekBy(10);
      } else if(e.key === 'ArrowLeft'){
        seekBy(-10);
      } else if(e.key === 'ArrowUp'){
        changeVolume(0.1);
      } else if(e.key === 'ArrowDown'){
        changeVolume(-0.1);
      } else if(e.key === 'Escape'){
        // close player
        onClose && onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [videoRef, playing, volume]);

  useEffect(() => {
    // autoplay when src changes
    const v = videoRef.current;
    if(v){
      v.volume = volume;
      v.play().catch(()=>{});
    }
  }, [src]);

  const togglePlay = () => {
    const v = videoRef.current;
    if(!v) return;
    if(v.paused) v.play(); else v.pause();
  };

  const seekBy = (sec) => {
    const v = videoRef.current;
    if(!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + sec));
  };

  const changeVolume = (delta) => {
    const v = videoRef.current;
    if(!v) return;
    const next = Math.max(0, Math.min(1, (v.volume || 1) + delta));
    v.volume = next;
    setVolume(next);
  };

  const onSeek = (ev) => {
    const v = videoRef.current;
    if(!v) return;
    v.currentTime = parseFloat(ev.target.value);
  };

  const toggleFullscreen = async () => {
    const container = videoRef.current?.parentElement;
    if(!container) return;
    if(!document.fullscreenElement){
      await container.requestFullscreen().catch(()=>{});
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen().catch(()=>{});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="player-overlay" role="dialog" aria-label={`Player: ${title}`}>
      <div className="player-inner">
        <div className="player-header">
          <div className="player-title">{title}</div>
          <div className="player-actions">
            <button onClick={() => { videoRef.current && (videoRef.current.currentTime = Math.max(0, (videoRef.current.currentTime || 0) - 30)); }}>-30s</button>
            <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
            <button onClick={() => { videoRef.current && (videoRef.current.currentTime = Math.min((videoRef.current.duration||0), (videoRef.current.currentTime||0) + 30)); }}>+30s</button>
            <button onClick={toggleFullscreen}>{isFullscreen ? 'Exit FS' : 'Fullscreen'}</button>
            <button onClick={() => onClose && onClose()}>Close</button>
          </div>
        </div>

        <div className="player-stage">
          <video ref={videoRef} src={src} poster={poster} className="player-video" controls={false} playsInline />

          <div className="player-controls">
            <input type="range" min={0} max={duration || 0} value={currentTime} onChange={onSeek} className="seekbar" />
            <div className="meta">
              <div>{formatTime(currentTime)} / {formatTime(duration)}</div>
              <div>
                <label>Volume</label>
                <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e)=>{ const v = parseFloat(e.target.value); setVolume(v); if(videoRef.current) videoRef.current.volume = v; }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function formatTime(s){
  if(!s && s !== 0) return '--:--';
  const sec = Math.floor(s%60).toString().padStart(2,'0');
  const min = Math.floor(s/60).toString().padStart(2,'0');
  return `${min}:${sec}`;
}
