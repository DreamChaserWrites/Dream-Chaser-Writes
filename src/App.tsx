import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [configGuideOpen, setConfigGuideOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInquiryService(serviceTitle);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E232A] flex flex-col font-sans selection:bg-[#D4AF37]/25 selection:text-[#0C121C]">
      {/* 1. Header & Navigation (Strict 3-zone Top Bar Contract) */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onStartJourney={() => handleOpenInquiry()}
        />

        {/* 3. Services Section */}
        <ServicesSection onInquire={handleOpenInquiry} />

        {/* 4. About the Brand Section */}
        <AboutSection onStartJourney={() => handleOpenInquiry()} />

        {/* 5. Four-Step Author Process */}
        <ProcessSection onStartProcess={() => handleOpenInquiry("Share Your Vision")} />

        {/* 6. Portfolio & Book Showcase */}
        <PortfolioSection onInquire={handleOpenInquiry} />

        {/* 7. Why Choose Dream Chaser Writes */}
        <WhyChooseUs />

        {/* 8. Testimonials Section (Cleanly hidden or populated without fake reviews) */}
        <TestimonialsSection />

        {/* 9. Blog — The Writer's Corner */}
        <BlogSection onInquire={handleOpenInquiry} />

        {/* 10. Contact & Client Inquiry System */}
        <ContactSection
          initialService={inquiryService}
          onOpenConfigGuide={() => setConfigGuideOpen(true)}
        />

        {/* 11. Official Social Media Profiles */}
        <SocialSection />
      </main>

      {/* 12. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenConfigGuide={() => setConfigGuideOpen(true)}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloatingButton />

      {/* Legal Privacy / Terms Dialog */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Studio Owner Setup & Deployment Guide */}
      <ConfigGuideModal
        isOpen={configGuideOpen}
        onClose={() => setConfigGuideOpen(false)}
      />
    </div>
  );
}
