import { Link } from 'react-router-dom';
import PhoneCarousel from './PhoneCarousel';
import ReelGrid from './ReelGrid';
import './EditorialCaseStudy.css';

// A bespoke, photography-led case study layout — full-bleed media blocks
// alternating with large broken-line display type and generous whitespace,
// instead of the standard eyebrow/title/meta/approach template. Inspired by
// editorial photographer portfolio sites (moody full-bleed imagery, large
// type rhythm) but reworked into the site's sage/blush/cream palette.
// `editorial.blocks` carries the narrative text rhythm; `tiktoks` (an array
// of { videoSrc, sublabel }) feeds the TikToks PhoneCarousel section, `reels`
// feeds ReelGrid, and `photos` (image paths) feed a full-bleed photography grid.
export default function EditorialCaseStudy({ project }) {
  const { editorial } = project;

  return (
    <article className="editorial-case">
      <section className="editorial-intro">
        <Link to="/portfolio" className="text-link editorial-back">
          &larr; Back to Portfolio
        </Link>
        <p className="eyebrow editorial-eyebrow">{project.category}</p>
        <h1 className="editorial-heading">
          {editorial.headingLines.map((line, i) => (
            <span
              key={i}
              className={i === editorial.italicLineIndex ? 'italic-accent' : undefined}
            >
              {line}
            </span>
          ))}
        </h1>
        {editorial.intro && <p className="editorial-intro-copy">{editorial.intro}</p>}
      </section>

      {editorial.reels && (
        <section className="editorial-media-section">
          <h2 className="editorial-section-heading">Reels</h2>
          <ReelGrid reels={editorial.reels} />
        </section>
      )}

      {editorial.photos && (
        <section className="editorial-media-section editorial-photography">
          <h2 className="editorial-section-heading">Photography</h2>
          <div className="editorial-photo-grid">
            {editorial.photos.map((photo) => (
              <div className="editorial-photo-flip" key={photo.src}>
                <div className="editorial-photo-flip-inner">
                  <div className="editorial-photo-flip-front">
                    <img src={photo.src} alt="" className="editorial-photo" />
                  </div>
                  <div className="editorial-photo-flip-back">
                    <span className="editorial-photo-flip-mark">&#10078;</span>
                    <p>
                      <span className="editorial-photo-flip-quote">&ldquo;</span>
                      {photo.caption}
                      <span className="editorial-photo-flip-quote">&rdquo;</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {editorial.blocks &&
        editorial.blocks.map((block, i) =>
          block.type === 'media' ? (
            <div className="editorial-media" key={i}>
              <span>{block.label}</span>
            </div>
          ) : (
            <section className="editorial-text-block" key={i}>
              {block.heading && <h2 className="editorial-text-heading">{block.heading}</h2>}
              <p className="editorial-text-body">{block.body}</p>
            </section>
          )
        )}

      {editorial.tiktoks && (
        <section className="editorial-media-section">
          <h2 className="editorial-section-heading">TikToks</h2>
          <PhoneCarousel phones={editorial.tiktoks} />
        </section>
      )}

      <div className="editorial-end">
        <Link to="/portfolio" className="button-primary">
          View More Work
        </Link>
      </div>
    </article>
  );
}
