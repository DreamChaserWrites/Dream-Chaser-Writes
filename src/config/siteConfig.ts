/**
 * DREAM CHASER WRITES — CENTRAL CONFIGURATION FILE
 * 
 * Edit this file to customize your brand details, services, contact information,
 * social links, portfolio items, and business settings.
 */

import novelCoverImg from '../assets/images/portfolio_novel_hardcover_1790937181176.jpg';
import memoirCoverImg from '../assets/images/portfolio_memoir_book_1790937195004.jpg';
import poetryCoverImg from '../assets/images/portfolio_poetry_anthology_1790937205737.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
  turnaroundTimePlaceholder: string;
  isAvailable: boolean; // Set to false to hide or mark as "Currently Booking Waitlist"
  startingPricePlaceholder: string; // e.g., "Custom Quote" or "$450"
  iconName: string;
  slug: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'fiction' | 'non-fiction' | 'memoir' | 'cover-design' | 'formatting';
  categoryLabel: string;
  description: string;
  servicesProvided: string[];
  imageUrl: string;
  isSamplePlaceholder: boolean; // Transparently marks showcase samples
  externalLink?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrBookTitle: string;
  quote: string;
  isSamplePlaceholder: boolean;
  published: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  isDraft: boolean;
}

export const SITE_CONFIG = {
  // 1. BRAND IDENTITY
  brandName: "DREAM CHASER WRITES",
  tagline: "Your Story Deserves to Become a Book.",
  subHeadline: "From the first spark of an idea to a manuscript ready for its next chapter, DREAM CHASER WRITES helps bring your book ambitions to life with creative support and professional book services.",
  
  // 2. CONTACT & LOCATION (Configure your real business details here)
  contactEmail: "dreamchaserwrites@gmail.com",
  // Note: Replace with your actual WhatsApp phone number with country code (e.g., "15551234567")
  whatsappNumber: "", // Empty indicates configuration needed; UI provides friendly prompt
  whatsappDefaultMessage: "Hello Dream Chaser Writes! I would like to inquire about your book services.",
  businessLocation: "Consultations Available Remotely Worldwide", // Clearly configurable
  serviceArea: "Digital Services & Online Author Consultations",
  businessHours: "Monday – Friday: 9:00 AM – 6:00 PM (By Appointment)",

  // 3. OFFICIAL SOCIAL MEDIA PROFILES (Real links from prompt)
  socialLinks: {
    facebook: "https://www.facebook.com/Dreamchaserwrites?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/dream_chase_write/",
    tiktok: "https://www.tiktok.com/@dreamchaserwrites",
  },

  // 4. FOUNDER & ABOUT DETAILS
  about: {
    headline: "Every Great Book Begins With a Dream.",
    mission: "At DREAM CHASER WRITES, we believe every meaningful story deserves the opportunity to take shape. Our mission is to support writers, aspiring authors, and creative minds with book-focused services that help move their ideas forward.",
    vision: "To empower voices across fiction, non-fiction, and personal narratives through thoughtful literary partnership, refined craft, and accessible publishing guidance.",
    coreValues: [
      {
        title: "Creative Collaboration",
        description: "We work alongside you with genuine respect for your unique creative voice and authorial vision."
      },
      {
        title: "Attention to Detail",
        description: "Every sentence, margin, typographic choice, and spine measurement receives meticulous care."
      },
      {
        title: "Personalized Approach",
        description: "No cookie-cutter templates. We customize workflows according to where you currently stand in your book journey."
      },
      {
        title: "Clear Communication",
        description: "Transparent feedback, realistic project scopes, and regular milestone updates at every turn."
      },
      {
        title: "End-to-End Scope Support",
        description: "Dedicated assistance throughout the agreed scope, ensuring your manuscript and design goals are met."
      }
    ],
    // Founder placeholder: Client can populate their authentic bio here without false claims
    founder: {
      name: "Founder & Creative Lead",
      role: "Lead Editor & Literary Strategist",
      bioPlaceholder: "A passionate literary advocate and book development specialist dedicated to helping authors navigate the rewarding path from initial concept to beautifully crafted book.",
    }
  },

  // 5. FOUR-STEP CLIENT PROCESS
  processSteps: [
    {
      step: "01",
      title: "Share Your Vision",
      summary: "Tell us about your book idea, genre, current draft status, and what you hope to achieve.",
      details: "Submit an inquiry detailing your project goals, manuscript progress, or publishing aspirations. We review every brief thoroughly before our initial dialogue."
    },
    {
      step: "02",
      title: "Choose Your Service",
      summary: "Select the specific services your project requires or request a tailored package recommendation.",
      details: "Whether you need comprehensive ghostwriting, developmental editing, or interior formatting, we clearly define deliverables that align with your needs."
    },
    {
      step: "03",
      title: "Discuss Your Project",
      summary: "Collaborate directly on project milestones, creative direction, and editorial review schedules.",
      details: "We align on timeline, feedback rounds, and specific editorial or design requirements with open, straightforward communication."
    },
    {
      step: "04",
      title: "Take the Next Step Toward Your Book",
      summary: "Receive polished deliverables ready for printing, digital distribution, or submission.",
      details: "We finalize your manuscript or book designs, provide publication-ready files, and guide you on the next strategic steps for your literary journey."
    }
  ],

  // 6. SERVICES OFFERED (Editable list of 8 core categories requested)
  services: [
    {
      id: "book-writing-ghostwriting",
      slug: "book-writing-and-ghostwriting",
      title: "Book Writing and Ghostwriting",
      shortDescription: "Transform your raw concepts, outlines, or lived experiences into a full, compelling manuscript that sounds authentically like you.",
      fullDescription: "Our ghostwriting and collaborative book writing service works intimately with authors, professionals, and visionaries who have a story to tell but need an experienced literary hand to draft it. From chapter outlines and voice capture to complete draft delivery, we honor your vision at every step.",
      deliverables: [
        "In-depth concept interviews & story architecture",
        "Comprehensive chapter-by-chapter outline",
        "Full manuscript drafting with voice consistency",
        "Revision rounds based on author feedback"
      ],
      idealFor: "Entrepreneurs, thought leaders, memoirists, and storytellers who want to author a book without writing every line themselves.",
      turnaroundTimePlaceholder: "Project-dependent (typically 3–6 months for full manuscripts)",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "PenTool"
    },
    {
      id: "book-editing-proofreading",
      slug: "book-editing-and-proofreading",
      title: "Book Editing and Proofreading",
      shortDescription: "Elevate your manuscript with developmental editing, line-by-line stylistic refinement, and meticulous proofreading.",
      fullDescription: "Polished writing commands respect. Our multi-tier editing service inspects structural pacing, character arcs, argumentative clarity, sentence rhythm, syntax, grammar, and typography to ensure your book reads with professional polish.",
      deliverables: [
        "Comprehensive manuscript evaluation & editorial letter",
        "Line editing for rhythm, cadence, and tone consistency",
        "Copyediting for grammar, punctuation, and syntax",
        "Final proofread pass for typo-free publication"
      ],
      idealFor: "Writers with completed drafts who want professional editorial scrutiny before publishing or submitting to literary agents.",
      turnaroundTimePlaceholder: "2–4 weeks based on word count",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "FileCheck"
    },
    {
      id: "book-formatting-interior-layout",
      slug: "book-formatting-and-interior-layout",
      title: "Book Formatting and Interior Layout",
      shortDescription: "Publication-ready typesetting, elegant margins, beautiful drop caps, and balanced pages crafted for print and digital distributors.",
      fullDescription: "A great book deserves an interior that invites effortless reading. We create custom typography layouts, running headers, chapter ornaments, table of contents, and print-ready PDF files formatted for Amazon KDP, IngramSpark, and traditional printers.",
      deliverables: [
        "Custom typographic interior styling (trim size specified)",
        "Headers, footers, page numbering & chapter headers",
        "Front matter & back matter professional styling",
        "Print-ready 300+ DPI PDF export with embedded fonts"
      ],
      idealFor: "Authors preparing to print softcover or hardcover editions through Amazon KDP, IngramSpark, or boutique printers.",
      turnaroundTimePlaceholder: "5–10 business days",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "BookOpen"
    },
    {
      id: "book-cover-design",
      slug: "book-cover-design",
      title: "Book Cover Design",
      shortDescription: "Distinctive, genre-tailored cover art and spine typography designed to arrest reader attention and communicate quality.",
      fullDescription: "Readers judge books by their covers. We design front covers, full wraps (front, spine, back), and barcode placement that reflect your book's mood, compete with trade publisher standards, and adhere to printer spine calculations.",
      deliverables: [
        "3 distinct conceptual cover design directions",
        "Full wrap print file (front, spine, back, flaps)",
        "Ebook high-resolution cover file optimized for online retailers",
        "Photorealistic 3D book mockup package for marketing"
      ],
      idealFor: "Authors in need of a commercially competitive, memorable cover for print and digital release.",
      turnaroundTimePlaceholder: "7–14 business days",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "Palette"
    },
    {
      id: "ebook-creation-formatting",
      slug: "ebook-creation-and-formatting",
      title: "Ebook Creation and Formatting",
      shortDescription: "Reflowable EPUB and Kindle formats validated for flawless rendering across Kindle, Apple Books, Kobo, and Nook.",
      fullDescription: "Digital readers expect fluid font resizing, clickable tables of contents, active external links, and seamless image rendering. We build standards-compliant EPUB files with clean CSS code that never break on modern e-readers.",
      deliverables: [
        "Validated reflowable EPUB 3.0 file",
        "Kindle-ready format (KPF / EPUB compatible with KDP)",
        "Interactive linked Table of Contents & internal anchors",
        "Multi-device testing on Kindle, iPad, Android, and desktop"
      ],
      idealFor: "Writers looking to maximize their global digital reach across all major ebook retail platforms.",
      turnaroundTimePlaceholder: "3–7 business days",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "Tablet"
    },
    {
      id: "self-publishing-guidance",
      slug: "self-publishing-guidance",
      title: "Self-Publishing Guidance",
      shortDescription: "Step-by-step navigation through ISBN acquisition, KDP and IngramSpark setup, pricing, royalty structure, and distribution.",
      fullDescription: "Self-publishing does not mean navigating the technical labyrinth alone. We provide guided walkthroughs for publishing platform setup, metadata optimization, copyright notices, print proofs ordering, and distribution channels.",
      deliverables: [
        "Publishing roadmap & platform comparison session",
        "Account setup walkthrough (Amazon KDP, IngramSpark, etc.)",
        "ISBN, barcode, and copyright page consultation",
        "Pre-launch file upload and proof review guidance"
      ],
      idealFor: "First-time independent authors who want clarity, confidence, and freedom from technical errors.",
      turnaroundTimePlaceholder: "Ongoing advisory / scheduled sessions",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "Compass"
    },
    {
      id: "book-description-author-bio",
      slug: "book-description-and-author-bio-writing",
      title: "Book Description and Author Bio Writing",
      shortDescription: "Hook-driven back cover blurbs, Amazon product sales copy, and compelling author biographies that turn browsers into buyers.",
      fullDescription: "A visitor decides within seconds whether to read your book based on your blurb. We write compelling, genre-tuned back cover copy and Amazon sales descriptions utilizing emotional hooks and keyword-rich phrasing that captivate readers.",
      deliverables: [
        "High-converting back cover book blurb",
        "HTML-formatted Amazon product sales description",
        "Short & medium versions of author bio",
        "Tagline options for promotional campaigns"
      ],
      idealFor: "Authors struggling to summarize their own 300-page book in a punchy, persuasive 150-word sales description.",
      turnaroundTimePlaceholder: "3–5 business days",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "Quote"
    },
    {
      id: "manuscript-review-development",
      slug: "manuscript-review-and-development",
      title: "Manuscript Review and Development",
      shortDescription: "Objective, in-depth evaluation of your work-in-progress, highlighting key strengths, structural bottlenecks, and next actionable steps.",
      fullDescription: "Before investing in line-by-line copyediting, understand how your narrative holds together. Our developmental manuscript review provides a written diagnostic report assessing plot arcs, character motivations, thematic coherence, and market positioning.",
      deliverables: [
        "Comprehensive 5–10 page reader diagnostic report",
        "Margin annotations highlighting developmental moments",
        "Actionable revision roadmap categorized by priority",
        "Post-review Q&A consultation call"
      ],
      idealFor: "Writers with an early or intermediate draft who need honest, constructive literary feedback before revising.",
      turnaroundTimePlaceholder: "2–3 weeks based on manuscript length",
      startingPricePlaceholder: "Custom Quote",
      isAvailable: true,
      iconName: "ScrollText"
    }
  ],

  // 7. PORTFOLIO & BOOK SHOWCASE (Samples marked clearly as design concepts/placeholders)
  portfolio: [
    {
      id: "sample-project-1",
      title: "The Silent Constellation",
      subtitle: "Literary Speculative Fiction",
      category: "fiction",
      categoryLabel: "Fiction & Novels",
      description: "Concept mockup demonstrating custom typography, foil-embossed hardcover jacket design, and interior typesetting for an atmospheric speculative novel.",
      servicesProvided: ["Book Cover Design", "Interior Layout", "Typesetting"],
      imageUrl: novelCoverImg,
      isSamplePlaceholder: true
    },
    {
      id: "sample-project-2",
      title: "Memories of Quiet Light",
      subtitle: "Personal Memoir & Essays",
      category: "memoir",
      categoryLabel: "Memoir & Narrative",
      description: "Sample project showcasing warm cream minimalist cover art, chapter vignettes, and comprehensive developmental editing framework for personal memoirs.",
      servicesProvided: ["Developmental Editing", "Ebook Formatting", "Cover Art"],
      imageUrl: memoirCoverImg,
      isSamplePlaceholder: true
    },
    {
      id: "sample-project-3",
      title: "Verses From The Greenwood",
      subtitle: "Modern Poetry Anthology",
      category: "cover-design",
      categoryLabel: "Bespoke Cover Design",
      description: "Showcase mockup for an artisanal poetry collection featuring gold-leaf detailing, dark emerald texture, and delicate stanza formatting.",
      servicesProvided: ["Cover Design", "Print Formatting", "Proofreading"],
      imageUrl: poetryCoverImg,
      isSamplePlaceholder: true
    }
  ] as PortfolioItem[],

  // 8. TESTIMONIALS CONFIGURATION
  // As requested in Section 1 and Section 9: "Do not invent company achievements, testimonials, client names... display an editor-friendly placeholder that is hidden from the published website until authentic testimonials are added."
  testimonials: {
    showSectionOnSite: false, // Set to true once you paste authentic client testimonials below
    placeholderNote: "Client reviews and author testimonials are currently being curated and will be published here upon verification.",
    items: [
      {
        id: "testimonial-1",
        clientName: "Authentic Client Name",
        roleOrBookTitle: "Author of [Book Title]",
        quote: "Replace this text with an authentic quotation from a client who has completed a project with Dream Chaser Writes.",
        isSamplePlaceholder: true,
        published: false
      }
    ]
  },

  // 9. BLOG & WRITER'S CORNER ARTICLES
  articles: [
    {
      id: "article-1",
      slug: "5-essential-steps-before-submitting-your-manuscript",
      title: "5 Essential Steps to Take Before Submitting Your Manuscript to an Editor",
      excerpt: "Preparation makes every editorial dollar go further. Here is how to perform your own self-review before handing your book over to a professional editor.",
      category: "Editing and Manuscript Preparation",
      readTime: "5 min read",
      publishedDate: "October 2026",
      author: "Dream Chaser Editorial",
      isDraft: false,
      content: [
        "Handing your manuscript over to an editor is a milestone moment for any writer. It represents the transition from private contemplation to professional collaboration.",
        "However, many authors jump into developmental or copyediting before giving their draft the self-evaluation pass it deserves. By performing a targeted self-review first, you ensure your editor focuses on deep structural nuances rather than fixing surface-level distractions you could have caught yourself.",
        "1. Complete a Full Continuous Read-Through Without Editing: Resist the urge to fix spelling on page 20. Read your entire draft from start to finish at reading speed to observe pacing, plot rhythm, and character consistency as a reader would.",
        "2. Audit Your Chapter Endings: Does each chapter end with emotional resonance, an unanswered question, or momentum? Weak chapter endings lead to sluggish reading experiences.",
        "3. Search for Your Habit Words: Every writer has verbal crutches—words like 'just', 'nodded', 'suddenly', or 'felt'. Run a quick find-and-replace audit to eliminate excessive repetition.",
        "4. Standardize Your Formatting: Remove double spaces after periods, ensure consistent paragraph indentation, and unify chapter heading styles.",
        "5. Formulate Specific Questions for Your Editor: An editor can provide vastly superior feedback when they understand what you are most concerned about. Tell them if chapter 7 feels slow or if your protagonist's motivation feels unclear in the climax."
      ]
    },
    {
      id: "article-2",
      slug: "self-publishing-vs-traditional-choosing-your-path",
      title: "Self-Publishing vs. Traditional Publishing: How to Choose What Fits Your Book",
      excerpt: "Neither path is objectively superior—each serves different creative goals, time horizons, and commercial models. Here is how to evaluate the choice.",
      category: "Self-Publishing Resources",
      readTime: "7 min read",
      publishedDate: "September 2026",
      author: "Dream Chaser Editorial",
      isDraft: false,
      content: [
        "The debate between independent self-publishing and traditional trade publishing is often clouded by outdated misconceptions. The truth is that both avenues can produce extraordinary books, provided the author's strategy matches the route.",
        "When Traditional Publishing Makes Sense: If your primary dream is placement in physical brick-and-mortar bookstores, inclusion in major literary awards, or validation from established trade presses, traditional publishing remains prestigious. Keep in mind that querying agents, book auctions, and production cycles typically require 2 to 3 years from query to shelf.",
        "When Self-Publishing Triumphs: If speed-to-market, 100% intellectual property ownership, complete creative control over cover art, and 70% digital royalties appeal to you, independent publishing is a formidable powerhouse.",
        "The Non-Negotiable Standard: Regardless of which path you pursue, your book must adhere to professional production standards. Readers do not excuse amateur cover designs or sloppy interior layouts simply because a book was independently published."
      ]
    },
    {
      id: "article-3",
      slug: "crafting-a-book-description-that-sells",
      title: "The Anatomy of a Compelling Book Description",
      excerpt: "Your book description is not a plot summary—it is an invitation. Discover how to structure back-cover copy that turns casual browsers into buyers.",
      category: "Author Branding",
      readTime: "4 min read",
      publishedDate: "August 2026",
      author: "Dream Chaser Editorial",
      isDraft: false,
      content: [
        "One of the most frequent mistakes self-published authors make is confusing a synopsis with a book sales description. A synopsis tells everything that happens, including the ending. A book blurb does something completely different: it creates an irresistible emotional tension that can only be resolved by opening page one.",
        "The Hook: Open with a bold, single-sentence statement or question that establishes the stakes. What is the core dilemma?",
        "The Character & Conflict: Introduce who the reader will care about and what insurmountable challenge stands in their path.",
        "The Micro-Stakes: Avoid vague abstractions like 'he must save the world'. Anchor the conflict in concrete consequences: what will be lost if they fail?",
        "The Call to Action: Conclude with a clear statement guiding the reader: 'Scroll up and grab your copy today to begin the journey.'"
      ]
    }
  ]
};
