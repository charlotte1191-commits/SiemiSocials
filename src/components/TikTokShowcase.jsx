import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import './TikTokShowcase.css';

// One phone per section (alternating sides for rhythm), each with its own
// write-up that animates in via framer-motion as it scrolls into view.
export default function TikTokShowcase({ videos }) {
  return (
    <div className="tiktok-showcase">
      {videos.map((video, i) => (
        <section
          className={i % 2 === 1 ? 'tiktok-section is-reversed' : 'tiktok-section'}
          key={video.videoSrc}
        >
          <div className="tiktok-section-phone">
            <PhoneMockup videoSrc={video.videoSrc} isActive />
          </div>

          <motion.div
            className="tiktok-section-copy"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {video.heading && <h3 className="tiktok-section-heading">{video.heading}</h3>}
            {video.body && <p className="tiktok-section-body">{video.body}</p>}
          </motion.div>
        </section>
      ))}
    </div>
  );
}
