/**
 * DREAM CHASER WRITES — CENTRAL CONFIGURATION FILE
 * 
 * Multi-Disciplinary Digital Studio:
 * 1. Beta Reading & Literary Book Services (FIRST PILLAR)
 *    Extensive genre expertise across:
 *    Fiction & Nonfiction | Romance | Fantasy | Sci-Fi | Mystery |
 *    Thriller | Horror | Historical Fiction | Literary Fiction |
 *    YA | Contemporary | Crime | Adventure | Paranormal & More
 * 2. Website Design (Any CMS: WordPress, Shopify, Webflow, Squarespace, Wix, Custom)
 * 3. Social Media Management & Brand Growth
 */

import webShowcaseImg from '../assets/images/web_design_showcase_1791030888542.jpg';
import webEcommerceImg from '../assets/images/web_ecommerce_store_1791034602553.jpg';
import webBusinessBookingImg from '../assets/images/web_business_booking_1791034616111.jpg';
import webAuthorSpeakerImg from '../assets/images/web_author_speaker_1791034627278.jpg';
import webNonprofitPortalImg from '../assets/images/web_nonprofit_portal_1791034639977.jpg';
import webEditorialBlogImg from '../assets/images/web_editorial_blog_1791034650410.jpg';
import webEventSummitImg from '../assets/images/web_event_summit_1791034661270.jpg';
import socialShowcaseImg from '../assets/images/social_media_showcase_1791030901303.jpg';
import socialSkincareImg from '../assets/images/social_skincare_feed_1791035108268.jpg';
import socialAuthorBooktokImg from '../assets/images/social_author_booktok_1791035121074.jpg';
import socialCreativeStudioImg from '../assets/images/social_creative_studio_1791035134704.jpg';
import socialEventsDiningImg from '../assets/images/social_events_dining_1791035148611.jpg';
import betaShowcaseImg from '../assets/images/beta_reading_showcase_1791030913829.jpg';
import novelCoverImg from '../assets/images/portfolio_novel_hardcover_1790937181176.jpg';
import memoirCoverImg from '../assets/images/portfolio_memoir_book_1790937195004.jpg';
import poetryCoverImg from '../assets/images/portfolio_poetry_anthology_1790937205737.jpg';

export type ServicePillarId = 'book-services' | 'social-media' | 'web-design';

export interface TestimonialItem {
  id: string;
  client: string;
  role: string;
  pillar: ServicePillarId;
  pillarLabel: string;
  service: string;
  rating: number;
  highlightOutcome: string;
  quote: string;
  genreOrPlatform?: string;
}

export interface ServiceItem {
  id: string;
  pillarId: ServicePillarId;
  pillarLabel: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  tags: string[];
  idealFor: string;
  turnaroundTime: string;
  startingPrice: string;
  iconName: string;
}

export interface GenreExpertise {
  id: string;
  name: string;
  category: 'Fiction & Nonfiction' | 'Romance & Relationships' | 'Speculative & Sci-Fi' | 'Mystery & Suspense' | 'Dark & Gothic' | 'Contemporary & Life';
  tagline: string;
  subgenres: string[];
  focusAreas: string[];
  readerExpectations: string;
  commonPitfallsFlagged: string[];
  diagnosticReportHighlights: string[];
  sampleFeedbackSnippet: string;
  iconName: string;
}

export interface BookProject {
  id: string;
  title: string;
  genre: string;
  genreKey: string;
  wordCount: string;
  serviceType: 'Beta Reading Report' | 'Manuscript Critique' | 'Proofreading & Formatting';
  description: string;
  imageUrl: string;
  keyFeedbackProvided: string[];
  authorOutcome: string;
}

export interface WebProject {
  id: string;
  title: string;
  clientType: 'Business' | 'Ecommerce' | 'Author & Personal' | 'Nonprofit' | 'Event' | 'Blog';
  cmsPlatform: 'WordPress' | 'Shopify' | 'Webflow' | 'Squarespace' | 'Wix' | 'Custom / React';
  description: string;
  imageUrl: string;
  liveUrl?: string;
  tags: string[];
  featuredOutcome: string;
}

export interface SocialProject {
  id: string;
  title: string;
  niche: 'Lifestyle & Author Brand' | 'E-commerce & Retail' | 'Creative Agency' | 'Events & Culture';
  platforms: string[];
  description: string;
  imageUrl: string;
  tags: string[];
  featuredOutcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  pillar: 'all' | 'books' | 'web' | 'social';
}

export const SITE_CONFIG = {
  // 1. BRAND IDENTITY
  brandName: "DREAM CHASER WRITES",
  brandSubtitle: "Beta Reader, Website Designer & Social Media Specialist",
  tagline: "Expert Beta Reading Across All Genres, Modern Websites & Social Growth.",
  subHeadline: "Specialized beta reader reports for authors across Fiction & Nonfiction, Romance, Fantasy, Sci-Fi, Mystery, Thriller, Horror, Historical, YA, Crime, Adventure & Paranormal. Plus high-converting websites on any CMS and social media management.",

  // 2. CONTACT DETAILS & REAL WHATSAPP LINK
  contactEmail: "dreamchaserwrites@gmail.com",
  whatsappNumber: "+2349014111435",
  whatsappUrl: "https://wa.me/+2349014111435",
  whatsappDefaultMessage: "Hi! I found your portfolio and I would like to discuss a beta reading project or website with you.",
  businessLocation: "Available Worldwide (Remote Consultations)",
  businessHours: "Monday – Saturday: 9:00 AM – 7:00 PM (Quick Turnaround)",

  // 3. STATS
  stats: [
    { num: "50+", label: "Projects Completed" },
    { num: "100%", label: "Client Satisfaction" },
    { num: "15+ Genres", label: "Beta Reading Specialization" },
    { num: "24h", label: "Response Time" },
  ],

  // 4. TICKER CAPABILITIES
  tickerItems: [
    "Beta Reading Across All Genres",
    "Detailed Reader Diagnostic Reports",
    "Romance & Romantasy Critiques",
    "Fantasy World-Building Audits",
    "Sci-Fi & Speculative Logic Checks",
    "Mystery Fair-Play Clue Reviews",
    "Thriller Ticking-Clock Pacing",
    "Horror Atmosphere & Dread Analysis",
    "Historical Fiction Anachronism Checks",
    "YA Authentic Voice & High Urgency",
    "Contemporary & Family Dynamics",
    "Crime & Procedural Realism",
    "Adventure Kinetic Action Sequences",
    "Paranormal Lore Consistency",
    "Nonfiction Argument Clarity & Memoirs",
    "Book Formatting & Interior Typesetting",
    "Website Design (Any CMS)",
    "WordPress · Shopify · Webflow · Squarespace · Wix",
    "Social Media Management"
  ],

  // 5. OFFICIAL SOCIAL MEDIA CHANNELS
  socialLinks: {
    facebook: "https://www.facebook.com/Dreamchaserwrites?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/dream_chase_write/",
    tiktok: "https://www.tiktok.com/@dreamchaserwrites",
  },

  // 6. THE THREE SERVICE PILLARS (Ordered as requested)
  servicePillars: [
    {
      id: 'book-services' as ServicePillarId,
      title: "1. BETA READING & BOOK SERVICE",
      subtitle: "Extensive genre-specialized reader reports, developmental feedback & publishing readiness",
      description: "Detailed chapter-by-chapter beta reading assessments across 15+ genres: Fiction & Nonfiction, Romance, Fantasy, Sci-Fi, Mystery, Thriller, Horror, Historical, Literary, YA, Contemporary, Crime, Adventure, Paranormal & more.",
      accent: "from-amber-600 to-amber-700",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/25",
    },
    {
      id: 'social-media' as ServicePillarId,
      title: "2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH",
      subtitle: "Cohesive brand presence, captivating aesthetics & organic audience growth",
      description: "Comprehensive content curation, eye-catching feed design, engaging copywriting, and scheduling across Instagram, TikTok, Facebook, and LinkedIn.",
      accent: "from-pink-600 to-rose-700",
      badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/25",
    },
    {
      id: 'web-design' as ServicePillarId,
      title: "3. WEBSITE DESIGN ON ANY CMS PLATFORM",
      subtitle: "Custom websites crafted for high conversion on your preferred platform",
      description: "From author websites and personal portfolios to high-volume e-commerce stores, I build fast, mobile-friendly websites across WordPress, Shopify, Webflow, Squarespace, Wix, or custom frameworks.",
      accent: "from-blue-600 to-indigo-700",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    }
  ],

  // 7. EXTENSIVE BETA READING GENRE SPECIALIZATIONS (Requested explicitly by user)
  betaReadingGenres: [
    {
      id: "fiction-nonfiction",
      name: "Fiction & Nonfiction",
      category: "Fiction & Nonfiction" as const,
      tagline: "Narrative clarity, structural cohesion, factual integrity, and reader engagement across literary storytelling and real-world works.",
      subgenres: ["General Narrative Fiction", "Memoirs", "Creative Nonfiction", "Self-Help & Personal Growth", "Biographies & True Accounts", "Essays & Editorial Collections"],
      focusAreas: [
        "Narrative arc & pacing in both memoir and fiction",
        "Authorial authority & authentic, distinctive voice",
        "Clarity and logical progression of thematic arguments",
        "Balancing personal vulnerability with actionable reader takeaways",
        "Emotional resonance and relatable takeaways"
      ],
      readerExpectations: "Readers demand authentic voice, clear progression, actionable or poignant insights, and flawless internal logic that keeps them invested from page one to the conclusion.",
      commonPitfallsFlagged: [
        "Pacing drags during overly expository or dry informational sections",
        "Preachy or patronizing tone in self-help and advice passages",
        "Disorienting chronological leaps that confuse the reader",
        "Unclear author thesis or lack of emotional vulnerability in memoirs"
      ],
      diagnosticReportHighlights: [
        "Chapter-by-chapter takeaway and engagement ratings",
        "Author voice & authority evaluation",
        "Narrative flow and transitions critique",
        "Reader comprehension and retention audit"
      ],
      sampleFeedbackSnippet: "“The transition between your personal hardship in Chapter 4 and the broader sociological takeaways in Chapter 5 feels slightly abrupt. We recommend framing Chapter 4's climax with an introspective bridge to ground the reader's emotions before pivoting to analytical advice.”",
      iconName: "BookOpen"
    },
    {
      id: "romance",
      name: "Romance",
      category: "Romance & Relationships" as const,
      tagline: "Trope fulfillment, palpable romantic chemistry, emotional vulnerability, and satisfying HEA/HFN payoffs.",
      subgenres: ["Enemies-to-Lovers", "Slow Burn", "Romantasy", "Contemporary Romance", "Dark Romance", "Second Chance", "Romantic Suspense", "Fake Dating", "Friends-to-Lovers"],
      focusAreas: [
        "Dual-POV emotional balance and distinct protagonist voices",
        "Electric romantic tension, banter, and physical/emotional chemistry",
        "Organic internal conflicts vs. artificial miscommunication tropes",
        "Pacing of physical intimacy and emotional vulnerability",
        "Earning the third-act breakup and grand gesture / reunion"
      ],
      readerExpectations: "A deeply satisfying emotional journey with earned romantic vulnerability, palpable mutual desire, and an uncompromised Happy Ever After (HEA) or Happy For Now (HFN).",
      commonPitfallsFlagged: [
        "Insta-love without demonstrated emotional connection or shared trials",
        "Third-act breakups based solely on easily cleared withholdings",
        "Flat love interests whose only personality trait is being attractive",
        "Rushed resolutions where deep relational wounds are instantly forgotten"
      ],
      diagnosticReportHighlights: [
        "Romantic chemistry index per interaction chapter",
        "Tension curve & emotional stakes mapping",
        "Trope execution & genre satisfaction score",
        "Third-act breakup logic and resolution audit"
      ],
      sampleFeedbackSnippet: "“The banter between Julian and Clara in Chapter 14 crackles with authenticity. However, the third-act betrayal in Chapter 22 feels unearned because Julian never explicitly promised the secret Clara accuses him of withholding. Tightening Julian's active omission in Chapter 11 will make her heartbreak feel completely justified.”",
      iconName: "Heart"
    },
    {
      id: "fantasy",
      name: "Fantasy",
      category: "Speculative & Sci-Fi" as const,
      tagline: "Immersive world-building, internally consistent magic systems, high-stakes quests, and mythic scale.",
      subgenres: ["High / Epic Fantasy", "Low Fantasy", "Urban Fantasy", "Grimdark", "Sword & Sorcery", "Mythological Retellings", "Cosy Fantasy", "Portal Fantasy"],
      focusAreas: [
        "Magic system rules, costs, physical tolls, and limitations",
        "World-building lore delivery woven organically without info-dumps",
        "Power balance and stakes escalation (avoiding unearned god-modes)",
        "Geographical travel times, cultural consistency, and faction politics",
        "Active protagonist agency vs. passive prophecy puppets"
      ],
      readerExpectations: "A rich, transportive setting with clear stakes, sensory immersion, and magical consequences that feel earned rather than convenient.",
      commonPitfallsFlagged: [
        "Prologue lore-dumps that stall the inciting incident",
        "Convenient deus ex machina spells introduced at the last second",
        "Inconsistent travel times and geography across fantasy maps",
        "Passive protagonists who are merely dragged along by mentors or prophecies"
      ],
      diagnosticReportHighlights: [
        "Magic logic & hard/soft limitations audit",
        "World lore terminology glossary check",
        "Travel, geography, and timeline continuity review",
        "Protagonist agency and power scaling evaluation"
      ],
      sampleFeedbackSnippet: "“The magic system's reliance on soul-threads in Chapter 6 is brilliantly original. However, in Chapter 19, Morven performs a multi-thread binding without experiencing the exhaustion established earlier. Establishing a severe physical toll in that fight will heighten reader suspense.”",
      iconName: "Sparkles"
    },
    {
      id: "scifi",
      name: "Sci-Fi",
      category: "Speculative & Sci-Fi" as const,
      tagline: "Speculative technological logic, futuristic socio-political dynamics, philosophical depth, and gripping pacing.",
      subgenres: ["Hard Sci-Fi", "Space Opera", "Cyberpunk", "Dystopian & Post-Apocalyptic", "Time Travel", "Military Sci-Fi", "First Contact", "Solarpunk", "Biopunk"],
      focusAreas: [
        "Scientific and technological plausibility within the story's established rules",
        "Extrapolation of future societies, corporate power, and civil systems",
        "AI, synthetic consciousness, and alien psychology authenticity",
        "Dialogue that feels naturally futuristic without incomprehensible jargon",
        "Ethical and philosophical questions grounded in human emotion"
      ],
      readerExpectations: "A thought-provoking vision of the future with consistent speculative rules, immersive tech integration, and high human or planetary stakes.",
      commonPitfallsFlagged: [
        "Overly dense technobabble that breaks reading flow and alienates readers",
        "Scientific contradictions in zero-gravity mechanics or FTL travel",
        "Robotic dialogue that lacks human soul or emotional vulnerability",
        "Predictable, generic totalitarian regimes without nuance"
      ],
      diagnosticReportHighlights: [
        "Speculative technology coherence review",
        "Timeline causality audit (for time travel/multiverse narratives)",
        "Futuristic socio-political credibility check",
        "Scientific plausibility vs. narrative pace balance"
      ],
      sampleFeedbackSnippet: "“The orbital mechanics described during the docking sequence in Chapter 8 are wonderfully tense. Be careful with the inertial dampeners in Chapter 12; the crew experiences atmospheric friction inside the craft that contradicts the zero-g inertia previously outlined.”",
      iconName: "Globe"
    },
    {
      id: "mystery",
      name: "Mystery",
      category: "Mystery & Suspense" as const,
      tagline: "Fair-play clue trails, deceptive red herrings, tight detective logic, and mind-bending reveals.",
      subgenres: ["Traditional Whodunits", "Cozy Mysteries", "Police Procedurals", "Locked-Room Mysteries", "Historical Mystery", "Hardboiled / Noir Detective"],
      focusAreas: [
        "Fair-play clue matrix: ensuring readers have all puzzle pieces before the reveal",
        "Plausible red herrings that genuinely mislead without feeling cheap",
        "Detective or amateur sleuth methodology, competence, and observational skill",
        "Suspect motive distribution and alibi verifications",
        "Climactic reveal scene: satisfying pacing and evidence tie-in"
      ],
      readerExpectations: "Readers must feel challenged but never cheated; every clue required to solve the puzzle must be present in plain sight before the detective reveals all.",
      commonPitfallsFlagged: [
        "Withholding critical evidence from the reader until the final chapter",
        "Culprit reveal that feels random or unestablished in prior chapters",
        "Suspect interviews that blur together without distinct voices or motives",
        "Dull investigative lulls where the detective makes no proactive deductions"
      ],
      diagnosticReportHighlights: [
        "Fair-play clue timeline & distribution matrix",
        "Suspect motive, alibi, and timeline verification grid",
        "Red herring effectiveness & misdirection audit",
        "Climactic confrontation and reveal satisfying quotient"
      ],
      sampleFeedbackSnippet: "“The poisoned chalice clue on page 142 is cleverly planted. However, Inspector Reid's deduction regarding the missing pocket watch in Chapter 18 relies on information he never witnessed. Have Constable Vance mention the broken chain during their initial walk-through in Chapter 5.”",
      iconName: "Compass"
    },
    {
      id: "thriller",
      name: "Thriller",
      category: "Mystery & Suspense" as const,
      tagline: "Relentless ticking-clock momentum, escalating psychological stakes, visceral dread, and jaw-dropping reversals.",
      subgenres: ["Psychological Thrillers", "Legal & Courtroom Thrillers", "Medical Thrillers", "Espionage & Spy Thrillers", "Domestic Suspense", "Techno-Thrillers", "Survival Thrillers"],
      focusAreas: [
        "Ticking-clock pressure and relentless forward narrative momentum",
        "Credible, menacing antagonistic forces who actively push protagonists to the brink",
        "Middle-act pacing diagnostics (eliminating static scenes or repetitive panic)",
        "Psychological reliability of narrator vs. reality",
        "High-stakes reversals and plot twists that recontextualize earlier events"
      ],
      readerExpectations: "Edge-of-the-seat immersion, constant forward momentum, high-stakes peril, and an unpredictable yet earned climax.",
      commonPitfallsFlagged: [
        "Middle-act sag with too much domestic reflection during active mortal danger",
        "Protagonists making obviously foolish decisions solely to advance the plot",
        "Anti-climactic villain confrontations that lack danger or emotional consequence",
        "Twists that contradict established character psychology"
      ],
      diagnosticReportHighlights: [
        "Tension escalation & pacing momentum graph",
        "Threat capability and antagonist pressure audit",
        "Protagonist vulnerability & stakes curve",
        "Twist shock-value vs. internal logic analysis"
      ],
      sampleFeedbackSnippet: "“The psychological tension in Chapters 1–10 is suffocating in the best way. However, Chapters 14–17 slow down significantly while Maya sits in the safehouse researching microfilms. We recommend having the stalker leave a physical token outside the window to reignite the ticking clock.”",
      iconName: "Shield"
    },
    {
      id: "horror",
      name: "Horror",
      category: "Dark & Gothic" as const,
      tagline: "Atmospheric dread, visceral sensory horror, psychological unraveling, and relentless terror.",
      subgenres: ["Supernatural Horror", "Psychological Horror", "Cosmic / Lovecraftian", "Body Horror", "Folk Horror", "Haunted House / Gothic", "Slasher", "Paranormal Horror"],
      focusAreas: [
        "Atmosphere & setting functioning as an active antagonistic force",
        "Slow-burn dread building vs. jump scares and visceral shocks",
        "Sensory prose (sound, smell, temperature, claustrophobia)",
        "Thematic resonance of the monster/threat mirroring internal character trauma",
        "Protagonist survival instincts, physical fatigue, and psychological descent"
      ],
      readerExpectations: "Genuine chills, lingering dread that stays with the reader after closing the book, and respect for the psychological vulnerability of the characters.",
      commonPitfallsFlagged: [
        "Showing the monster/threat too early and stripping away the fear of the unknown",
        "Characters acting unrealistically nonchalant or curious in terrifying circumstances",
        "Gratuitous gore without emotional stakes or thematic weight",
        "Repetitive jump scares that numb the reader rather than heighten dread"
      ],
      diagnosticReportHighlights: [
        "Dread-to-terror atmospheric pacing ratio",
        "Sensory horror immersion review",
        "Thematic weight of the uncanny & monster design",
        "Character survival logic and panic authenticity check"
      ],
      sampleFeedbackSnippet: "“The creeping dampness and phantom footsteps in the nursery in Chapter 7 are terrifying. To amplify the fear in Chapter 15, delay the physical sighting of the hollow-eyed entity; let the auditory distortions and temperature drops do the heavy lifting first.”",
      iconName: "Skull"
    },
    {
      id: "historical-fiction",
      name: "Historical Fiction",
      category: "Fiction & Nonfiction" as const,
      tagline: "Period authenticity, nuanced social customs, vibrant historical backdrops, and timeless human emotion.",
      subgenres: ["Regency & Victorian", "World War I & II", "Medieval & Renaissance", "Ancient Civilizations", "Gilded Age & Roaring Twenties", "Maritime & Colonial", "Historical Biographies"],
      focusAreas: [
        "Anachronism checks across vocabulary, technology, medicine, and social etiquette",
        "Organic period world immersion without reading like a textbook history dump",
        "Balancing real historical figures and timeline events with fictional character arcs",
        "Class, gender, and socio-economic realities of the specific time and place",
        "Universal emotional conflicts rooted in authentic historical constraints"
      ],
      readerExpectations: "Rich, vivid transport into a bygone era with authentic period vernacular, believable historical constraints, and compelling emotional stakes.",
      commonPitfallsFlagged: [
        "21st-century values or modern psychological buzzwords forced onto period characters",
        "Encyclopedic history info-dumps that halt narrative momentum",
        "Inaccurate material culture (e.g. zippers in Victorian England, tomatoes in ancient Rome)",
        "Historically inaccurate freedoms given to characters without societal friction"
      ],
      diagnosticReportHighlights: [
        "Anachronism detection audit (lexicon & material goods)",
        "Period dialogue cadence and social customs check",
        "Historical event timeline alignment matrix",
        "Sensory period immersion and world-texture review"
      ],
      sampleFeedbackSnippet: "“The atmospheric portrayal of 1880s London dockworkers is superb. However, Lady Beatrice's usage of the phrase 'give me some space' in Chapter 9 feels modern; replacing it with period-appropriate phrasing like 'I pray you, leave me to my thoughts' will preserve reader immersion.”",
      iconName: "Scroll"
    },
    {
      id: "literary-fiction",
      name: "Literary Fiction",
      category: "Contemporary & Life" as const,
      tagline: "Lyrical prose aesthetics, intricate character psychology, layered subtext, and poignant existential resonance.",
      subgenres: ["Contemporary Literary", "Magical Realism", "Philosophical Fiction", "Family Sagas", "Stream of Consciousness", "Autofiction", "Quiet Character Studies"],
      focusAreas: [
        "Prose rhythm, sentence-level cadence, and evocative figurative language",
        "Character interiority, unexpressed yearning, and moral ambiguity",
        "Thematic subtext and recurring symbolic motifs",
        "Quiet narrative progression where psychological shifts carry the weight of plot",
        "Poignant emotional catharsis that avoids unearned melodrama"
      ],
      readerExpectations: "Deeply insightful exploration of the human condition, memorable prose, profound thematic depth, and multi-dimensional characters.",
      commonPitfallsFlagged: [
        "Pretentious purple prose that obscures meaning and slows reading flow",
        "Complete absence of narrative progression, leaving the reader unanchored",
        "Melodramatic monologues that feel performative rather than earned",
        "Unresolved thematic threads that feel abandoned rather than intentionally ambiguous"
      ],
      diagnosticReportHighlights: [
        "Prose aesthetics and sentence cadence audit",
        "Character interiority & psychological consistency review",
        "Symbolism, motif, and thematic cohesion analysis",
        "Subtext efficacy and emotional payoff rating"
      ],
      sampleFeedbackSnippet: "“The recurring motif of receding tides mirroring Arthur's dementia in Chapters 3 and 11 is deeply moving. In Chapter 8, the introspective monologue extends for four pages without sensory grounding; anchor Arthur's thoughts to the texture of his grandfather's watch in his hands.”",
      iconName: "Feather"
    },
    {
      id: "ya",
      name: "YA (Young Adult)",
      category: "Contemporary & Life" as const,
      tagline: "Authentic teenage voice, intense emotional stakes, first-time experiences, and rapid-fire pacing.",
      subgenres: ["YA Contemporary", "YA Fantasy", "YA Dystopian", "YA Romance", "YA Thriller / Mystery", "Coming-of-Age", "High School / Academy"],
      focusAreas: [
        "Authentic adolescent voice and perspective (avoiding adult condescension)",
        "High emotional urgency where stakes feel world-ending to the teen protagonist",
        "Dynamic peer relationships, first loves, identity crises, and family friction",
        "Protagonist agency: teens actively driving the plot, not being rescued by parents",
        "Fast-paced chapter endings with compelling cliffhangers"
      ],
      readerExpectations: "Relatable teenage struggles, passionate emotional highs and lows, meaningful identity formation, and high-energy pacing.",
      commonPitfallsFlagged: [
        "Teen dialogue sounding like an adult trying too hard to sound 'hip' or dated slang",
        "Parents or mentors solving the core problem instead of the adolescent heroes",
        "Sluggish setup that takes 5 chapters before the inciting incident takes hold",
        "Underestimating the complexity and intelligence of teen readers"
      ],
      diagnosticReportHighlights: [
        "Adolescent voice authenticity score",
        "Emotional urgency & stakes audit",
        "Chapter hook retention and page-turn factor",
        "Teen protagonist agency and conflict resolution review"
      ],
      sampleFeedbackSnippet: "“Kira's snappy humor and vulnerability in Chapter 2 instantly win the reader over. Watch out for her internal monologue in Chapter 10 regarding college applications; it reads a bit formal for a sixteen-year-old. Shortening the syntax will match her natural voice.”",
      iconName: "Smile"
    },
    {
      id: "contemporary",
      name: "Contemporary",
      category: "Contemporary & Life" as const,
      tagline: "Relatable modern dilemmas, crisp authentic dialogue, workplace & family dynamics, and poignant emotional honesty.",
      subgenres: ["Women's Fiction", "Family Drama", "Contemporary Book-Club Fiction", "Workplace Satire & Ambition", "Slice-of-Life", "Found Family", "Small-Town Dramas"],
      focusAreas: [
        "Realistic interpersonal conflicts and communication breakdowns",
        "Relatable contemporary pressures (burnout, career ambition, aging parents, divorce)",
        "Naturalistic, sharp dialogue with subtext and distinct speaking cadences",
        "Organic character arcs where change comes through friction and reflection",
        "Balanced pacing that keeps everyday conflicts compelling and urgent"
      ],
      readerExpectations: "An honest mirror to modern life with situations, dialogue, and relationships that feel intimately real and emotionally cathartic.",
      commonPitfallsFlagged: [
        "Melodramatic problems that could easily be solved by a simple 30-second text message",
        "Passive scenes where characters discuss problems without making active choices",
        "One-dimensional secondary characters acting as mere plot devices",
        "Rushed emotional resolutions that don't reflect the complexity of real relationships"
      ],
      diagnosticReportHighlights: [
        "Dialogue naturalism & subtext score",
        "Interpersonal relationship matrix review",
        "Contemporary conflict plausibility audit",
        "Pacing and domestic tension curve analysis"
      ],
      sampleFeedbackSnippet: "“The banter between the three sisters at Sunday dinner in Chapter 6 is razor-sharp and deeply relatable. In Chapter 14, the friction between Hannah and her boss resolves too quickly with a polite email; let the tension linger over an in-person meeting to raise the workplace stakes.”",
      iconName: "Users"
    },
    {
      id: "crime",
      name: "Crime",
      category: "Mystery & Suspense" as const,
      tagline: "Heists, forensic investigations, underworld syndicates, gritty noir atmospheres, and moral dilemmas.",
      subgenres: ["Caper & Heist", "Mob & Organized Crime", "Forensic Procedurals", "Vigilante Justice", "True Crime Fiction", "Gritty Noir", "Prison & Courtroom Drama"],
      focusAreas: [
        "Procedural accuracy across law enforcement protocols, legal trials, and forensics",
        "Criminal motivation, underworld loyalty codes, and moral ambiguity",
        "Cat-and-mouse dynamic between law enforcement and perpetrators",
        "Gritty atmospheric texture (seedy dive bars, evidence lockers, crime scenes)",
        "High-stakes confrontations with physical and legal consequences"
      ],
      readerExpectations: "A high-stakes dive into the criminal underworld or law enforcement pursuit, with realistic tactics, moral complexity, and gripping confrontations.",
      commonPitfallsFlagged: [
        "Unrealistic police procedures (e.g. DNA returning in 10 minutes without legal warrants)",
        "Cartoonish mob bosses with no nuance or credible business motivation",
        "Stakes deflating immediately after the heist without escape complications",
        "Overly convenient slip-ups by master criminals that insult reader intelligence"
      ],
      diagnosticReportHighlights: [
        "Procedural plausibility and legal protocol audit",
        "Criminal-vs-investigator leverage tracker",
        "Heist & getaway timeline verification",
        "Gritty realism and atmospheric texture review"
      ],
      sampleFeedbackSnippet: "“The bank vault blueprint review in Chapter 11 is immaculate and thrilling. However, the detective interrogation in Chapter 15 breaks Miranda procedure in a way that would cause immediate trial dismissal. Tweak the questioning to be an off-the-record field interview to preserve realism.”",
      iconName: "Briefcase"
    },
    {
      id: "adventure",
      name: "Adventure",
      category: "Speculative & Sci-Fi" as const,
      tagline: "Exotic quests, survival against perilous wilderness, high-octane action sequences, and indomitable courage.",
      subgenres: ["Wilderness & Arctic Survival", "Lost Civilization Expeditions", "Treasure Hunts", "Maritime & Nautical Adventure", "Post-Disaster Treks", "Deep Jungle Quests"],
      focusAreas: [
        "Sensory environmental hazards (freezing cold, dehydration, predators, altitude)",
        "Dynamic kinetic action pacing with clear spatial choreography",
        "Gear, ammunition, and survival resource management that affects character choices",
        "Interpersonal friction within expedition groups under extreme physical duress",
        "Exhilarating payoffs at legendary discoveries or survival thresholds"
      ],
      readerExpectations: "Sweeping scope, palpable physical peril, breathtaking geographical obstacles, and an exhilarating sense of discovery.",
      commonPitfallsFlagged: [
        "Characters traversing deadly mountain passes or deserts with zero fatigue or hunger",
        "Action sequences that are spatially confusing or feel repetitive",
        "Convenient supplies appearing from nowhere when survival stakes are supposed to be dire",
        "Lack of awe and wonder during landmark discoveries"
      ],
      diagnosticReportHighlights: [
        "Kinetic action choreography clarity audit",
        "Survival resource & physiological fatigue tracking",
        "Environmental obstacle escalation map",
        "Climax adrenaline & emotional triumph rating"
      ],
      sampleFeedbackSnippet: "“The river rapid capsizing sequence in Chapter 13 is pulse-pounding and vividly described. In Chapter 16, make sure to show the consequence of losing the water filtration kit; having the party dehydrate while trekking the desert will make finding the ruined oasis in Chapter 18 a massive emotional triumph.”",
      iconName: "Compass"
    },
    {
      id: "paranormal",
      name: "Paranormal & More",
      category: "Dark & Gothic" as const,
      tagline: "Shifters, vampires, witches, occult curses, cryptids, and hidden supernatural worlds coexisting with reality.",
      subgenres: ["Paranormal Romance", "Urban Fantasy / Occult Detective", "Vampire & Werewolf Lore", "Ghost & Spirit Guides", "Witches & Covens", "Mythic Beasts & Cryptids", "Demons & Exorcisms"],
      focusAreas: [
        "Supernatural world-building rules and vulnerabilities (silver, salt, garlic, iron)",
        "Balance of mortal human fragility vs. immortal supernatural dominance",
        "Pack, clan, and coven hierarchy politics and territorial friction",
        "Bonding, mating bite, and supernatural link emotional tension",
        "The secrecy covenant and consequences of human world discovery"
      ],
      readerExpectations: "Enticing supernatural lore, atmospheric nocturnal world-building, high supernatural stakes, and magnetic mythical dynamics.",
      commonPitfallsFlagged: [
        "Inconsistent supernatural weaknesses (e.g. sunlight kills in Chapter 1 but ignored in Chapter 10)",
        "Overpowered supernatural creatures who face zero real physical or magical opposition",
        "Lack of consequences when normal human society stumbles onto the paranormal",
        "Generic vampire/werewolf tropes that lack a unique authorial spin"
      ],
      diagnosticReportHighlights: [
        "Supernatural lore rules & vulnerability consistency audit",
        "Coven/pack hierarchy & political dynamic review",
        "Human vs. immortal stakes balance check",
        "Bonding tension and lore originality rating"
      ],
      sampleFeedbackSnippet: "“The blood-coven hierarchy introduced in Chapter 5 is dark, alluring, and original. In Chapter 14, clarify why the elder vampires cannot detect Liam's scent when he sneaks into the crypt, given that Chapter 3 established they can smell blood from a mile away. Adding a scent-masking herb solves this smoothly.”",
      iconName: "Moon"
    }
  ] as GenreExpertise[],

  // 8. DETAILED SERVICES CATALOGUE (Segment 1: Beta Reading & Books FIRST)
  services: [
    // ── FIRST SEGMENT: BETA READING & BOOK SERVICES ──
    {
      id: "beta-reading-critique",
      pillarId: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      title: "Comprehensive Beta Reading & Reader Reports",
      shortDescription: "In-depth reader reactions, chapter diagnostics, plot hole identification, pacing analysis, and character consistency feedback across all 15+ genres.",
      fullDescription: "Get the objective, insightful feedback your manuscript needs before publication or querying. As an avid literary specialist, I read your draft with both an analytical mind and a genuine reader's heart, delivering a structured diagnostic report covering hook efficacy, pacing, character arcs, dialogue authenticity, and emotional payoff across Fiction, Nonfiction, Romance, Fantasy, Sci-Fi, Mystery, Thriller, Horror, Historical, Literary, YA, Contemporary, Crime, Adventure & Paranormal.",
      deliverables: [
        "Detailed multi-page Beta Reader Diagnostic Report tailored to your genre",
        "Chapter-by-chapter reader impressions & emotional engagement tracking",
        "Plot hole, continuity, and pacing bottleneck analysis",
        "Genre trope fulfillment and reader expectation audit",
        "Constructive suggestions to elevate reader immersion and revision roadmap"
      ],
      tags: ["All Genres", "Beta Reading", "Reader Report", "Pacing & Plot", "Trope Audit"],
      idealFor: "Authors with completed drafts seeking constructive reader feedback before final editing, agent querying, or self-publishing.",
      turnaroundTime: "5–10 days depending on word count",
      startingPrice: "Custom Quote",
      iconName: "BookOpen"
    },
    {
      id: "manuscript-developmental-critique",
      pillarId: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      title: "Manuscript Critique & Developmental Review",
      shortDescription: "High-level architectural examination of story structure, theme cohesion, world-building logic, and narrative voice resonance.",
      fullDescription: "A deeper literary examination that looks at the macro-elements of your storytelling. I analyze your three-act structure, protagonist motivation, tension escalation, subplot payoff, and emotional stakes, giving you a clear roadmap for your next revision across any genre.",
      deliverables: [
        "In-depth Story Architecture and World-Building Review",
        "Protagonist & Antagonist Motivation Analysis",
        "Pacing map identifying scene sag and tension drops",
        "1-on-1 discussion notes to brainstorm plot solutions"
      ],
      tags: ["Manuscript Critique", "Story Architecture", "Developmental Feedback", "World Building"],
      idealFor: "Authors looking for macro-level story feedback before sending to literary agents or publication.",
      turnaroundTime: "7–14 days",
      startingPrice: "Custom Quote",
      iconName: "FileCheck"
    },
    {
      id: "book-formatting-author-branding",
      pillarId: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      title: "Book Formatting, Interior Layout & Author Support",
      shortDescription: "Typesetting for print & Kindle, back-cover blurb copywriting, and author website integration for a professional book launch.",
      fullDescription: "Turn your raw document into a publication-ready book. I provide elegant interior formatting for paperback (Amazon KDP, IngramSpark) and reflowable EPUB for e-readers, write punchy sales blurbs that hook readers, and coordinate your book's digital launch.",
      deliverables: [
        "Print-ready interior PDF layout with running headers & chapter headings",
        "Kindle / EPUB reflowable digital e-book formatting",
        "High-converting back cover blurb and sales description",
        "Integration with author website or online book sales pages"
      ],
      tags: ["Interior Layout", "Amazon KDP", "EPUB", "Blurb Copywriting", "Author Launch"],
      idealFor: "Self-publishing authors getting ready to publish paperbacks and e-books on Amazon and wide retailers.",
      turnaroundTime: "4–7 days",
      startingPrice: "Custom Quote",
      iconName: "Feather"
    },

    // ── SECOND SEGMENT: SOCIAL MEDIA MANAGEMENT & BRAND GROWTH ──
    {
      id: "social-media-management",
      pillarId: 'social-media' as ServicePillarId,
      pillarLabel: "Social Media & Growth",
      title: "Full-Service Social Media Management",
      shortDescription: "Done-for-you content creation, scheduling, caption copywriting, and community engagement across Instagram, TikTok & Facebook.",
      fullDescription: "Stay consistent and grow your online presence without burning out. I handle social media strategy, custom graphic creation, short-form video concepting, engaging copywriting with strategic hashtags, and regular scheduling so your brand remains active and appealing.",
      deliverables: [
        "Monthly content calendar with planned posting schedules",
        "Custom branded graphics, carousels, and aesthetic reels/TikTok covers",
        "Engaging captions with targeted hashtag strategies",
        "Community interaction & monthly analytics review"
      ],
      tags: ["Instagram", "TikTok", "Facebook", "Content Calendar", "Copywriting"],
      idealFor: "Authors, small businesses, creators, and brands wanting consistent growth without the daily posting headache.",
      turnaroundTime: "Monthly retainer or project packages",
      startingPrice: "Custom Quote",
      iconName: "Share2"
    },
    {
      id: "brand-aesthetic-feed-design",
      pillarId: 'social-media' as ServicePillarId,
      pillarLabel: "Social Media & Growth",
      title: "Brand Visual Identity & Feed Curation",
      shortDescription: "A cohesive, luxurious visual aesthetic for your social profiles with editable Canva/Figma templates and highlight covers.",
      fullDescription: "First impressions matter. I design a signature aesthetic for your profiles featuring custom color palettes, story highlight icons, typography guidelines, and customizable template suites that make your feed instantly recognizable.",
      deliverables: [
        "Signature color palette & typography hierarchy",
        "9–12 cohesive grid post templates (editable in Canva)",
        "Custom story highlight icon set and profile banner",
        "Brand style guide for effortless future posting"
      ],
      tags: ["Feed Design", "Canva Templates", "Brand Guidelines", "Instagram Grid"],
      idealFor: "New brands or authors preparing for a launch who need a standout, cohesive visual identity.",
      turnaroundTime: "3–5 days",
      startingPrice: "Custom Quote",
      iconName: "Palette"
    },

    // ── THIRD SEGMENT: WEBSITE DESIGN ON ANY CMS PLATFORM ──
    {
      id: "custom-website-design",
      pillarId: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      title: "Custom Website Design (Any CMS)",
      shortDescription: "Tailor-made, responsive websites built on WordPress, Shopify, Webflow, Squarespace, Wix, or custom frameworks to suit your unique vision.",
      fullDescription: "I design and build bespoke, modern websites that look stunning on desktop and mobile. Whether you prefer WordPress with Elementor/Gutenberg, Shopify for retail, Webflow for sleek interactions, or Squarespace/Wix for simplicity, every site is crafted with clean code, fast load times, and intuitive navigation.",
      deliverables: [
        "Full multi-page custom design tailored to your brand",
        "100% mobile-responsive layout and cross-browser testing",
        "CMS platform setup (WordPress, Shopify, Webflow, Squarespace, Wix)",
        "On-page SEO optimization & Google Search Console indexing",
        "Video walkthrough showing how to manage and update content easily"
      ],
      tags: ["WordPress", "Shopify", "Webflow", "Squarespace", "Wix", "Framer"],
      idealFor: "Businesses, entrepreneurs, personal brands, events, authors, nonprofits, and blogs looking for a high-converting digital storefront.",
      turnaroundTime: "4–10 days depending on project scope",
      startingPrice: "Custom Quote",
      iconName: "Layout"
    },
    {
      id: "ecommerce-stores",
      pillarId: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      title: "E-Commerce & Online Stores",
      shortDescription: "Seamless shopping experiences with automated inventory, payment gateways, and checkout flows optimized for sales.",
      fullDescription: "Launch your product line with a conversion-optimized store. I configure WooCommerce, Shopify, or Squarespace Commerce with automated shipping rules, multi-currency support, payment gateways (Stripe, PayPal, Paystack, Flutterwave), and frictionless checkout.",
      deliverables: [
        "Product catalog setup with variations & image optimization",
        "Secure payment gateway integration & checkout optimization",
        "Automated customer email receipts & order notifications",
        "Mobile shopping cart and speed optimization"
      ],
      tags: ["WooCommerce", "Shopify", "Stripe", "Payment Gateways", "Cart Optimization"],
      idealFor: "Brands, makers, bookstores, and retail businesses selling physical or digital products.",
      turnaroundTime: "7–14 days",
      startingPrice: "Custom Quote",
      iconName: "ShoppingBag"
    },
    {
      id: "website-redesign-error-fixing",
      pillarId: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      title: "Website Redesign, Speed & Bug Fixing",
      shortDescription: "Transform an outdated site, resolve stubborn platform errors, enhance page speed scores, and modernize user experience.",
      fullDescription: "Is your current website sluggish, broken on mobile, or not generating inquiries? I audit existing websites, fix white screens, broken layouts, plugin conflicts, and server errors, and rebuild outdated pages into modern high-speed experiences.",
      deliverables: [
        "Comprehensive site audit & error diagnostic",
        "Layout revamp with modern typography & clean spacing",
        "Speed optimization (image compression, caching, asset cleanup)",
        "Mobile responsiveness fixes and security hardening"
      ],
      tags: ["Error Fixing", "Speed Boost", "Redesign", "Bug Repair", "Maintenance"],
      idealFor: "Website owners whose current sites are slow, experiencing bugs, or failing to convert visitors.",
      turnaroundTime: "1–3 days for fixes; 5–7 days for redesigns",
      startingPrice: "Custom Quote",
      iconName: "Wrench"
    }
  ],

  // 9. THE THREE SEGMENTED PORTFOLIO GALLERIES (Expanded with rich genre diversity)
  // Segment 1: Beta Reading & Book Services Portfolio (FIRST!)
  bookProjects: [
    {
      id: "book-1",
      title: "The Silent Constellation",
      genre: "Sci-Fi & Thriller",
      genreKey: "scifi",
      wordCount: "82,000 Words",
      serviceType: "Beta Reading Report" as const,
      description: "Comprehensive 8-page reader diagnostic report evaluating pacing in the mid-book orbital climax, protagonist motivation, and hard sci-fi technological coherence.",
      imageUrl: betaShowcaseImg,
      keyFeedbackProvided: [
        "Identified pacing lag between Chapters 12–15 and suggested subplot consolidation",
        "Highlighted strong emotional hook in prologue and recommended echoing in finale",
        "Provided character reaction tracking across major narrative turning points",
        "Audited zero-gravity combat physics for scientific credibility"
      ],
      authorOutcome: "Author revised draft and secured literary agency representation"
    },
    {
      id: "book-2",
      title: "Memories of Quiet Light",
      genre: "Nonfiction & Memoir",
      genreKey: "fiction-nonfiction",
      wordCount: "64,000 Words",
      serviceType: "Manuscript Critique" as const,
      description: "Developmental critique focusing on emotional arc consistency, narrative voice intimacy, and reader engagement across personal life vignettes.",
      imageUrl: memoirCoverImg,
      keyFeedbackProvided: [
        "Restructured opening chapters to bring key inciting life event forward",
        "Streamlined secondary narrative threads to keep central theme impactful",
        "Line-level rhythm recommendations for poetic prose style",
        "Enhanced reader takeaway takeaways in final reflection chapter"
      ],
      authorOutcome: "Published independently with 4.8-star reader reception"
    },
    {
      id: "book-3",
      title: "Echoes of the High Kingdom",
      genre: "Romance & Fantasy (Romantasy)",
      genreKey: "romance",
      wordCount: "105,000 Words",
      serviceType: "Proofreading & Formatting" as const,
      description: "Complete interior print layout typesetting, Kindle EPUB validation, and proofreading pass for magic system terminology and enemies-to-lovers tension consistency.",
      imageUrl: novelCoverImg,
      keyFeedbackProvided: [
        "Crafted custom chapter headers with ornamental motif matching fantasy lore",
        "Fixed 180+ subtle typography inconsistencies and hyphenation breaks",
        "Checked slow-burn romantic tension pacing across dual perspectives",
        "Generated Kindle-validated reflowable EPUB with linked table of contents"
      ],
      authorOutcome: "Hit Amazon category top-seller lists during debut week"
    },
    {
      id: "book-4",
      title: "Shadows in the Mist",
      genre: "YA & Mystery",
      genreKey: "ya",
      wordCount: "74,000 Words",
      serviceType: "Beta Reading Report" as const,
      description: "Targeted young adult beta read examining dialogue authenticity, suspense cliffhangers at chapter ends, fair-play clue placement, and mystery reveal pacing.",
      imageUrl: betaShowcaseImg,
      keyFeedbackProvided: [
        "Enhanced red herring placement in Chapter 8 to keep teen audience guessing",
        "Sharpened teenage voice in dual-POV alternating chapters",
        "Flagged exposition dump in chapter 3 and suggested showing through action",
        "Validated fair-play clue trail so reveal feels satisfying and earned"
      ],
      authorOutcome: "Reader completion rate doubled during subsequent test reader rounds"
    },
    {
      id: "book-5",
      title: "The Hollow of Blackwood Manor",
      genre: "Horror & Paranormal",
      genreKey: "horror",
      wordCount: "78,000 Words",
      serviceType: "Beta Reading Report" as const,
      description: "Atmospheric gothic horror beta read examining creeping sensory dread, supernatural coven lore rules, and psychological descent into madness.",
      imageUrl: betaShowcaseImg,
      keyFeedbackProvided: [
        "Recommended withholding physical manifestation of entity until Chapter 16 to maximize psychological dread",
        "Strengthened auditory sensory cues (phantom weeping, floorboard creaks) in middle chapters",
        "Clarified paranormal curse rules to preserve internal story logic"
      ],
      authorOutcome: "Selected for prominent independent dark-fiction podcast feature"
    },
    {
      id: "book-6",
      title: "Cobblestone & Crown",
      genre: "Historical Fiction & Crime",
      genreKey: "historical-fiction",
      wordCount: "92,000 Words",
      serviceType: "Manuscript Critique" as const,
      description: "Detailed critique evaluating Victorian London underworld authenticity, police procedural protocol accuracy, and dialect cadence.",
      imageUrl: novelCoverImg,
      keyFeedbackProvided: [
        "Flagged 12 anachronistic phrases and suggested period-appropriate Victorian idioms",
        "Tightened mid-heist planning sequence to maintain relentless tension",
        "Deepened socio-economic class friction between the inspector and thief protagonist"
      ],
      authorOutcome: "Shortlisted for regional historical fiction manuscript prize"
    }
  ] as BookProject[],

  // Segment 2: Website Design Portfolio
  webProjects: [
    {
      id: "web-1",
      title: "Noir Glow Luxury Candles",
      clientType: "Ecommerce" as const,
      cmsPlatform: "Shopify" as const,
      description: "High-converting online store with customized product galleries, automated scent discovery quiz, and frictionless mobile checkout.",
      imageUrl: webEcommerceImg,
      liveUrl: "https://noirglowcandles.com/",
      tags: ["Shopify", "E-Commerce", "Custom UI", "Speed: 98%"],
      featuredOutcome: "38% increase in mobile checkout completions"
    },
    {
      id: "web-2",
      title: "Boston Town Ride Chauffeur",
      clientType: "Business" as const,
      cmsPlatform: "WordPress" as const,
      description: "Luxury transportation booking website with interactive fleet showcase, instant quote calculator, and local SEO setup.",
      imageUrl: webBusinessBookingImg,
      liveUrl: "https://bostontownride.com/",
      tags: ["WordPress", "Elementor", "Local SEO", "Booking System"],
      featuredOutcome: "Top 3 Google ranking for targeted regional keywords"
    },
    {
      id: "web-3",
      title: "Elena Vance Author & Speaker",
      clientType: "Author & Personal" as const,
      cmsPlatform: "Webflow" as const,
      description: "Atmospheric literary website showcasing novel series, reader newsletter lead capture, press kit, and direct retail bookstore links.",
      imageUrl: webAuthorSpeakerImg,
      liveUrl: "#",
      tags: ["Webflow", "Author Brand", "Newsletter Funnel", "Responsive"],
      featuredOutcome: "Over 1,200 newsletter subscribers acquired at launch"
    },
    {
      id: "web-4",
      title: "Heritage Hope Community Foundation",
      clientType: "Nonprofit" as const,
      cmsPlatform: "Squarespace" as const,
      description: "Inspiring nonprofit portal featuring donor impact stories, automated recurring donation gateway, and community event calendar.",
      imageUrl: webNonprofitPortalImg,
      liveUrl: "#",
      tags: ["Squarespace", "Donation Gateway", "Accessibility", "Nonprofit"],
      featuredOutcome: "Simplified giving flow resulting in 2.5x recurring donors"
    },
    {
      id: "web-5",
      title: "The Urban Quill Literary Journal",
      clientType: "Blog" as const,
      cmsPlatform: "WordPress" as const,
      description: "High-readability digital editorial publication with categorized author archives, search filter, and responsive typography.",
      imageUrl: webEditorialBlogImg,
      liveUrl: "#",
      tags: ["WordPress", "Editorial Layout", "Clean Typography", "Gutenberg"],
      featuredOutcome: "Sub-second load times across 5,000+ monthly readers"
    },
    {
      id: "web-6",
      title: "Summit Horizon Leadership Forum",
      clientType: "Event" as const,
      cmsPlatform: "Wix" as const,
      description: "High-impact conference registration website with speaker lineups, interactive agenda scheduling, and VIP ticketing integration.",
      imageUrl: webEventSummitImg,
      liveUrl: "#",
      tags: ["Wix Studio", "Event Ticketing", "Schedule Grid", "Interactive"],
      featuredOutcome: "Sold out 450 conference passes in first 3 weeks"
    }
  ] as WebProject[],

  // Segment 3: Social Media Management Portfolio
  socialProjects: [
    {
      id: "social-1",
      title: "Aura Botanicals Skincare Feed",
      niche: "E-commerce & Retail" as const,
      platforms: ["Instagram", "TikTok", "Pinterest"],
      description: "Complete visual redesign and 9-grid feed curation highlighting clean ingredients, customer unboxings, and educational skincare routines.",
      imageUrl: socialSkincareImg,
      tags: ["Feed Aesthetics", "Video Hooks", "Reels Strategy"],
      featuredOutcome: "+145% account reach and 3.2x comment engagement in 60 days"
    },
    {
      id: "social-2",
      title: "The Writer's Journey Author Platform",
      niche: "Lifestyle & Author Brand" as const,
      platforms: ["Instagram", "TikTok", "Facebook"],
      description: "Author brand expansion featuring quote graphics, behind-the-scenes writing desk aesthetics, book launch countdowns, and character spotlights.",
      imageUrl: socialAuthorBooktokImg,
      tags: ["BookTok Content", "Author Community", "Launch Campaign"],
      featuredOutcome: "Built community of 12,000+ enthusiastic reader followers"
    },
    {
      id: "social-3",
      title: "Metro Sound Studio Launch Campaign",
      niche: "Creative Agency" as const,
      platforms: ["Instagram", "Facebook", "LinkedIn"],
      description: "Modern dark-mode aesthetic campaign with animated artist highlights, client testimonials, and studio booking carousel promos.",
      imageUrl: socialCreativeStudioImg,
      tags: ["Brand Identity", "Carousel Design", "B2B Outreach"],
      featuredOutcome: "Generated 40+ booked studio recording sessions"
    },
    {
      id: "social-4",
      title: "Lumina Cultural Arts & Dining Blitz",
      niche: "Events & Culture" as const,
      platforms: ["Instagram", "TikTok", "Facebook"],
      description: "High-energy festival and culinary experience social campaign featuring aesthetic food photography, ticket promo countdowns, and viral reel hooks.",
      imageUrl: socialEventsDiningImg,
      tags: ["Event Marketing", "Food Aesthetics", "Reels Viral"],
      featuredOutcome: "Sold out 1,500 weekend passes and generated 250k+ video views"
    }
  ] as SocialProject[],

  // 10. CLIENT FEEDBACK & TESTIMONIALS (Arranged in the 3 requested segments)
  testimonials: [
    // ══════════════════════════════════════════════════════════════════
    // SEGMENT 1: BETA READING & BOOK SERVICE
    // ══════════════════════════════════════════════════════════════════
    {
      id: "t-books-1",
      client: "Sarah J. Miller",
      role: "Fantasy & Suspense Author",
      pillar: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      service: "Beta Reading & Reader Diagnostic Report (105k Fantasy)",
      rating: 5,
      highlightOutcome: "Signed with Top Literary Agent",
      genreOrPlatform: "Epic Fantasy & Suspense",
      quote: "The diagnostic report was phenomenal. Dream Chaser Writes pinpointed an exact 3-chapter drag in my second act and identified why my magic system felt contradictory in the climax. Following the clear revision roadmap, I revised the draft and received multiple literary agent offers within 6 weeks of querying!"
    },
    {
      id: "t-books-2",
      client: "Julian R. Thorne",
      role: "Romance & Romantasy Novelist",
      pillar: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      service: "Romance Beta Read & Chemistry Audit (88k Words)",
      rating: 5,
      highlightOutcome: "Hit Amazon Top 20 Romance Category",
      genreOrPlatform: "Enemies-to-Lovers Romantasy",
      quote: "As a romance author, getting the chemistry and pacing between enemies-to-lovers right is make-or-break. The feedback on emotional stakes and the third-act breakup was brilliant—it transformed a good draft into a book that my ARC readers couldn't put down. It debuted in the top 20 on Amazon!"
    },
    {
      id: "t-books-3",
      client: "Dr. Evelyn Vance",
      role: "Memoirist & University Lecturer",
      pillar: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      service: "Manuscript Critique & Developmental Review (64k Words)",
      rating: 5,
      highlightOutcome: "Published with 4.9-Star Reader Average",
      genreOrPlatform: "Memoir & Narrative Nonfiction",
      quote: "Writing a deeply personal memoir is terrifying, but Dream Chaser Writes handled my story with utmost respect, warmth, and incisive editorial clarity. The chapter-by-chapter emotional pacing notes helped me bridge personal anecdotes with universal takeaways that truly touched readers."
    },
    {
      id: "t-books-4",
      client: "Liam Gallagher",
      role: "Sci-Fi & Cyberpunk Novelist",
      pillar: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      service: "Speculative Logic & Pacing Report (92k Words)",
      rating: 5,
      highlightOutcome: "Doubled Reader Completion Rate",
      genreOrPlatform: "Hard Sci-Fi & Cyberpunk",
      quote: "The scrutiny given to my zero-gravity mechanics, futuristic dialogue, and high-stakes orbital battles was incredible. Every single plot hole was flagged with constructive solutions rather than just critique. An absolute masterclass in beta reading."
    },
    {
      id: "t-books-5",
      client: "Maya Chen",
      role: "Young Adult Mystery Author",
      pillar: 'book-services' as ServicePillarId,
      pillarLabel: "Beta Reading & Books",
      service: "YA Beta Reading & Red Herring Clue Audit (74k Words)",
      rating: 5,
      highlightOutcome: "Selected for Indie Bestseller Feature",
      genreOrPlatform: "YA Mystery & Thriller",
      quote: "The teenage voice diagnostic and the fair-play clue matrix were spot-on. They caught where my clues were too obvious and where my red herrings needed more weight. My test reader group loved the revised ending and read-through completion doubled."
    },

    // ══════════════════════════════════════════════════════════════════
    // SEGMENT 2: SOCIAL MEDIA MANAGEMENT & BRAND GROWTH
    // ══════════════════════════════════════════════════════════════════
    {
      id: "t-social-1",
      client: "Chloe D'Angelo",
      role: "Founder, Aura Botanicals Skincare",
      pillar: 'social-media' as ServicePillarId,
      pillarLabel: "Social Media & Growth",
      service: "Full-Service Social Media Management & Feed Curation",
      rating: 5,
      highlightOutcome: "+145% Reach & 3.2x Engagement Growth",
      genreOrPlatform: "Instagram & TikTok",
      quote: "Dream Chaser Writes transformed our Instagram and TikTok from disjointed posts into a luxury clean-beauty destination. The monthly content calendar is always delivered on time, the aesthetic feed design is stunning, and our comment engagement tripled in just 60 days!"
    },
    {
      id: "t-social-2",
      client: "Kaelen Scott",
      role: "Fantasy Author & BookTok Creator",
      pillar: 'social-media' as ServicePillarId,
      pillarLabel: "Social Media & Growth",
      service: "Author Brand Strategy & BookTok Content Campaign",
      rating: 5,
      highlightOutcome: "Grew to 14,000+ Engaged Readers",
      genreOrPlatform: "BookTok & Instagram",
      quote: "I used to dread social media as an author. Working with Dream Chaser Writes was life-changing: they created captivating aesthetic reels, quote graphics, and launch countdowns that blew up on BookTok. It drove hundreds of direct pre-orders to my novel launch!"
    },
    {
      id: "t-social-3",
      client: "David O.",
      role: "Creative Director, Metro Sound Studio",
      pillar: 'social-media' as ServicePillarId,
      pillarLabel: "Social Media & Growth",
      service: "Social Media Campaign & Aesthetic Grid Design",
      rating: 5,
      highlightOutcome: "Generated 40+ Booked Studio Sessions",
      genreOrPlatform: "Instagram, FB & LinkedIn",
      quote: "Our brand went from zero social presence to looking like an established, premium sound lab. The dark-mode carousel designs, artist spotlights, and strategic hashtag targeting generated high-ticket recording session bookings every single week."
    },
    {
      id: "t-social-4",
      client: "Soraya Al-Mansoor",
      role: "Director, Lumina Cultural Arts Festival",
      pillar: 'social-media' as ServicePillarId,
      pillarLabel: "Social Media & Growth",
      service: "Multi-Platform Event Social Blitz (IG, TikTok, FB)",
      rating: 5,
      highlightOutcome: "Sold Out 1,500 Festival Passes",
      genreOrPlatform: "Event Marketing Campaign",
      quote: "The energy and aesthetic cohesion brought to our cultural festival campaign was unmatched. The countdown reels, food vendor spotlights, and VIP ticket graphics drove massive excitement and resulted in our fastest ticket sellout ever."
    },

    // ══════════════════════════════════════════════════════════════════
    // SEGMENT 3: WEBSITE DESIGN ON ANY CMS PLATFORM
    // ══════════════════════════════════════════════════════════════════
    {
      id: "t-web-1",
      client: "Marcus Vance",
      role: "Founder, Noir Glow Luxury Candles",
      pillar: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      service: "Custom Shopify E-Commerce Store Design",
      rating: 5,
      highlightOutcome: "38% Increase in Mobile Checkout Conversions",
      genreOrPlatform: "Shopify",
      quote: "Dream Chaser Writes completely rebuilt our Shopify store from scratch. The mobile experience is blazing fast, the scent discovery quiz converts like crazy, and our cart abandonment dropped immediately. Communicative, professional, and delivered ahead of schedule."
    },
    {
      id: "t-web-2",
      client: "Arthur Pendelton",
      role: "Managing Partner, Boston Town Chauffeur",
      pillar: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      service: "WordPress & Elementor Corporate Booking Site",
      rating: 5,
      highlightOutcome: "Top 3 Regional Google Search Ranking",
      genreOrPlatform: "WordPress & Elementor",
      quote: "We needed a sleek, high-end chauffeur booking website with an interactive fleet quote calculator. Dream Chaser Writes delivered an executive-grade site with flawless local SEO that has our corporate phones ringing daily."
    },
    {
      id: "t-web-3",
      client: "Elena Vance",
      role: "Bestselling Author & Keynote Speaker",
      pillar: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      service: "Webflow Author Portfolio & Newsletter Funnel",
      rating: 5,
      highlightOutcome: "1,200+ Newsletter Subscribers in Debut Month",
      genreOrPlatform: "Webflow",
      quote: "Having an author website that looks like a high-end publishing house was my dream. The book showcases, press kit integration, and automated newsletter onboarding are seamless. It gave me immediate authority and credibility with major publishers."
    },
    {
      id: "t-web-4",
      client: "Reverend Thomas Sterling",
      role: "Executive Director, Heritage Hope Foundation",
      pillar: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      service: "Squarespace Nonprofit Portal & Donation Gateway",
      rating: 5,
      highlightOutcome: "2.5x Recurring Monthly Donors",
      genreOrPlatform: "Squarespace",
      quote: "Our previous nonprofit website was clunky and confusing. The new site is clear, heartwarming, accessible, and makes donating so easy that our recurring donor contributions doubled within the first quarter."
    },
    {
      id: "t-web-5",
      client: "Jonathan Reyes",
      role: "Editor-in-Chief, The Urban Quill Journal",
      pillar: 'web-design' as ServicePillarId,
      pillarLabel: "Website Design (Any CMS)",
      service: "WordPress Editorial Blog & Performance Optimization",
      rating: 5,
      highlightOutcome: "Sub-Second Page Load Times",
      genreOrPlatform: "WordPress & Gutenberg",
      quote: "As a literary journal with heavy editorial archives, page speed and typography are everything. Dream Chaser Writes built a distraction-free, lightning-fast digital publication that our 5,000+ monthly readers rave about."
    }
  ] as TestimonialItem[],

  // 11. FREQUENTLY ASKED QUESTIONS (Expanded with extensive genre coverage)
  faqs: [
    {
      id: "faq-1",
      pillar: "books",
      question: "What genres do you specialize in for beta reading?",
      answer: "I specialize and write comprehensive reader diagnostic reports for all major commercial and literary genres: Fiction & Nonfiction, Romance (all heat levels and tropes), Fantasy (epic, urban, cosy), Sci-Fi (hard sci-fi, space opera, cyberpunk), Mystery (whodunits, police procedurals), Thriller (psychological, legal, domestic), Horror (cosmic, gothic, supernatural), Historical Fiction (anachronism checks), Literary Fiction (prose aesthetics & subtext), Young Adult (YA voice & pacing), Contemporary, Crime, Adventure, and Paranormal. Every report is tailored to your genre's specific reader expectations."
    },
    {
      id: "faq-2",
      pillar: "books",
      question: "How does your Beta Reading report work and what do I receive?",
      answer: "You receive an extensive multi-page Beta Reader Diagnostic Report divided into clear sections: First Impression & Hook Efficacy, Chapter-by-Chapter Engagement Tracker, Pacing & Tension Curve Analysis, Character Agency & Chemistry, World-Building & Dialogue Authenticity, Plot Holes & Continuity Errors, and a clear, prioritised Revision Action Plan."
    },
    {
      id: "faq-3",
      pillar: "books",
      question: "What manuscript formats and word counts do you accept?",
      answer: "I accept Word (.docx), Google Docs, and PDF files. Manuscripts can range from novellas (20,000–40,000 words) to full-length novels (50,000–90,000 words) and epic tomes (100,000+ words). Turnaround time typically ranges from 5 to 12 days depending on manuscript length."
    },
    {
      id: "faq-4",
      pillar: "web",
      question: "What website platforms (CMS) do you design and develop on?",
      answer: "I design websites on any CMS platform including WordPress (Elementor, Divi, Gutenberg), Shopify, Webflow, Squarespace, Wix, Framer, and custom React code. I tailor the platform to your business goals and ease of management."
    },
    {
      id: "faq-5",
      pillar: "web",
      question: "What types of websites do you build?",
      answer: "I design websites for various businesses and authors: Personal Portfolios, Business & Corporate Sites, Event & Conference Sites, Author & Book Launch Sites, Nonprofit Portals, Editorial Blogs, and E-Commerce Stores."
    },
    {
      id: "faq-6",
      pillar: "social",
      question: "What is included in your Social Media Management service?",
      answer: "Social media management includes monthly content calendars, custom branded graphic creation (posts, carousels, story highlights), engaging caption writing with strategic hashtags, scheduled publishing across Instagram/TikTok/Facebook, and community engagement."
    },
    {
      id: "faq-7",
      pillar: "all",
      question: "Can I bundle Beta Reading with Author Website Design or Social Media?",
      answer: "Yes! Many authors bundle beta reading with an author website build and social media launch campaign. Bundling ensures complete visual and narrative cohesion from manuscript to online presence."
    },
    {
      id: "faq-8",
      pillar: "all",
      question: "How do we get started and how do I contact you?",
      answer: "You can tap any WhatsApp button on this site to message me directly at +2349014111435, or submit an inquiry through the form below. I will review your project details and respond with a clear timeline and quote."
    }
  ] as FAQItem[]
};
