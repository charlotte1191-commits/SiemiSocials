// Real career history sourced from Charlotte's CV/internal profile. Note:
// the GOLD campaign's exact OTS figure and the general "14 collaborations"
// stat (used in StatsBand) are still reworded without internal numbers
// pending sign-off. The Superman/Cereals "+59% vs Target" figure, and the
// Milkybar "800k engagements" figure (directly authored by Charlotte for
// this case study's own copy), are both confirmed and used as-is.
// Each project gets its own detail page at /portfolio/:slug (see ProjectDetail.jsx).
export const PROJECTS = [
  {
    slug: 'cereals-superman',
    image: '/projects/superman-nestle/cover.jpg',
    category: '',
    title: 'Superman × Nestlé',
    description:
      "Leading the social strategy for this on pack promotion was an exciting challenge and amazing opportunity to work with Warner Bros. The campaign leveraged the popularity of the Superman Movie whilst staying true to the Shreddies brand TOV by positioning the product as the essential way to start...",
    meta: {
      role: '',
      platforms: 'Instagram, TikTok, X, Facebook',
      scope: 'Strategy, Content Direction, Brand Partnership',
      year: '2025',
    },
    approach: [
      "Leading the social strategy for this on pack promotion was an exciting challenge and amazing opportunity to work with Warner Bros. The campaign leveraged the popularity of the Superman Movie whilst staying true to the Shreddies brand TOV by positioning the product as the essential way to start your adventure. The strategy considered the marketing funnel. From awareness (pack photography) and consideration (organic gifting) to driving in-store purchase (come to store with me) and breaking down barriers to entry (how to enter).",
    ],
    // Single showcase section: three phones in one scrollable carousel
    // (center one plays, others pause), then a subtitle + split text/photos
    // block underneath.
    showcase: {
      phones: [
        {
          videoSrc: '/projects/superman-nestle/2.MP4',
          handle: '@shreddiesuki',
          caption:
            'Here’s how to enter our on pack promotion 🤓\n\n' +
            'SEE #SUPERMAN IN CINEMAS NOW\n' +
            '@dcukofficial @warnerbrosuk\n\n' +
            '© & TM DC © 2025 Warner Bros. Ent. All Rights Reserved.',
          label: 'Reel',
          sublabel: ': Breaking down barriers to entry is essential when promoting on pack promotions, this footage aimed to show the full consumer journey to maximise entries.',
        },
        {
          videoSrc: '/projects/superman-nestle/1.MP4',
          handle: '@shreddiesuki',
          caption:
            'What a heroic way to start our day #lookup\n\n' +
            'See #SUPERMAN IN CINEMAS TOMORROW\n\n' +
            '© & TM DC © 2025 Warner Bros. Ent. All Rights Reserved',
          label: 'Reel',
          sublabel: ': Shreddies were featured in the Warner Bros led PR pop ups across London train stations, giving away copies of The Daily Planet and boxes of Shreddies. I visited one of these pop ups to capture key footage to enhance Shreddies owned social campaign.',
        },
        {
          videoSrc: '/projects/superman-nestle/8.MP4',
          handle: '@shreddiesuki',
          caption:
            'Come to store with us to pick up a heroic limited edition pack of Shreddies 🦸\n\n' +
            'SEE #SUPERMAN IN CINEMAS July 11\n\n' +
            '© & TM DC © 2025 Warner Bros. Ent. All Rights Reserved',
          label: 'Reel',
          sublabel: ': This simple ‘Come to store with me’ shows the consumer the product on shelf, connecting social awareness to consideration to purchase in store.',
        },
      ],
      title: 'On Pack Promo Superman - Social Strategy',
      text:
        'The concepts for these assets were briefed in to Nestle’s in-house studio and approved with Warner Bros. They build on key themes from the Superman movie whilst being authentic to the Shreddies product.',
      posts: [
        { image: '/projects/superman-nestle/IMG_0236.jpg', handle: '@shreddiesuki', likes: '1.2k', comments: '84' },
        { image: '/projects/superman-nestle/IMG_0237.jpg', handle: '@shreddiesuki', likes: '980', comments: '52' },
        { image: '/projects/superman-nestle/IMG_0238.jpg', handle: '@shreddiesuki', likes: '760', comments: '41' },
        { image: '/projects/superman-nestle/IMG_0239.jpg', handle: '@shreddiesuki', likes: '1.1k', comments: '63' },
        { image: '/projects/superman-nestle/IMG_0240.jpg', handle: '@shreddiesuki', likes: '890', comments: '47' },
        { image: '/projects/superman-nestle/IMG_0241.jpg', handle: '@shreddiesuki', likes: '1.4k', comments: '92' },
      ],
    },
  },
  {
    slug: 'milkybar-tiktok-launch',
    image: '/projects/milkybar-tiktok-launch/Milkybarthumbnail.jpg',
    category: '',
    title: 'Milkybar TikTok Launch',
    description:
      'I launched the Milkybar TikTok channel, generating 800k relevant engagements in the first 2 weeks. I did this through choosing trending sounds and moments that felt authentic to the Milkybar TOV and engaging with the community we already had on the platform by commenting on UGC.',
    approach: [
      'I launched the Milkybar TikTok channel, generating 800k relevant engagements in the first 2 weeks. I did this through choosing trending sounds and moments that felt authentic to the Milkybar TOV and engaging with the community we already had on the platform by commenting on UGC.',
    ],
    // All three TikToks grouped in one scrollable phone carousel — no
    // per-video copy since none has been written for these yet. headingPrefix
    // / intro override PhoneShowcase's generic defaults with Milkybar-
    // specific copy, without touching what Superman's showcase shows.
    showcase: {
      headingPrefix: 'Milkybar TikTok channel ',
      intro:
        '',
      phones: [
        { videoSrc: '/projects/milkybar-tiktok-launch/milkybar1.mp4' },
        { videoSrc: '/projects/milkybar-tiktok-launch/milkybar2.mp4' },
        { videoSrc: '/projects/milkybar-tiktok-launch/milkybar3.mp4' },
      ],
    },
  },
  {
    slug: 'gold-campaign',
    image: '/projects/gold-campaign/Goldthumbnail.jpg',
    category: '',
    title: 'GOLD Campaign × Jason Fox',
    description:
      'A Confectionery brand campaign with Jason Fox that delivered standout reach across social media.',
    approach: [
      "I co-led the social aspect of this campaign for Nestlé Confectionery's Golden collection of caramel flavoured versions of Nestlé favourites. This involved working with COW agency to capture social first content and approve social cutdowns.",
      "COW's 'The Golden Handler' campaign saw celebrity Jason Fox escorting the Nestlé Golden Collection in an armoured van across London and delivering to an ASDA supermarket. We designed a social campaign to complement the agency PR and maximise awareness across all the confectionery channels.",
      "Seeing this campaign go from concept to execution was an incredible experience, as was meeting Jason Fox to capture our 'behind the scenes' footage.",
    ],
    // Raw BTS footage/stills shown as a cinematic full-bleed gallery rather
    // than the phone mockup used elsewhere — see BehindTheScenes.jsx.
    behindTheScenes: {
      videos: [
        '/projects/gold-campaign/gold-bts1.mp4',
        '/projects/gold-campaign/gold-bts2.mov',
      ],
      photos: [
        '/projects/gold-campaign/IMG_0240.jpg',
        '/projects/gold-campaign/IMG_0243.jpg',
      ],
    },
  },
  {
    slug: 'tiktoks-reels-photography',
    image: '/projects/tiktoks-reels-photography/photography4.png',
    category: 'Photography & Video',
    title: 'Reels, Photography & TikToks',
    description: '',
    // Bespoke editorial layout (full-bleed media + large broken-line type),
    // inspired by photographer-portfolio sites — see EditorialCaseStudy.jsx.
    // Order matches the order sections actually appear on the page below:
    // Reels, then Photography, then TikToks.
    editorial: {
      headingLines: ['Reels,', 'Photography &', 'TikToks'],
      italicLineIndex: 1,
      intro:
        'A look behind the camera at the content that actually fills the feed: the reels, the stills shot to support them, and the TikToks.',
      // Note: copy was also supplied for a "Reel9" (McDonald's Aero McFlurry
      // trip), but there's no Reel9 video file in the assets folder yet —
      // add it here once that clip is dropped in.
      reels: [
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel1.mov',
          copy:
            "A galentine's consumption occasion was brought to life with this fun reel to inspire consumers to use Aero in their own galentine's celebration.",
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel2.MP4',
          copy:
            'This reel was shot from one POV to maximise the feeling of simplicity. ASMR sounds were considered whilst filming to give the clips more versatility to be used in different ways (ASMR or with trending sound).',
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel3.MP4',
          copy:
            'To foster the strong community following on Instagram, we asked which recipe they love to bake the most using Milkybar. Based on the most popular answer (raspberry blondie) I put together the recipe, baked it and filmed the process. The recipe is also available for consumers on the website, which means we could link from social media and drive website traffic.',
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel4.MP4',
          copy:
            'This voiceover video was a makeup tutorial showing how to apply the products whilst the voiceover gives details of the website shop offer, encouraging consumers to add more products to their basket.',
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel5.MP4',
          copy:
            'Shreddies were featured in the Warner Bros led PR pop ups across London train stations, giving away copies of The Daily Planet and boxes of Shreddies. I visited one of these pop ups to capture key footage to enhance Shreddies owned social campaign.',
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel6.MOV',
          copy:
            'I wanted to create an aesthetic consumption moment that felt aspirational. I used natural afternoon sunlight and selected props to give a curated feel.',
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel7.MP4',
          copy:
            "This talking head video is a 'chatting to a friend on FaceTime' style reel that talks directly to consumer to inform them of an upcoming offer. It directed consumers to an offer on the website and encouraged them to shop.",
        },
        {
          videoSrc: '/projects/tiktoks-reels-photography/Reel8.MP4',
          copy:
            'Smarties brand values are centred around fun and sustainability. This recycling craft tapped into both of those, I added extra value to the content by inviting Staedtler to get involved. They sent product for me to feature in the reel and we posted as a collaboration, mutually benefiting our reach and adding value to both our consumer bases.',
        },
      ],
      blocks: [
        {
          type: 'text',
          heading: 'On set',
          body:
            'Directing talent, framing the shot, and making sure every piece of content earns its place on the calendar before a single take is filmed.',
        },
      ],
      tiktoks: [
        '/projects/tiktoks-reels-photography/tiktok1.MP4',
        '/projects/tiktoks-reels-photography/tiktok2.MP4',
        '/projects/tiktoks-reels-photography/tiktok3.MP4',
      ],
      // Hover/tap each photo to flip it and reveal the shoot notes on the back.
      photos: [
        {
          src: '/projects/tiktoks-reels-photography/photography1.png',
          caption:
            'This was a simple flat lay was taken to promote a WIGIG (When it’s gone it’s gone) product for social and was also selected for the press release.',
        },
        {
          src: '/projects/tiktoks-reels-photography/photography2.png',
          caption:
            'Taken as part of a seasonal shoot, this showcased the product pack with neutral staging.',
        },
        {
          src: '/projects/tiktoks-reels-photography/photography3.png',
          caption:
            'I made this bark in my kitchen at home and took it to Nestlé’s studio to shoot for a crisp lighting set up.',
        },
        {
          src: '/projects/tiktoks-reels-photography/photography4.png',
          caption:
            'This was shot as part of a wider confectionery ‘Jubilee’ photoshoot, placing Nestlé’s products in the occasion. I wanted this one to give a ‘street party’ atmosphere.',
        },
        {
          src: '/projects/tiktoks-reels-photography/photography5.png',
          caption:
            'This was shot as part of a wider confectionery ‘Jubilee’ photoshoot, placing Nestlé’s products in the occasion.',
        },
        {
          src: '/projects/tiktoks-reels-photography/photography6.png',
          caption:
            'This photo was conceptualised with Nestlé brand partner Lactalis and shot in my living room with an iPhone.',
        },
      ],
    },
  },
];
