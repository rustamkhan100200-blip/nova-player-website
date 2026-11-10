export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  icon: string;
  badge?: string;
  highlight?: boolean;
}

export interface ScreenshotSlide {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'video' | 'audio' | 'controls' | 'system';
  features: string[];
  previewType: 'video-player' | 'audio-player' | 'pip-mode' | 'subtitles' | 'media-library' | 'playlists';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'codecs' | 'privacy' | 'technical';
}

export interface InstallStep {
  step: number;
  title: string;
  description: string;
  tip: string;
  androidDetail: string;
}
