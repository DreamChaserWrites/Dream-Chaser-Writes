import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilitiesTicker } from './components/CapabilitiesTicker';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BetaReadingGenreSection } from './components/BetaReadingGenreSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ServicePillarId } from './config/siteConfig';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [configGuideOpen, setConfigGuideOpen] = useState(false);
  const [portfolioDefaultPillar, setPortfolioDefaultPillar] = useState<ServicePillarId>('book-services');

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

  const handleViewPortfolio = (categoryPillar?: string) => {
    if (categoryPillar === 'social-media' || categoryPillar === 'book-services' || categoryPillar === 'web-design') {
      setPortfolioDefaultPillar(categoryPillar as ServicePillarId);
    }
    scrollToSection('portfolio');
  };

  return (
    <div className="min-h-screen bg-[#070F1B] text-[#FAF9F5] flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onViewPortfolio={handleViewPortfolio}
          onStartJourney={(service) => handleOpenInquiry(service)}
        />

        {/* 3. Capabilities Ticker */}
        <CapabilitiesTicker />

        {/* 4. About Section */}
        <AboutSection
          onExploreServices={() => scrollToSection('services')}
          onStartJourney={() => handleOpenInquiry()}
        />

        {/* 5. Services Section (Segment 1: Beta Reading & Books FIRST!) */}
        <ServicesSection onInquire={handleOpenInquiry} />

        {/* 6. Extensive Beta Reading Genre Specialization Section (All 15 Genres) */}
        <BetaReadingGenreSection
          onSelectGenre={(genreName) => handleOpenInquiry(`Beta Reading: ${genreName} Manuscript`)}
        />

        {/* 7. Segmented Portfolio (Segment 1: Beta Reading with Genre Sub-filters) */}
        <PortfolioSection
          defaultPillar={portfolioDefaultPillar}
          onInquire={handleOpenInquiry}
        />

        {/* 8. Client Feedback / Testimonials */}
        <TestimonialsSection />

        {/* 9. Interactive FAQ Accordion */}
        <FAQSection />

        {/* 10. Contact & Inquiry Section with Genre Selector */}
        <ContactSection
          initialService={inquiryService}
          onOpenConfigGuide={() => setConfigGuideOpen(false)}
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

      {/* Floating WhatsApp Quick Action (+2349014111435) */}
      <WhatsAppFloatingButton />

      {/* Legal Dialog */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Studio Owner Guide */}
      <ConfigGuideModal
        isOpen={configGuideOpen}
        onClose={() => setConfigGuideOpen(false)}
      />
    </div>
  );
}
