import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import PhoneShowcase from '../components/PhoneShowcase';
import EditorialCaseStudy from '../components/EditorialCaseStudy';
import TikTokShowcase from '../components/TikTokShowcase';
import BehindTheScenes from '../components/BehindTheScenes';
import './ProjectDetail.css';

// [Placeholder] — each project will eventually get its own bespoke layout
// (different image arrangements, copy, etc). This is a shared blank
// template just so every /portfolio/:slug link goes somewhere themed
// instead of 404ing, until real case studies are built out one by one.
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail">
        <p className="eyebrow">Portfolio</p>
        <h1>Project not found</h1>
        <Link to="/portfolio" className="text-link">
          &larr; Back to Portfolio
        </Link>
      </section>
    );
  }

  // Some projects get a bespoke editorial layout (full-bleed media + large
  // type rhythm) instead of the generic eyebrow/title/meta/approach template.
  if (project.editorial) {
    return <EditorialCaseStudy project={project} />;
  }

  return (
    <>
      <section className="project-detail">
        <Link to="/portfolio" className="text-link project-detail-back">
          &larr; Back to Portfolio
        </Link>

        <p className="eyebrow">{project.category}</p>
        <h1 className="project-detail-title">{project.title}</h1>

        {project.meta && (
          <div className="project-detail-meta">
            {project.meta.role && (
              <div className="project-detail-meta-item">
                <span className="project-detail-meta-label">Role</span>
                <span>{project.meta.role}</span>
              </div>
            )}
            {project.meta.platforms && (
              <div className="project-detail-meta-item">
                <span className="project-detail-meta-label">Platforms</span>
                <span>{project.meta.platforms}</span>
              </div>
            )}
            {project.meta.scope && (
              <div className="project-detail-meta-item">
                <span className="project-detail-meta-label">Scope</span>
                <span>{project.meta.scope}</span>
              </div>
            )}
            {project.meta.year && (
              <div className="project-detail-meta-item">
                <span className="project-detail-meta-label">Year</span>
                <span>{project.meta.year}</span>
              </div>
            )}
          </div>
        )}

        <div
          className="project-detail-hero-image"
          style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
        >
          {!project.image && <span>{project.imageLabel}</span>}
        </div>

        <div className="project-detail-body">
          {project.approach ? (
            project.approach.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          ) : (
            <p>
            
            </p>
          )}
        </div>
      </section>

      {/* Only rendered for projects with real social content to show — see data/projects.js */}
      {project.showcase && <PhoneShowcase {...project.showcase} />}
      {project.tiktokShowcase && <TikTokShowcase videos={project.tiktokShowcase} />}
      {project.behindTheScenes && <BehindTheScenes {...project.behindTheScenes} />}
    </>
  );
}
