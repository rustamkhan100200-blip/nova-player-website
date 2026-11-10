import React from 'react';
import { Play, ArrowUp, Download, ExternalLink } from 'lucide-react';
import { APP_CONFIG, WHATSAPP_SUPPORT_URL, WHATSAPP_SUPPORT_NUMBER } from '../config/appConfig';

interface FooterProps {
  onDownloadClick: () => void;
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onDownloadClick,
  onOpenPrivacy,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info (5 cols on md) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white">
                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
              </div>
              <span className="text-base font-bold font-display tracking-tight text-white">
                {APP_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Official website for NOVA PLAYER. Built for pure local audio and video playback on Android devices with
              zero telemetry, complete hardware acceleration, and intuitive gesture controls.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Current Package: {APP_CONFIG.packageId} · {APP_CONFIG.version}
            </div>
          </div>

          {/* Navigation Links (3 cols on md) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features &amp; Codecs</a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-white transition-colors">App Screenshots</a>
              </li>
              <li>
                <a href="#installation" className="hover:text-white transition-colors">Installation Instructions</a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">Download Official APK</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Legal & Support (4 cols on md) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Support &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy &amp; Scoped Storage
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Development Team
                </button>
              </li>
              <li>
                <a
                  href={WHATSAPP_SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-slate-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                  <span>WhatsApp: +{WHATSAPP_SUPPORT_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Email: {APP_CONFIG.contactEmail}</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onDownloadClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK ({APP_CONFIG.apkSize})</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} NOVA PLAYER Project. All rights reserved. Android is a trademark of Google LLC.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 rounded-md"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
