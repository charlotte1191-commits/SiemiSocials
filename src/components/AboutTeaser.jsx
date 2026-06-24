import { Link } from 'react-router-dom';
import './AboutTeaser.css';

export default function AboutTeaser() {
  return (
    <section id="about" className="about-teaser">
      <div className="about-teaser-circle" />

      <div className="about-teaser-grid">
        <div className="about-teaser-left">
          <p className="eyebrow about-teaser-tag"></p>
          <h2 className="about-teaser-heading">
            Building <span className="italic-accent">communities</span>, not just content.
          </h2>
        </div>
        <div className="about-teaser-right">
          <p className="about-teaser-body">
            I've worked in social media for six years, across a multitude of big brands, from
            premium beauty and chocolate to breakfast cereal. Here's my story&hellip;
          </p>
          <Link to="/about" className="button-primary">
            Read the full story &rarr;
          </Link>
        </div>
      </div>

      <div className="wave-divider" />
    </section>
  );
}
