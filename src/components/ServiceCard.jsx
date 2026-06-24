import './ServiceCard.css';

export default function ServiceCard({ tag, title, description }) {
  return (
    <div className="service-card">
      <p className="service-card-tag">{tag}</p>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
}
