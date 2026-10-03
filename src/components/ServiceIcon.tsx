import React from 'react';
import {
  PenTool,
  FileCheck,
  BookOpen,
  Palette,
  Tablet,
  Compass,
  Quote,
  ScrollText,
  BookMarked,
  Layout,
  ShoppingBag,
  Wrench,
  Share2,
  Feather,
  Globe
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Layout':
      return <Layout className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Share2':
      return <Share2 className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Feather':
      return <Feather className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'PenTool':
      return <PenTool className={className} />;
    case 'FileCheck':
      return <FileCheck className={className} />;
    case 'Tablet':
      return <Tablet className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Quote':
      return <Quote className={className} />;
    case 'ScrollText':
      return <ScrollText className={className} />;
    default:
      return <BookMarked className={className} />;
  }
};
