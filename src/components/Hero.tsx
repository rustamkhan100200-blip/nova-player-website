import React from 'react';
import { Download, ShieldCheck, Cpu, HardDrive, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { InteractiveDevicePreview } from './InteractiveDevicePreview';

interface HeroProps {
  onDownloadClick: () => void;
  onExploreFeatures: () => void;
  onViewInstallGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDownloadClick,
  onExploreFeatures,
  onViewInstallGuide,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Unboxed Metadata Kicker (Anti-slop zero pill discipline) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-xs font-medium text-slate-400">
              <span className="text-violet-400 font-semibold tracking-wider">NOVA PLAYER FOR ANDROID</span>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <span>100% Offline</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Zero Telemetry</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="font-mono text-slate-300">{APP_CONFIG.version}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white text-balance leading-[1.1]">
              Your Media.{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Your Freedom.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A high-performance local media player engineered exclusively for Android.
              Play ultra-high bitrate 4K video, lossless audio, and complex subtitles with
              hardware-accelerated speed, gesture controls, and total data privacy.
            </p>

            {/* Technical Verification Highlights (Quiet inline proofs) */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Trackers or Ad SDKs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Hardware AV1 & HEVC Decoding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Scoped Storage Compliant</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onDownloadClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 rounded-xl shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Download className="w-5 h-5" />
                <span>Download APK for Android</span>
              </button>

              <button
                onClick={onViewInstallGuide}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Installation Guide</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Release Specifications Strip */}
            <div className="pt-3 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2 font-mono tabular-nums">
              <span>{APP_CONFIG.apkSize}</span>
              <span aria-hidden="true">·</span>
              <span>Min {APP_CONFIG.minAndroid.split(' ')[0]} {APP_CONFIG.minAndroid.split(' ')[1]}</span>
              <span aria-hidden="true">·</span>
              <span>Universal APK</span>
            </div>
          </div>

          {/* Right Column: Interactive Android Device Preview (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveDevicePreview />
          </div>

        </div>
      </div>
    </section>
  );
};
