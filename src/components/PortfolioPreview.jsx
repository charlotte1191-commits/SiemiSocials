import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import WorkCard from './WorkCard';
import './PortfolioPreview.css';

export default function PortfolioPreview() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section id="portfolio" className="portfolio-preview">
      <div className="portfolio-preview-circle" />

      <div className="portfolio-preview-head">
        <div>
          <p className="eyebrow portfolio-preview-tag">Selected Work</p>
          <h2>
            Recent <span className="italic-accent">campaigns</span>
          </h2>
        </div>
        <Link to="/portfolio" className="portfolio-preview-viewall">
          View all &rarr;
        </Link>
      </div>

      <div className="portfolio-preview-grid">
        {featured.map((project) => (
          <WorkCard key={project.slug} link={`/portfolio/${project.slug}`} {...project} />
        ))}
      </div>

      <div className="wave-divider" />
    </section>
  );
}
