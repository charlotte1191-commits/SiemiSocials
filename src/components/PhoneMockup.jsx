import { useEffect, useRef, useState } from 'react';
import './PhoneMockup.css';

// Multiple phones can be autoplaying at once on the same page (e.g. the
// Milkybar TikTok sections, or GOLD's behind-the-scenes pairs), so only one
// is ever allowed to be audible at a time — unmuting one silences whichever
// other clip currently holds this.
let audibleVideo = null;

// `isActive` is driven by the parent carousel: the centered phone plays,
// the others stay paused. A click still toggles play/pause locally on
// whichever phone is currently active.
export default function PhoneMockup({ videoSrc, handle, caption, label, sublabel, isActive }) {
  const [isPaused, setIsPaused] = useState(!isActive);
  // Every clip starts (and stays) muted until its own volume button is used
  // — never automatically, since that's what caused several to play with
  // sound simultaneously.
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const hideControlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (!isMuted) {
      if (audibleVideo && audibleVideo !== video) audibleVideo.muted = true;
      audibleVideo = video;
    } else if (audibleVideo === video) {
      audibleVideo = null;
    }
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.volume = volume;
  }, [volume]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      // Switching which clip is active (e.g. a new thumbnail picked from a
      // grid) changes videoSrc without remounting this element, so it needs
      // to be in the dependency list too, otherwise the new source just
      // sits there paused until the user manually hits play.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive, videoSrc]);

  useEffect(() => () => clearTimeout(hideControlsRef.current), []);

  // Controls (the volume button) are hidden until you interact with the
  // phone — hovering or tapping reveals them, then they fade out again
  // after a couple of seconds of no further interaction.
  function revealControls() {
    setShowControls(true);
    clearTimeout(hideControlsRef.current);
    hideControlsRef.current = setTimeout(() => setShowControls(false), 2500);
  }

  function togglePlayback() {
    revealControls();
    if (!isActive) return;
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function toggleMute(e) {
    e.stopPropagation();
    setIsMuted((m) => !m);
  }

  function handleVolumeChange(e) {
    const next = Number(e.target.value);
    setVolume(next);
    if (next > 0 && isMuted) setIsMuted(false);
  }

  return (
    <div className="device-phone">
      <div className="frame">
        <div className="notch" />
        <div
          className="screen"
          onClick={togglePlayback}
          onMouseMove={revealControls}
          onMouseEnter={revealControls}
        >
          <div className="status-bar">
            <span className="time">9:41</span>
            <span className="status-icons">●●●</span>
          </div>
          {videoSrc && (
            <video
              ref={videoRef}
              className="screen-video"
              defaultMuted
              loop
              playsInline
              onPlay={() => setIsPaused(false)}
              onPause={() => setIsPaused(true)}
              src={videoSrc}
            />
          )}
          {isPaused && (
            <div className="screen-pause-icon">
              <span />
              <span />
            </div>
          )}
          {videoSrc && (
            <button
              type="button"
              className={showControls ? 'phone-volume-btn is-visible' : 'phone-volume-btn'}
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          )}
          {videoSrc && (
            <input
              type="range"
              className={showControls ? 'phone-volume-slider is-visible' : 'phone-volume-slider'}
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              onClick={(e) => e.stopPropagation()}
              onMouseMove={(e) => e.stopPropagation()}
              aria-label="Volume"
            />
          )}
          <div className="reel-meta">
            <div className="handle">{handle}</div>
            <div className="caption">{caption}</div>
          </div>
        </div>
      </div>
      {(label || sublabel) && (
        <div className="device-caption">
          {label && <strong>{label}</strong>}
          {sublabel}
        </div>
      )}
    </div>
  );
}
