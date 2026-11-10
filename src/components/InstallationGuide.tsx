import React, { useState } from 'react';
import {
  Download,
  Settings,
  CheckCircle,
  HelpCircle,
  Smartphone,
  ShieldCheck,
  ChevronDown,
  AlertTriangle,
  FolderOpen,
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface InstallationGuideProps {
  onDownloadClick: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ onDownloadClick }) => {
  const [selectedAndroidVer, setSelectedAndroidVer] = useState<'14-15' | '13' | '11-12' | '8-10'>('14-15');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <section id="installation" className="py-24 bg-[#0a0d17]/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold text-violet-400 tracking-wider uppercase font-mono">
            SETUP & SIDELOADING
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            How to Install on Android.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            NOVA PLAYER is distributed directly as a standalone Android Package (APK). Follow this simple 4-step
            guide to install and run the player safely on your device.
          </p>
        </div>

        {/* 4 Steps Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold font-mono">
                01
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Download APK
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click the download button on this site to obtain the official <code className="text-violet-300 font-mono">NovaPlayer-{APP_CONFIG.version}.apk</code> package directly to your phone.
              </p>
            </div>
            <button
              onClick={onDownloadClick}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 pt-2 border-t border-slate-800/80"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get APK ({APP_CONFIG.apkSize})</span>
            </button>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono">
                02
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Allow Unknown Apps
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If prompted by Android, tap <strong>Settings</strong> and enable <strong>"Allow from this source"</strong> for your web browser (Chrome, Brave, Firefox) or File Manager.
              </p>
            </div>
            <div className="text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-800/80">
              Android standard security prompt
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold font-mono">
                03
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Tap 'Install'
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open the downloaded file from your notification bar or <code className="text-slate-300 font-mono">/Download</code> folder. Confirm the installation and tap <strong>Install</strong>.
              </p>
            </div>
            <div className="text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-800/80">
              Package Installer completes in ~3s
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-mono">
                04
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Grant Media Access
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                On first launch, grant access to local media files. Nova Player uses standard Scoped Storage to read video & audio files without touching your private documents.
              </p>
            </div>
            <div className="text-[11px] text-emerald-400 font-mono pt-2 border-t border-slate-800/80 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Internet Permissions</span>
            </div>
          </div>
        </div>

        {/* Android Version Specific Guidance Box */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">
                Version-Specific Permission Settings
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Select your Android version to view the exact settings menu path on your device.
              </p>
            </div>

            {/* Version Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedAndroidVer('14-15')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAndroidVer === '14-15'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Android 14 / 15
              </button>
              <button
                onClick={() => setSelectedAndroidVer('13')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAndroidVer === '13'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Android 13
              </button>
              <button
                onClick={() => setSelectedAndroidVer('11-12')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAndroidVer === '11-12'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Android 11 - 12
              </button>
              <button
                onClick={() => setSelectedAndroidVer('8-10')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedAndroidVer === '8-10'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Android 8 - 10
              </button>
            </div>
          </div>

          {/* Version Path Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="font-semibold text-slate-200 block">Sideloading Permission Path</span>
              {selectedAndroidVer === '14-15' && (
                <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                  Settings &gt; Apps &gt; Special app access &gt; Install unknown apps &gt; [Select your Browser / Files] &gt; Toggle "Allow from this source" ON.
                </p>
              )}
              {selectedAndroidVer === '13' && (
                <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                  Settings &gt; Apps &gt; Special app access &gt; Install unknown apps &gt; [Chrome or Files] &gt; Enable "Allow from this source".
                </p>
              )}
              {selectedAndroidVer === '11-12' && (
                <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                  Settings &gt; Apps &amp; notifications &gt; Advanced &gt; Special app access &gt; Install unknown apps &gt; Allow toggle ON.
                </p>
              )}
              {selectedAndroidVer === '8-10' && (
                <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                  Settings &gt; Security (or Biometrics and Security) &gt; Install unknown apps &gt; Tap Browser &gt; Allow from this source.
                </p>
              )}
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="font-semibold text-slate-200 block">Media Permissions Handled</span>
              {selectedAndroidVer === '14-15' && (
                <p className="text-slate-300 leading-relaxed">
                  Utilizes Granular Media Permissions: asks for <code className="text-violet-300 font-mono">READ_MEDIA_VIDEO</code> and <code className="text-violet-300 font-mono">READ_MEDIA_AUDIO</code> with partial media picker option.
                </p>
              )}
              {selectedAndroidVer === '13' && (
                <p className="text-slate-300 leading-relaxed">
                  Separate audio and video permissions without broad storage access, ensuring complete containment.
                </p>
              )}
              {selectedAndroidVer === '11-12' && (
                <p className="text-slate-300 leading-relaxed">
                  Scoped Storage architecture: only reads media collections from device storage and external SD cards.
                </p>
              )}
              {selectedAndroidVer === '8-10' && (
                <p className="text-slate-300 leading-relaxed">
                  Standard <code className="text-violet-300 font-mono">READ_EXTERNAL_STORAGE</code> requested on startup for directory browsing.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Installation Troubleshooting FAQ */}
        <div className="mt-12 space-y-3 max-w-3xl mx-auto">
          <h4 className="text-base font-bold text-white text-center mb-4">
            Common Installation Questions
          </h4>

          <div className="border border-slate-800/80 rounded-xl bg-slate-900/40 overflow-hidden">
            <button
              onClick={() => toggleAccordion('parse-error')}
              className="w-full p-4 text-left flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white"
            >
              <span>"There was a problem parsing the package" error?</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedFaq === 'parse-error' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFaq === 'parse-error' && (
              <div className="p-4 pt-0 text-xs text-slate-400 border-t border-slate-800/60 leading-relaxed space-y-2">
                <p>
                  This usually indicates an incomplete APK download due to network interruption. Delete the partial
                  file and re-download. Ensure your device runs at least Android 8.0 (Oreo).
                </p>
              </div>
            )}
          </div>

          <div className="border border-slate-800/80 rounded-xl bg-slate-900/40 overflow-hidden">
            <button
              onClick={() => toggleAccordion('play-protect')}
              className="w-full p-4 text-left flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white"
            >
              <span>Does Google Play Protect show an "Unrecognized app" dialogue?</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedFaq === 'play-protect' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFaq === 'play-protect' && (
              <div className="p-4 pt-0 text-xs text-slate-400 border-t border-slate-800/60 leading-relaxed space-y-2">
                <p>
                  Because NOVA PLAYER is distributed directly outside the Google Play Store, Play Protect may note
                  that the developer is unrecognized. Tap <strong>"More details"</strong> &gt; <strong>"Install anyway"</strong>.
                  You can verify our cryptographic SHA-256 hash in the Download section below.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
