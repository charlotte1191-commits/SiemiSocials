import { useState } from 'react';
import PhoneMockup from './PhoneMockup';
import './ReelGrid.css';

// Thumbnail-sized phone preview. Seeks a hair into the clip on load so a
// real frame shows instead of a blank black rectangle, without actually
// autoplaying every thumbnail at once.
function ReelThumb({ videoSrc, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={isSelected ? 'reel-thumb is-selected' : 'reel-thumb'}
      onClick={onSelect}
      aria-label="Play this reel"
    >
      <div className="reel-thumb-frame">
        <video
          className="reel-thumb-video"
          muted
          playsInline
          preload="metadata"
          src={videoSrc}
          onLoadedMetadata={(e) => {
            e.target.currentTime = 0.1;
          }}
        />
      </div>
    </button>
  );
}

// A big "now playing" phone with its write-up on the left and every
// thumbnail grouped on the right — click any thumbnail and it becomes the
// large, playing phone, and the copy on the left swaps to match it.
// `reels` is an array of { videoSrc, copy }.
export default function ReelGrid({ reels }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = reels[selectedIndex];

  return (
    <div className="reel-grid-wrap">
      {selected.copy && <p className="reel-grid-copy">{selected.copy}</p>}

      <div className="reel-grid-stage">
        <PhoneMockup videoSrc={selected.videoSrc} isActive />
      </div>

      <div className="reel-grid-thumbs">
        {reels.map((reel, i) => (
          <ReelThumb
            key={reel.videoSrc}
            videoSrc={reel.videoSrc}
            isSelected={i === selectedIndex}
            onSelect={() => setSelectedIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
