import './StatsBand.css';

const STATS = [
  { value: '6+ Years', label: 'Social & Content Experience' },
  { value: 'Social-First', label: 'Content Designed To Stop The Scroll' },

  { value: '12+ Brands', label: 'Supported Across Social, Campaigns & Content' },
  
  { value: 'Community Building', label: 'Social Built For Connection' },
];

export default function StatsBand() {
  return (
    <section id="stats" className="stats-band">
      {STATS.map((stat, i) => (
        <div className={i === STATS.length - 1 ? 'stat stat-last' : 'stat'} key={stat.label}>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
