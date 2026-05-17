// Brand case-study content for the /brands-walkthrough modal.
// All copy is grounded in the brand-kit .md/.pdf files in
// /Users/saurabhkaushik/Downloads/Brands/ARTA-BRANDS/. No founding stories
// were invented — only positioning, audience, voice, and product details that
// appear in the source kits are claimed as fact.

export type CaseStudy = {
  brand: string;
  category: string;
  promise: string;        // one-line brand promise from kit
  heroImage: string;      // absolute path under /public to the hero render
  paragraphs: Paragraph[]; // ordered body content
  factsheet: { label: string; value: string }[]; // sidebar / footer chips
};

type Paragraph =
  | { type: "lead"; text: string }
  | { type: "body"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "heading"; text: string };

export const CASE_STUDIES: Record<string, CaseStudy> = {
  Arta: {
    brand: "Arta",
    category: "The studio",
    promise: "The operating system behind modern brands.",
    heroImage: "/video-pilot/01_arta_hq.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "Most brand-building services are fragmented across ten vendors — design here, supply chain there, performance marketing somewhere else. Arta combines design, product development, commerce infrastructure, marketing, sales channels, and growth into a single ecosystem. The brands you walked through were all built inside it.",
      },
      {
        type: "heading",
        text: "Two arms, one system",
      },
      {
        type: "body",
        text:
          "Arta operates two verticals. Arta SaaS gives existing brand teams AI-powered operational tools — daily operations, marketing execution, performance analytics, inventory planning, workflow automation, content systems. Arta Brand Infrastructure builds brands from scratch for founders, creators, manufacturers, and investors. You bring the idea; we build the system.",
      },
      {
        type: "pullquote",
        text: "We don't replace people. We make people 5× more productive.",
      },
      {
        type: "body",
        text:
          "Our position isn't agency, isn't SaaS, isn't consulting. It's all three, deliberately combined, because the modern brand needs technology plus execution plus infrastructure to scale. Isolated services produce isolated outcomes. Operating systems compound.",
      },
      {
        type: "heading",
        text: "What we build for",
      },
      {
        type: "body",
        text:
          "Investors looking for execution partners. Influencers and creators monetizing audiences through owned brands. Manufacturers without brands. Founders without operational clarity. D2C brands struggling with automation. We turn chaos into structure, ideas into execution, operations into automation, and individuals into scalable brands.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Brand infrastructure" },
      { label: "Location", value: "India" },
      { label: "Stack", value: "SaaS + Brands 360 + Dropship" },
    ],
  },

  AYRSMELL: {
    brand: "AYRSMELL",
    category: "Modern lifestyle fragrance",
    promise: "Smell the moment.",
    heroImage: "/video-pilot/03_ayrsmell_room.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "India's twenties have moved on from mass-deodorant chemistry and aging niche perfumeries. They want a fragrance that fits the way they actually live — late nights, airport queues, café mornings, dressed-down work — and they want it at a price that lets them wear it daily, not save it for weddings.",
      },
      {
        type: "heading",
        text: "The positioning",
      },
      {
        type: "body",
        text:
          "AYRSMELL sits in a deliberate gap: more interesting than a deodorant, more accessible than a niche perfume house. The DNA is oud, amber, and musk — clean but deep, trendy but not traditional. Inspired by Dubai malls, earthy luxury, and the warm air of a city at night.",
      },
      {
        type: "pullquote",
        text:
          "Fragrance is a personal atmosphere. You don't wear it for others. Others feel it because you do.",
      },
      {
        type: "heading",
        text: "Who it's for",
      },
      {
        type: "body",
        text:
          "Rehan Sheikh, 23, Mumbai. Final-year college or early-career professional. Globally influenced, sensory-driven, confident but understated. Night-leaning lifestyle. Aesthetic matters more than loud luxury. Discovers brands on Instagram, buys on Amazon, Noon, and brand sites. Wears AYRSMELL before nights out, on travel days, and at home as a confidence ritual.",
      },
      {
        type: "heading",
        text: "The feel",
      },
      {
        type: "body",
        text:
          "Warm air. Night lights. Calm confidence. Quiet attraction. The scents are designed to shape confidence, create memory, and change posture, walk, and energy. The brand voice avoids being mass-market loud or niche-house pretentious — somewhere modern, calm, and sensory.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Lifestyle fragrance" },
      { label: "Audience", value: "Unisex, 20s, urban" },
      { label: "Segment", value: "Affordable luxury" },
      { label: "DNA", value: "Oud · Amber · Musk" },
    ],
  },

  "Bharat Yug": {
    brand: "Bharat Yug",
    category: "Divine & spiritual jewellery",
    promise: "Rooted in dharma. Living modern.",
    heroImage: "/video-pilot/04_bharatyug_room.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "Devotional jewellery in India has long been stuck between two extremes: cheap temple-stall pieces that nobody wears outside a puja, and heavy traditional gold that's reserved for weddings. The everyday devout Hindu had no premium-feeling, daily-wear option that respected the meaning without being either flashy or flimsy.",
      },
      {
        type: "heading",
        text: "The sweet spot",
      },
      {
        type: "body",
        text:
          "Bharat Yug occupies the daily-wear devotional zone. Rudraksha mala bracelets, ॐ pendants, Shiv-themed pieces — designed to feel premium and meaningful, priced ₹399–₹2,999 so they work for mass-market India and the diaspora alike. Jewellery you can wear to office, on flights, into temples, and during family dinners without changing.",
      },
      {
        type: "pullquote",
        text: "Not fashion. Not superstition. Faith.",
      },
      {
        type: "heading",
        text: "Who buys it",
      },
      {
        type: "body",
        text:
          "Rahul Mehta, 34, Surat. Urban Hindu balancing tradition with a contemporary lifestyle. Believes in God, follows key rituals, engages with faith mostly through digital content and occasional temple visits. Prefers subtle, dignified expressions of devotion — modern, clean, trustworthy. Family-oriented, practical with money, uses UPI daily, trusts legacy Indian brands, plans regular religious and family trips.",
      },
      {
        type: "heading",
        text: "The voice",
      },
      {
        type: "body",
        text:
          "Respectful, calm, rooted. Never preachy, never meme-ish. Language stays mostly English with 20% Hindi where the meaning carries — bhakti, raksha, shakti, shiv. The visual world is warm candlelight, marigolds, diyas, hands holding the product in everyday ritual — devotion in daily life, not staged temple photography.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Spiritual jewellery" },
      { label: "Audience", value: "Urban Hindu, 25–45" },
      { label: "Price band", value: "₹399 – ₹2,999" },
      { label: "Voice", value: "80% English · 20% Hindi" },
    ],
  },

  AYANALIFE: {
    brand: "AYANALIFE",
    category: "Faith-inspired jewellery",
    promise: "Faith, made wearable.",
    heroImage: "/video-pilot/05_ayanalife_room.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "Modern Muslim consumers — men and women in their late twenties to early forties — are tired of two options: gendered religious accessories that feel either preachy or dated, or generic minimalist jewellery that strips meaning out entirely. AYANALIFE is the calm middle: premium, intentional, designed to ground you without announcing anything.",
      },
      {
        type: "heading",
        text: "The brand's discipline",
      },
      {
        type: "body",
        text:
          "AYANALIFE is not political, not preachy, not loudly religious, not gender-segregated. It is calm, respectful, minimal, modern, deeply meaningful. Pieces are designed to be worn daily as a quiet reminder rather than a public statement — gifted at Eid, Nikah, and personal milestones.",
      },
      {
        type: "pullquote",
        text: "Feels calm, premium, and intentional — faith without noise.",
      },
      {
        type: "heading",
        text: "Who it's for",
      },
      {
        type: "body",
        text:
          "Ayaan Rahman, 32, Hyderabad — but really, modern Muslim professionals across Mumbai, Bengaluru, Delhi NCR, Dubai, Abu Dhabi, Riyadh, London, and the wider diaspora. Prefers subtle faith over display. Values calm, intention, inner peace. Dislikes loud branding and religious clichés. Finds peace in clean routines and quiet moments.",
      },
      {
        type: "heading",
        text: "The visual language",
      },
      {
        type: "body",
        text:
          "Deep forest green, warm cream, antique gold, charcoal black. Cormorant Garamond for headers — serifed and editorial. Cream-and-green packaging built around premium gifting. Photography that focuses on the wearer's hands, neckline, and quiet daily moments, not staged glamour.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Faith-inspired lifestyle jewellery" },
      { label: "Audience", value: "Modern Muslim, 25–40, India + GCC" },
      { label: "Segment", value: "Affordable–premium · gifting-friendly" },
    ],
  },

  "She Heals": {
    brand: "She Heals",
    category: "Women's hormonal wellness",
    promise: "Science-backed wellness, sized for a busy life.",
    heroImage: "/video-pilot/06_sheheals_room.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "Hormonal wellness for women is either over-medicalised or wrapped in expensive wellness theatre. Most products demand drastic lifestyle changes — strict diets, multi-step rituals, hours of self-care — that women working full days, raising families, or building careers simply can't sustain. She Heals is the in-between: science-backed solutions that fit into the schedule someone already has.",
      },
      {
        type: "heading",
        text: "Who it serves",
      },
      {
        type: "body",
        text:
          "Aarti Nair, 31, Bangalore. IT professional earning ₹90K/month. Long work hours, social weekends. Faces fatigue and irregular cycles from stress and inconsistent habits. Wants to feel energetic without overhauling her life. Trusts simple, science-backed solutions that respect her time and intelligence.",
      },
      {
        type: "pullquote",
        text:
          "Quietly powerful — never clinical, never theatrical.",
      },
      {
        type: "heading",
        text: "The aesthetic",
      },
      {
        type: "body",
        text:
          "Soft blush, muted rose, warm white. Playfair Display for headers. Outfit for body. Visuals stay gentle — botanicals, plants, soft-blush velvet, no hospital-clinical bottles and no over-styled wellness props. The room feels like a high-end women's wellness studio, not a pharmacy and not a spa.",
      },
      {
        type: "heading",
        text: "What we built around her",
      },
      {
        type: "body",
        text:
          "A product line that takes the friction out — formulations that work in the background of a normal day, packaging that looks at home on her bedside table, language that treats her like a competent adult rather than someone to be fixed. The promise: hormonal balance, energy, and calm — without rebuilding your life around it.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Hormonal wellness" },
      { label: "Audience", value: "Urban professional women, 25–40" },
      { label: "Tone", value: "Science-backed · gentle · respectful" },
    ],
  },

  "Bodhi Life": {
    brand: "Bodhi Life",
    category: "Senior living, reimagined",
    promise: "Your new chapter awaits.",
    heroImage: "/video-pilot/07_bodhilife_room.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "Senior living in India is overwhelmingly framed as care — beige interiors, medical aesthetics, the language of decline. But India's active over-60s are increasingly people who travel, take classes, garden, do yoga, and refuse to be treated as patients. Bodhi Life was built for them.",
      },
      {
        type: "heading",
        text: "The three pillars",
      },
      {
        type: "body",
        text:
          "Vibrant community. Holistic wellness. Trusted care. The order matters. Community is named first because that's what active older adults seek when they choose a senior-living brand — friendship, shared activities, somewhere to belong. Wellness sits second; care, while professional, is positioned third because it's the safety net, not the headline.",
      },
      {
        type: "pullquote",
        text: "Where friendships grow and spirits thrive.",
      },
      {
        type: "heading",
        text: "Who it's designed for",
      },
      {
        type: "body",
        text:
          "Meera Kapoor, 65. Former architect, now enjoys gardening, yoga, and travel. Believes in staying active and independent. Values quality and aesthetics — dislikes anything that feels medical. Seeks products and spaces that simplify daily life without compromising beauty or dignity.",
      },
      {
        type: "heading",
        text: "The visual world",
      },
      {
        type: "body",
        text:
          "Warm beige, sage green, copper, soft peach. The bodhi-leaf symbol carried across uniforms, mugs, yoga mats, and a welcome brochure that opens with \"Your New Chapter Awaits\" instead of a list of services. Every collateral piece reads like a boutique hospitality brand — because that's how active seniors choose where to live.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Senior living" },
      { label: "Audience", value: "Active adults 60+" },
      { label: "Pillars", value: "Community · Wellness · Care" },
    ],
  },

  Kissomatcha: {
    brand: "Kissomatcha",
    category: "Gen-Z matcha",
    promise: "Calm success, not burnout.",
    heroImage: "/video-pilot/08_kissomatcha_room.png",
    paragraphs: [
      {
        type: "lead",
        text:
          "Gen-Z India is breaking up with iced coffee. Not because coffee isn't loved, but because the anxiety, the heart-rate spike, the post-caffeine crash don't fit the calm, aesthetic, sustainable life this generation is trying to build. Kissomatcha is the cup-noodle-easy matcha brand designed for that switch.",
      },
      {
        type: "heading",
        text: "Who it's for",
      },
      {
        type: "body",
        text:
          "Ruju Mehta, 23, Ahmedabad. Lives on allowance plus internships plus side hustles. Spends on small daily luxuries — matcha lattes at ₹250–350, oats bowls, protein bars. Daily shopping happens on Zepto, Blinkit, Instamart. Style: baby tees, baggy cargos, oversized hoodies, neutral and pastel tones. Effortlessly put-together. Never loud.",
      },
      {
        type: "pullquote",
        text: "Kisso must feel as normal to order as coffee.",
      },
      {
        type: "heading",
        text: "The fit",
      },
      {
        type: "body",
        text:
          "Coffee alternative without anxiety. Aesthetic daily ritual. Feels soft, calm, and \"me-coded\" — a phrase Ruju and her friends actually use. Matcha matches her outfit energy: pastels, soft greens, intentional design. The product has to be Instagram-worthy without trying — convenience plus vibe.",
      },
      {
        type: "heading",
        text: "The brand discipline",
      },
      {
        type: "body",
        text:
          "Tokyo–Seoul café aesthetic, adapted for Indian Gen-Z. Pastel matcha-green wall as the hero, bamboo whisk and ceremonial bowl as visual signature, light-oak café fixtures. The brand voice doesn't preach health — it lets the ritual sell itself.",
      },
    ],
    factsheet: [
      { label: "Category", value: "Ceremonial-grade matcha · D2C" },
      { label: "Audience", value: "Gen-Z India, 18–25" },
      { label: "Channels", value: "Q-commerce + D2C + cafés" },
    ],
  },
};
