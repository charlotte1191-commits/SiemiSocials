import Hero from '../components/Hero';
import BrandsTicker from '../components/BrandsTicker';
import AboutTeaser from '../components/AboutTeaser';
import Services from '../components/Services';
import PortfolioPreview from '../components/PortfolioPreview';
import StatsBand from '../components/StatsBand';
import ContactCta from '../components/ContactCta';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsTicker />
      <AboutTeaser />
      <Services />
      <PortfolioPreview />
      <StatsBand />
      <ContactCta />
    </>
  );
}
