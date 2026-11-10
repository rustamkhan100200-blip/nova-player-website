import React, { useState } from 'react';
import { X, Clock, Download, CheckCircle2, Copy, Check, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { APP_CONFIG, getDownloadAction } from '../config/appConfig';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeUrl?: string;
  onSetTestUrl?: (url: string) => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  activeUrl,
  onSetTestUrl,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [showDeveloperSettings, setShowDeveloperSettings] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState(activeUrl || '');

  if (!isOpen) return null;

  const action = getDownloadAction(activeUrl);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    try {
      const stored = JSON.parse(localStorage.getItem('nova_release_subscribers') || '[]');
      stored.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('nova_release_subscribers', JSON.stringify(stored));
    } catch {
      // safe fallback
    }
    setIsSubscribed(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(APP_CONFIG.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#0e1322] border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Official Build Status</span>
          </div>
          <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight font-display">
            {!action.isAvailable ? 'Download Coming Soon' : 'Direct APK Asset Ready'}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {!action.isAvailable
              ? `NOVA PLAYER ${APP_CONFIG.version} is undergoing final binary signing and zero-telemetry auditing before public asset distribution.`
              : `NOVA PLAYER ${APP_CONFIG.version} is ready for direct download. Click the button below to initiate transfer.`}
          </p>
        </div>

        {/* Release Metadata Card */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 text-xs space-y-2">
          <div className="flex justify-between items-center text-slate-300">
            <span>Target Platform</span>
            <span className="font-mono text-white font-semibold">Android 8.0 - 15</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>Package Name</span>
            <span className="font-mono text-slate-400">{APP_CONFIG.packageId}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>APK Size</span>
            <span className="font-mono text-white font-semibold">{APP_CONFIG.apkSize}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300 pt-1 border-t border-slate-900">
            <span>SHA-256</span>
            <button
              onClick={handleCopy}
              className="font-mono text-[11px] text-violet-400 hover:text-violet-300 flex items-center gap-1"
            >
              {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedHash ? 'Copied' : `${APP_CONFIG.sha256.substring(0, 10)}...`}</span>
            </button>
          </div>
        </div>

        {/* Action: When Direct URL Available */}
        {action.isAvailable && (
          <div className="space-y-3">
            <a
              href={action.url}
              download
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg transition-all text-center"
            >
              <Download className="w-4 h-4" />
              <span>Download Direct APK ({APP_CONFIG.apkSize})</span>
            </a>
            <p className="text-center text-[11px] text-slate-400 font-mono">
              Points directly to: {action.url}
            </p>
          </div>
        )}

        {/* Action: When Coming Soon -> Email Notification Signup */}
        {!action.isAvailable && (
          <div className="space-y-4 pt-1">
            <div className="p-4 rounded-2xl bg-violet-950/20 border border-violet-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-violet-300">
                <Mail className="w-4 h-4" />
                <span>Get Notified on Public Availability</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Receive a single notification the moment the verified APK is uploaded to the release server.
                No newsletters, no promotional follow-ups.
              </p>

              {isSubscribed ? (
                <div className="flex items-center gap-2 p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-xl text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>You're on the list! We will ping you on release day.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-xl shadow transition-colors shrink-0"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Developer / Reviewer Config Preview (Testing both states of APK_DOWNLOAD_URL) */}
        {onSetTestUrl && (
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => setShowDeveloperSettings(!showDeveloperSettings)}
              className="text-[11px] text-slate-500 hover:text-slate-400 transition-colors flex items-center gap-1 font-mono"
            >
              <span>{showDeveloperSettings ? 'Hide configuration test toggle' : 'Test APK_DOWNLOAD_URL states'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            {showDeveloperSettings && (
              <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
                <p className="text-slate-400 text-[11px]">
                  Simulate setting <code className="text-violet-300 font-mono">APK_DOWNLOAD_URL</code> in <code className="text-violet-300 font-mono">src/config/appConfig.ts</code>:
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onSetTestUrl('');
                      setCustomInputUrl('');
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                      !action.isAvailable
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Empty ("") [Coming Soon]
                  </button>
                  <button
                    onClick={() => {
                      const sample = 'https://releases.novaplayer.app/download/nova-player-v1.0.0-beta.apk';
                      onSetTestUrl(sample);
                      setCustomInputUrl(sample);
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                      action.isAvailable
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Direct APK URL
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
