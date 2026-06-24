import StatsBand from '../components/StatsBand';
import './About.css';

const PILLS = [
  'Social Media Management',
  'Copywriting',
  'Social Media Strategy',
  'Social Media Content Creation',
  'Community Management',
  'Digital Marketing',
  'Influencer Marketing',
];

export default function About() {
  return (
    <>
      <section className="about-page">
        <p className="eyebrow">About</p>
        <h1 className="about-page-heading">Hi, I'm Charlotte.</h1>



        <div className="about-bio">
          <p>
            I've worked in social media for six years, across a multitude of big brands, from
            premium beauty and chocolate to breakfast cereal. Here's my story…
          </p>
          <p>
            Social media as a vocation is something I "fell into" after the 2020 lockdown
            unceremoniously took me away from the shop floor, where I worked as a Beauty Counter
            Account Manager. In an unexpected turn of events, this new way of working opened up an
            amazing opportunity: I became the first beauty advisor asked to respond to consumers on
            the IT Cosmetics UKI Instagram account.
          </p>
          <p>
            As more colleagues from across the country joined me virtually, we branched out into
            creating video content for the account, and that was when I was bitten by the social
            media bug.
          </p>
          <p>
            Content creation instantly appeals to my creative side, but I needed something more:
            strategy. Managing a campaign end to end stretches me creatively, challenging me to
            find the perfect balance between brand authenticity and what consumers actually want to
            see.
          </p>
          <p>
            Holding the attention of a potentially unwilling audience is something I've had early
            experience in, having worked as both a Primary School Teacher and a Princess Party
            Entertainer.
          </p>
          <p>
            From IT Cosmetics, I landed a role at Nestlé, working as a Social Media Specialist
            across an impressive portfolio of household FMCG brands, including Milkybar, Smarties,
            Aero, Cheerios and Shreddies.
          </p>
          <p>
            I love working as part of a team while having ownership over campaigns that resonate
            with consumers. The fast-paced nature of social means I never get bored. Every day
            brings a new niche cultural reference, meme or platform feature, and every day I learn
            and adapt.
          </p>
          <p>
            After working with outstanding external partners such as Warner Bros. and exceptional
            talent including Jason Fox and Dave Berry, I'm now looking beyond Nestlé for my next
            adventure in social.
          </p>
        </div>

        <div className="about-pills">
          {PILLS.map((pill) => (
            <span className="pill" key={pill}>
              {pill}
            </span>
          ))}
        </div>
      </section>

      <StatsBand />
    </>
  );
}
