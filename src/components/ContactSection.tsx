import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  Shield,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContactSectionProps {
  initialService?: string;
  onOpenConfigGuide?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  onOpenConfigGuide
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  // Beta reading first as default!
  const [service, setService] = useState(initialService || 'Beta Reading: Full Diagnostic Report');
  const [manuscriptGenre, setManuscriptGenre] = useState('Romance & Romantasy');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Email'>('WhatsApp');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    inquiryId: string;
    message: string;
    submittedAt: string;
  } | null>(null);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      setErrorMessage('Please describe your project (minimum 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim() || null,
          service: `${service} (Genre: ${manuscriptGenre})`,
          description: description.trim(),
          budget: budget.trim() || null,
          preferredContact
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSuccessData({
        inquiryId: data.inquiryId,
        message: data.message,
        submittedAt: data.submittedAt
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error occurred while submitting inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setFullName('');
    setEmail('');
    setWhatsapp('');
    setDescription('');
    setBudget('');
    setErrorMessage(null);
  };

  const whatsappDirectUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <section id="contact" className="py-24 bg-[#0f2a45] text-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching reference site */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6BA5FF] font-bold block mb-2">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Let's Build Something <br />
            <span className="text-[#6BA5FF]">Amazing Together</span>
          </h2>
          <div className="w-12 h-1 bg-[#0166FE] rounded mx-auto mb-3" />
          <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-lg mx-auto">
            Ready to start a project or have a question? Reach out — I typically respond within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
          
          {/* Left Column (.rv-l): Preferred WhatsApp & Contact Card */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#173E63] border border-white/10 shadow-xl space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                Preferred Contact
              </p>

              {/* Direct WhatsApp Card (matching reference site layout) */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
                    WhatsApp (Direct)
                  </p>
                  <p className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    +2349014111435
                  </p>
                  <p className="text-xs text-neutral-300 font-light">
                    Tap to open WhatsApp chat
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
              </a>

              {/* Email Detail */}
              <div className="pt-3 border-t border-white/10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-sm font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              {/* Location & Hours */}
              <div className="pt-3 border-t border-white/10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
                    Availability & Location
                  </p>
                  <p className="text-xs text-neutral-200">
                    {SITE_CONFIG.businessLocation} · {SITE_CONFIG.businessHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Reassurance note */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-center gap-3">
              <Shield className="w-4 h-4 text-sky-300 shrink-0" />
              <span>All manuscripts, briefs, and client data are treated with strict confidentiality.</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#173E63] border border-white/10 shadow-2xl">
              
              {successData ? (
                <div className="space-y-6 py-4 animate-fadeIn text-left">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                      Inquiry Received · Ref: {successData.inquiryId}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-3 mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-neutral-200 font-light leading-relaxed">
                      {successData.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Follow up on WhatsApp (+2349014111435)</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#6BA5FF] focus:ring-2 focus:ring-blue-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#6BA5FF] focus:ring-2 focus:ring-blue-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service of Interest (BETA READING FIRST!) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                      Service of Interest <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#6BA5FF] focus:ring-2 focus:ring-blue-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors cursor-pointer"
                    >
                      {/* Segment 1: BETA READING & BOOK SERVICE */}
                      <optgroup label="1. BETA READING & BOOK SERVICE">
                        <option value="Beta Reading: Full Diagnostic Report">Beta Reading: Full Diagnostic Report</option>
                        <option value="Beta Reading: Developmental Manuscript Critique">Beta Reading: Developmental Manuscript Critique</option>
                        <option value="Book Services: Interior Layout & Kindle Formatting">Book Services: Interior Layout & Kindle Formatting</option>
                      </optgroup>

                      {/* Segment 2: SOCIAL MEDIA MANAGEMENT & BRAND GROWTH */}
                      <optgroup label="2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH">
                        <option value="Social Media: Monthly Management">Social Media: Monthly Management</option>
                        <option value="Social Media: Feed Aesthetics & Content Suite">Social Media: Feed Aesthetics & Content Suite</option>
                        <option value="Social Media: Launch Campaign Strategy">Social Media: Launch Campaign Strategy</option>
                      </optgroup>

                      {/* Segment 3: WEBSITE DESIGN ON ANY CMS PLATFORM */}
                      <optgroup label="3. WEBSITE DESIGN ON ANY CMS PLATFORM">
                        <option value="Website Design: WordPress">Website Design: WordPress</option>
                        <option value="Website Design: Shopify Online Store">Website Design: Shopify Online Store</option>
                        <option value="Website Design: Webflow">Website Design: Webflow</option>
                        <option value="Website Design: Squarespace">Website Design: Squarespace</option>
                        <option value="Website Design: Wix">Website Design: Wix</option>
                        <option value="Website Design: Author / Personal Portfolio">Website Design: Author / Personal Portfolio</option>
                        <option value="Website Design: Business / Corporate">Website Design: Business / Corporate</option>
                        <option value="Website Redesign / Speed & Bug Fixing">Website Redesign / Speed & Bug Fixing</option>
                      </optgroup>

                      <optgroup label="Multi-Pillar Package">
                        <option value="Bundle: Author Website + Beta Reading">Bundle: Author Website + Beta Reading</option>
                        <option value="Bundle: Website + Social Media">Bundle: Website + Social Media</option>
                        <option value="Other Custom Project">Other Custom Project</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Manuscript Genre Selector (Covers all 15 genres requested) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center justify-between">
                      <span>Manuscript Genre Specialization</span>
                      <span className="text-[10px] text-neutral-400 font-normal">All 15+ Genres Evaluated</span>
                    </label>
                    <select
                      value={manuscriptGenre}
                      onChange={(e) => setManuscriptGenre(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-amber-400/40 focus:border-amber-300 focus:ring-2 focus:ring-amber-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors cursor-pointer font-medium"
                    >
                      <option value="Fiction & Nonfiction">Fiction & Nonfiction (General, Memoirs, Essays)</option>
                      <option value="Romance">Romance (Slow Burn, Enemies-to-Lovers, Dark Romance)</option>
                      <option value="Fantasy">Fantasy (High / Epic, Urban, Low, Cosy)</option>
                      <option value="Sci-Fi">Sci-Fi (Hard Sci-Fi, Space Opera, Cyberpunk, Dystopian)</option>
                      <option value="Mystery">Mystery (Whodunit, Cozy, Detective, Locked-Room)</option>
                      <option value="Thriller">Thriller (Psychological, Legal, Action, Ticking-Clock)</option>
                      <option value="Horror">Horror (Supernatural, Psychological, Cosmic, Gothic)</option>
                      <option value="Historical Fiction">Historical Fiction (Regency, WWII, Medieval, Ancient)</option>
                      <option value="Literary Fiction">Literary Fiction (Prose Aesthetics, Deep Character Arc)</option>
                      <option value="Young Adult (YA)">Young Adult (YA Voice, Coming-of-Age, Urgency)</option>
                      <option value="Contemporary">Contemporary (Modern Life, Family, Workplace)</option>
                      <option value="Crime">Crime (Heists, Mob, Noir, Procedural)</option>
                      <option value="Adventure">Adventure (Survival, Quests, Kinetic Action)</option>
                      <option value="Paranormal & More">Paranormal & More (Shifters, Vampires, Witches)</option>
                      <option value="Cross-Genre Blend / Hybrid">Cross-Genre Blend / Hybrid</option>
                      <option value="Non-Book / Web Project">Not Applicable (Website / Social Project)</option>
                    </select>
                  </div>

                  {/* Row 3: WhatsApp & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                        Your WhatsApp Number <span className="text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="e.g. +234..."
                        className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#6BA5FF] focus:ring-2 focus:ring-blue-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                        Estimated Budget <span className="text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="e.g. $300 – $1,000 / Flexible"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#6BA5FF] focus:ring-2 focus:ring-blue-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                      Your Message / Manuscript Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell me about your project: manuscript genre & word count (if beta reading), preferred CMS platform (if website), or social goals."
                      className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#6BA5FF] focus:ring-2 focus:ring-blue-400/20 outline-none text-sm text-white bg-[#0f2a45] transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Submit Button matching reference site */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#0166FE] hover:bg-blue-600 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-1 text-center">
                    <span className="text-xs text-neutral-300">
                      Or chat directly on WhatsApp:{' '}
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline font-bold"
                      >
                        +2349014111435
                      </a>
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
