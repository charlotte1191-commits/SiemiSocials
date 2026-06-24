import WorkCard from '../components/WorkCard';
import { PROJECTS } from '../data/projects';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio-page">
      <div className="portfolio-heading">
        <p className="eyebrow">Portfolio</p>
        <h1>Selected Work</h1>
      </div>
      <div className="portfolio-grid">
        {PROJECTS.map((project) => (
          <WorkCard key={project.slug} link={`/portfolio/${project.slug}`} {...project} />
        ))}
      </div>
    </section>
  );
}
