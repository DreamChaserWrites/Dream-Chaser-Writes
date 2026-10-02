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
  HelpCircle,
  Sparkles
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
  const [service, setService] = useState(initialService || SITE_CONFIG.services[0]?.title || '');
  const [bookTitle, setBookTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [preferredContact, setPreferredContact] = useState<'Email' | 'WhatsApp' | 'Phone'>('Email');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    inquiryId: string;
    message: string;
    submittedAt: string;
  } | null>(null);

  // Sync initialService if changed from parent
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Frontend validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address so we can reply.');
      return;
    }

    if (!service) {
      setErrorMessage('Please select a service of interest.');
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      setErrorMessage('Please provide a brief description of your project (minimum 10 characters).');
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
          service,
          bookTitle: bookTitle.trim() || null,
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
    setBookTitle('');
    setBudget('');
    setErrorMessage(null);
  };

  // WhatsApp link logic
  const hasWhatsapp = Boolean(SITE_CONFIG.whatsappNumber && SITE_CONFIG.whatsappNumber.trim().length > 4);
  const whatsappUrl = hasWhatsapp
    ? `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`
    : null;

  return (
    <section id="contact" className="py-24 bg-[#FAF9F5] text-[#1E232A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#967417] font-semibold mb-3">
            <span className="w-6 h-[1.5px] bg-[#967417]" />
            <span>Begin Your Project</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B101B] mb-4">
            Let's Discuss Your Book
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Whether you have an outline, a completed first draft, or need complete guidance from step one, submit your inquiry below. We review every brief thoroughly and reply within 1–2 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-lg">
              
              {successData ? (
                /* Success State */
                <div className="text-left space-y-6 py-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded">
                      Inquiry Received · Ref: {successData.inquiryId}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B101B] mt-3 mb-2">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light">
                      {successData.message}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-2 text-neutral-600">
                    <div className="flex justify-between">
                      <span className="font-medium text-neutral-800">Selected Service:</span>
                      <span>{service}</span>
                    </div>
                    {bookTitle && (
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-800">Book Working Title:</span>
                        <span>{bookTitle}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium text-neutral-800">Preferred Reply Method:</span>
                      <span>{preferredContact}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: WhatsApp Number & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        WhatsApp Number <span className="text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredContact" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        value={preferredContact}
                        onChange={(e) => setPreferredContact(e.target.value as any)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors cursor-pointer"
                      >
                        <option value="Email">Email</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone">Phone Call</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Service of Interest & Working Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Service of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors cursor-pointer"
                      >
                        {SITE_CONFIG.services.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Full Book Publishing Package">Full Book Publishing Package</option>
                        <option value="General Literary Inquiry / Other">General Literary Inquiry / Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bookTitle" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Book Working Title <span className="text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="bookTitle"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                        placeholder="e.g. Chronicles of the Meadow"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Estimated Budget / Investment Range <span className="text-neutral-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g. Flexible / $500 – $1,500 / Requesting Quote"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Project Description & Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us about your book genre, current progress (concept, partial draft, or finished manuscript), estimated word count, and what kind of support you are seeking."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-neutral-900 bg-[#FAF9F5]/40 transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-start gap-2.5 text-xs text-neutral-500">
                    <Shield className="w-4 h-4 text-[#967417] mt-0.5 shrink-0" />
                    <span>
                      Your manuscript details and personal information are strictly confidential and will never be shared or used for any purpose other than evaluating your project inquiry.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-[#0B101B] bg-gradient-to-r from-[#D4AF37] via-[#E4C569] to-[#D4AF37] hover:brightness-110 active:brightness-95 rounded-xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Right Information Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Direct Contact Card */}
            <div className="p-8 rounded-2xl bg-[#0B101B] text-white border border-[#D4AF37]/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  Direct Communications
                </span>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Studio Inquiry Desk
                </h3>
              </div>

              <div className="space-y-4 text-sm text-neutral-300 font-light">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-neutral-400 block font-normal">Official Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      className="text-white hover:text-[#D4AF37] transition-colors font-medium"
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-neutral-400 block font-normal">Consultation Hours</span>
                    <span>{SITE_CONFIG.businessHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-neutral-400 block font-normal">Service Scope</span>
                    <span>{SITE_CONFIG.businessLocation}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct chat button */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-neutral-400 block mb-2 font-light">
                  Prefer instant messaging?
                </span>
                {hasWhatsapp && whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                ) : (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Inquiries</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">
                      WhatsApp direct chat is ready. Enter your phone number in <code className="text-[#D4AF37]">siteConfig.ts</code> to activate one-click messaging for your readers.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Integration Notice & Confidence Guarantee */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#967417]" />
                <span>Backend Submission Guarantee</span>
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Inquiries submitted here are validated server-side and recorded immediately in the system log. If you connect an automated email service like Formspree or SendGrid, alerts will be instantly routed to your personal inbox.
              </p>
              {onOpenConfigGuide && (
                <button
                  onClick={onOpenConfigGuide}
                  className="text-xs font-medium text-[#967417] hover:underline flex items-center gap-1 pt-1 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>View Customization & Deployment Guide</span>
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
