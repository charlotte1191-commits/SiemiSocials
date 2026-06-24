import { Link } from 'react-router-dom';
import './WorkCard.css';

export default function WorkCard({ image, imageLabel, title, description, link, linkLabel }) {
  const isInternal = link && link.startsWith('/');

  const imageBlock = (
    <div
      className="work-card-image"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {!image && <span>{imageLabel}</span>}
    </div>
  );

  return (
    <div className="work-card">
      {link && isInternal && <Link to={link}>{imageBlock}</Link>}
      {link && !isInternal && <a href={link}>{imageBlock}</a>}
      {!link && imageBlock}
      <div className="work-card-body">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-description">{description}</p>
        {link && isInternal && (
          <Link to={link} className="text-link work-card-link">
            {linkLabel || 'View Case Study →'}
          </Link>
        )}
        {link && !isInternal && (
          <a href={link} className="text-link work-card-link">
            {linkLabel || 'View Case Study →'}
          </a>
        )}
      </div>
    </div>
  );
}
