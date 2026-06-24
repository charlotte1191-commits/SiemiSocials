import PhoneCarousel from './PhoneCarousel';
import PostGrid from './PostGrid';
import './PhoneShowcase.css';

// Optional section — only render this on case studies that have real social
// content to show. Projects without it should skip straight to "Approach".
// `phones` feeds the carousel (one phone per reel); `title`/`text`/`posts`
// drive the subtitle + split text/photos block underneath it. This
// component is shared across multiple case studies, so per-project heading
// copy goes through `headingPrefix`/`intro` (with sensible defaults) rather
// than being hardcoded here — editing one project's copy shouldn't change
// another's.
export default function PhoneShowcase({
  phones,
  title,
  text,
  posts,
  headingPrefix = 'A look inside the ',
  intro = '',
}) {
  const hasPosts = posts && posts.length > 0;

  return (
    <>
      <section className="phone-showcase">
        <div className="showcase-head">
          <span className="eyebrow">Content In Motion</span>
          <h2>
            {headingPrefix}
            <span className="showcase-reels-highlight">
              Reels
              <span className="reels-sparkle reels-sparkle-left">✦</span>
              <span className="reels-sparkle reels-sparkle-right">✦</span>
            </span>
          </h2>
          <p>{intro}</p>
        </div>

        <PhoneCarousel phones={phones} />
      </section>

      {(title || text || hasPosts) && (
        <section className="showcase-followup">
          {title && <h3 className="showcase-subtitle">{title}</h3>}

          {(text || hasPosts) && (
            <div className="showcase-split">
              {text && <p className="showcase-text">{text}</p>}
              {hasPosts && <PostGrid posts={posts} />}
            </div>
          )}
        </section>
      )}
    </>
  );
}
