import { useEffect, useRef, useState } from 'react';
import './PhoneMockup.css';

// `isActive` is driven by the parent carousel: the centered phone plays,
// the others stay paused. A click still toggles play/pause locally on
// whichever phone is currently active.
export default function PhoneMockup({ videoSrc, handle, caption, label, sublabel, isActive }) {
  const [isPaused, setIsPaused] = useState(!isActive);
  const videoRef = useRef(null);

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

  function togglePlayback() {
    if (!isActive) return;
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  return (
    <div className="device-phone">
      <div className="frame">
        <div className="notch" />
        <div className="screen" onClick={togglePlayback}>
          <div className="status-bar">
            <span className="time">9:41</span>
            <span className="status-icons">●●●</span>
          </div>
          {videoSrc && (
            <video
              ref={videoRef}
              className="screen-video"
              muted
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
