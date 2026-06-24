import { useEffect, useRef, useState } from 'react';
import PhoneMockup from './PhoneMockup';
import './PhoneCarousel.css';

// A horizontally scrollable row of phones where the centered one plays and
// the others sit smaller/dimmed to the sides. Scrolling (drag, swipe, or
// trackpad) and clicking a side phone both bring it to the front; whichever
// phone leaves center automatically pauses.
export default function PhoneCarousel({ phones }) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const middleIndex = Math.floor(phones.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateActiveFromScroll() {
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(slideCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      setActiveIndex(closestIndex);
    }

    let frame;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveFromScroll);
    }

    // Force the middle phone to be perfectly centered (and active) on load,
    // rather than relying on the track's padding math lining up exactly.
    scrollToIndex(middleIndex, 'auto');
    updateActiveFromScroll();
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [middleIndex]);

  // Scrolls only the carousel track horizontally (never the page) — using
  // scrollIntoView here would also drag the whole window down to bring this
  // mid-page section into view, which fights the scroll-to-top-on-navigate
  // behavior.
  function scrollToIndex(i, behavior = 'smooth') {
    const track = trackRef.current;
    const slide = slideRefs.current[i];
    if (!track || !slide) return;
    const targetLeft = slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2;
    track.scrollTo({ left: targetLeft, behavior });
  }

  return (
    <div className="phone-carousel">
      <div className="phone-carousel-track" ref={trackRef}>
        {phones.map((phone, i) => (
          <div
            className={i === activeIndex ? 'phone-carousel-slide is-active' : 'phone-carousel-slide'}
            ref={(el) => (slideRefs.current[i] = el)}
            onClick={() => i !== activeIndex && scrollToIndex(i)}
            key={phone.videoSrc}
          >
            <PhoneMockup {...phone} isActive={i === activeIndex} />
          </div>
        ))}
      </div>
    </div>
  );
}
