import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import './BehindTheScenes.css';

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

// Pairs each raw clip (shown in a phone mockup) with a photo beside it,
// alternating sides for rhythm, each pair fading up into view as you scroll.
export default function BehindTheScenes({ videos = [], photos = [] }) {
  const pairCount = Math.max(videos.length, photos.length);
  const pairs = Array.from({ length: pairCount }, (_, i) => ({
    video: videos[i],
    photo: photos[i],
  }));

  return (
    <section className="bts">
      <motion.div className="bts-head" {...fadeUp}>
        <span className="eyebrow bts-eyebrow">Behind The Scenes</span>
        <h2 className="bts-heading">How it actually came together</h2>
      </motion.div>

      {pairs.map((pair, i) => (
        <motion.div
          className={i % 2 === 1 ? 'bts-pair is-reversed' : 'bts-pair'}
          key={pair.video || pair.photo}
          {...fadeUp}
        >
          {pair.video && (
            <div className="bts-pair-phone">
              <PhoneMockup videoSrc={pair.video} isActive />
            </div>
          )}
          {pair.photo && (
            <div className="bts-pair-photo-frame">
              <img src={pair.photo} alt="" className="bts-pair-photo" />
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
}
