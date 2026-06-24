import './Hero.css';

const PILLS = ['Nestlé Cereals', 'Warner Bros.', "L'Oréal Luxe"];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-circle hero-circle-large" />
      <div className="hero-circle hero-circle-small" />

      <div className="hero-photo">
        <img src="/portrait.jpg" alt="Charlotte Siemianowicz" />
      </div>

      <div className="hero-text">
        <p className="eyebrow hero-eyebrow">Social Media Strategist &middot;</p>
        <img src="/LOGO.svg?v=2" alt="Siemi Socials" className="hero-wordmark-logo" />
        <p className="hero-role">
          Social Media Strategy
 &middot; Campaigns &middot; Influencer Management
          <br />
          Organic Social &middot; Campaign Direction
        </p>
        <div className="hero-pills">
          {PILLS.map((pill) => (
            <span className="hero-pill" key={pill}>
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="wave-divider" />
    </section>
  );
}
