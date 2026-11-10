import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  HardDrive,
  Cpu,
  Layers,
  FileCode,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { APP_CONFIG, APK_DOWNLOAD_URL, getDownloadAction } from '../config/appConfig';

interface DownloadSectionProps {
  onDownloadClick: () => void;
  activeDownloadUrl?: string;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onDownloadClick,
  activeDownloadUrl,
}) => {
  const [copiedChecksum, setCopiedChecksum] = useState(false);
  const action = getDownloadAction(activeDownloadUrl);

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(APP_CONFIG.sha256);
    setCopiedChecksum(true);
    setTimeout(() => setCopiedChecksum(false), 2000);
  };

  return (
    <section id="download" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold text-violet-400 tracking-wider uppercase font-mono">
            OFFICIAL RELEASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Get NOVA PLAYER for Android.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Free, offline, and self-contained. No subscriptions, in-app purchases, or telemetry tracking.
          </p>
        </div>

        {/* Central Release Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0e1322] via-slate-900 to-[#0c101d] border border-violet-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Row: Version & Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {APP_CONFIG.version}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-violet-950/80 border border-violet-700/60 text-violet-300">
                  Universal APK
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Release Date: {APP_CONFIG.releaseDate} · Package: <span className="font-mono text-slate-300">{APP_CONFIG.packageId}</span>
              </p>
            </div>

            {/* Current Download State Badge */}
            <div className="flex items-center gap-2">
              {!action.isAvailable ? (
                <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-800/50 px-3 py-1.5 rounded-xl">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Download Coming Soon</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Asset Ready</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1">
              <span className="text-slate-400 block">File Size</span>
              <span className="text-sm font-bold text-white font-mono tabular-nums">{APP_CONFIG.apkSize}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1">
              <span className="text-slate-400 block">Min Requirement</span>
              <span className="text-sm font-bold text-white font-mono">{APP_CONFIG.minAndroid.split(' ')[0]} {APP_CONFIG.minAndroid.split(' ')[1]}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1">
              <span className="text-slate-400 block">Target OS</span>
              <span className="text-sm font-bold text-white font-mono">Android 14 / 15</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1">
              <span className="text-slate-400 block">ABI Architectures</span>
              <span className="text-sm font-bold text-white font-mono">ARM64 & x86</span>
            </div>
          </div>

          {/* Prominent Download Button */}
          <div className="space-y-4">
            {action.isAvailable ? (
              <a
                href={action.url}
                download
                className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 rounded-2xl shadow-xl shadow-violet-600/30 transition-all active:scale-[0.99] text-center"
              >
                <Download className="w-5 h-5" />
                <span>Download APK directly ({APP_CONFIG.apkSize})</span>
              </a>
            ) : (
              <button
                onClick={onDownloadClick}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-violet-600/90 via-indigo-600/90 to-blue-600/90 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 rounded-2xl shadow-xl shadow-violet-600/20 transition-all active:scale-[0.99]"
              >
                <Download className="w-5 h-5" />
                <span>Download APK for Android ({APP_CONFIG.apkSize})</span>
              </button>
            )}

            {/* Explanatory status text */}
            <p className="text-center text-xs text-slate-400">
              {!action.isAvailable
                ? 'Official v1.0.0-beta APK is undergoing cryptographic signature verification. Click button for release alert.'
                : 'Direct asset download points straight to the verified APK binary without third-party redirects.'}
            </p>
          </div>

          {/* Cryptographic SHA-256 Checksum Verification Box */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">
                Official SHA-256 Checksum
              </span>
              <button
                onClick={handleCopyChecksum}
                className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors font-mono"
              >
                {copiedChecksum ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Hash</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 break-all select-all">
              {APP_CONFIG.sha256}
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              Verify integrity on Linux/macOS via <code className="text-slate-400 font-mono">sha256sum NovaPlayer.apk</code> or on Windows via <code className="text-slate-400 font-mono">Get-FileHash NovaPlayer.apk</code>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
