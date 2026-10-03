import React, { useState } from 'react';
import { X, ExternalLink, Laptop, Tablet, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WebProject, SocialProject, BookProject } from '../config/siteConfig';

type AnyProject =
  | { type: 'web'; data: WebProject }
  | { type: 'social'; data: SocialProject }
  | { type: 'book'; data: BookProject };

interface ProjectPreviewModalProps {
  project: AnyProject | null;
  onClose: () => void;
  onInquire: (serviceTitle?: string) => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0A1626] text-[#FAF9F5] border border-blue-500/30 rounded-2xl max-w-4xl w-full p-5 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {project.type === 'web' && `${project.data.cmsPlatform} · ${project.data.clientType}`}
                {project.type === 'social' && `Social Media · ${project.data.niche}`}
                {project.type === 'book' && `Book Services · ${project.data.genre}`}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              {project.data.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.type === 'web' && project.data.liveUrl && project.data.liveUrl !== '#' && (
              <a
                href={project.data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Device Switcher for Web Projects */}
        {project.type === 'web' && (
          <div className="flex items-center justify-between mb-4 bg-white/5 p-2 rounded-xl">
            <span className="text-xs text-neutral-400 font-light hidden sm:inline">
              Interactive Responsive Viewport
            </span>
            <div className="flex items-center gap-1 mx-auto sm:mx-0">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  deviceView === 'desktop' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  deviceView === 'tablet' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet</span>
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  deviceView === 'mobile' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>
          </div>
        )}

        {/* Visual Mockup Container */}
        <div className="flex justify-center mb-6 bg-[#060D17] rounded-xl p-4 sm:p-6 border border-white/10 overflow-hidden">
          <div
            className={`transition-all duration-300 overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black ${
              project.type === 'web'
                ? deviceView === 'desktop'
                  ? 'w-full aspect-[16/9]'
                  : deviceView === 'tablet'
                  ? 'w-[75%] aspect-[4/3]'
                  : 'w-[42%] aspect-[9/16]'
                : 'w-full max-w-lg aspect-[4/3]'
            }`}
          >
            <img
              src={project.data.imageUrl}
              alt={project.data.title}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.currentTarget;
                if (project.type === 'web') {
                  if (project.data.clientType === 'Ecommerce') target.src = '/images/web_ecommerce_store.jpg';
                  else if (project.data.clientType === 'Business') target.src = '/images/web_business_booking.jpg';
                  else if (project.data.clientType === 'Author & Personal') target.src = '/images/web_author_speaker.jpg';
                  else if (project.data.clientType === 'Nonprofit') target.src = '/images/web_nonprofit_portal.jpg';
                  else if (project.data.clientType === 'Blog') target.src = '/images/web_editorial_blog.jpg';
                  else target.src = '/images/web_event_summit.jpg';
                } else if (project.type === 'social') {
                  if (project.data.niche === 'E-commerce & Retail') target.src = '/images/social_skincare_feed.jpg';
                  else if (project.data.niche === 'Lifestyle & Author Brand') target.src = '/images/social_author_booktok.jpg';
                  else if (project.data.niche === 'Creative Agency') target.src = '/images/social_creative_studio.jpg';
                  else target.src = '/images/social_events_dining.jpg';
                } else {
                  target.src = '/images/beta_reading_showcase.jpg';
                }
              }}
            />
          </div>
        </div>

        {/* Project Details Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Project Overview
            </h3>
            <p className="text-sm text-neutral-200 leading-relaxed font-light">
              {project.data.description}
            </p>
          </div>

          {/* Key Outcome / Metrics */}
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm text-blue-200 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-semibold text-white block">Key Result / Outcome:</span>
              <span>
                {project.type === 'web' && project.data.featuredOutcome}
                {project.type === 'social' && project.data.featuredOutcome}
                {project.type === 'book' && project.data.authorOutcome}
              </span>
            </div>
          </div>

          {/* Specific feedback notes for Book Projects */}
          {project.type === 'book' && (
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
                Sample Reader Feedback Delivered:
              </span>
              <ul className="space-y-1.5 text-xs text-neutral-300 font-light">
                {project.data.keyFeedbackProvided.map((fb, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{fb}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {'tags' in project.data && project.data.tags.map((t, i) => (
              <span key={i} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            {project.type === 'web' && `Ready to launch a ${project.data.cmsPlatform} website?`}
            {project.type === 'social' && `Want this aesthetic for your brand?`}
            {project.type === 'book' && `Ready to get constructive reader feedback?`}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.type === 'web' && project.data.liveUrl && project.data.liveUrl !== '#' && (
              <a
                href={project.data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden px-4 py-2.5 rounded-lg bg-white/10 text-white text-xs font-medium"
              >
                Visit Live
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onInquire(project.data.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
