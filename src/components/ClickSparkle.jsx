import { useEffect, useRef, useState } from 'react';
import './ClickSparkle.css';

let nextId = 0;

// A small decorative flourish: every click on the site pops a few pink
// sparkles at the cursor, purely cosmetic, no effect on click handling.
export default function ClickSparkle() {
  const [sparkles, setSparkles] = useState([]);
  const timeoutsRef = useRef(new Set());

  useEffect(() => {
    const timeouts = timeoutsRef.current;

    function handleClick(e) {
      const burst = Array.from({ length: 5 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 18 + Math.random() * 22;
        return {
          id: nextId++,
          x: e.clientX,
          y: e.clientY,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          size: 6 + Math.random() * 6,
          delay: Math.random() * 80,
        };
      });

      setSparkles((prev) => [...prev, ...burst]);

      const timeoutId = setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => !burst.includes(s)));
        timeouts.delete(timeoutId);
      }, 700);
      timeouts.add(timeoutId);
    }

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="click-sparkle-layer">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="click-sparkle"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            '--dx': `${s.dx}px`,
            '--dy': `${s.dy}px`,
            animationDelay: `${s.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}
