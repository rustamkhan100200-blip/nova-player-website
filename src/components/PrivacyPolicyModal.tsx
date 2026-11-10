import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, ServerOff, Database } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="bg-[#0e1322] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Constitution</span>
          </div>
          <h3 id="privacy-title" className="text-2xl font-bold text-white tracking-tight font-display">
            NOVA PLAYER Privacy Policy
          </h3>
          <p className="text-xs text-slate-400">
            Last Updated: November 2026 · Effective with {APP_CONFIG.version}
          </p>
        </div>

        {/* Content body */}
        <div className="space-y-5 text-xs text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 flex items-start gap-3">
            <EyeOff className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white text-sm">Zero Data Collection Guarantee</h4>
              <p className="text-xs text-emerald-200/80 mt-1">
                NOVA PLAYER does not collect, transmit, store, or sell any personal data, media metadata, file names,
                device identifiers, IP addresses, or viewing habits. All operations happen 100% locally on your device.
              </p>
            </div>
          </div>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-white">1. Local Device Permissions</h4>
            <p>
              To locate and play your video and audio tracks, NOVA PLAYER requests access strictly to media files stored
              on your internal storage or MicroSD card:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>
                <strong className="text-slate-200">READ_MEDIA_VIDEO / READ_MEDIA_AUDIO</strong>: Required to query your local media store for audio and video assets.
              </li>
              <li>
                <strong className="text-slate-200">Scoped Storage</strong>: The app conforms to Android Scoped Storage standards and never accesses contacts, location, camera, or documents outside media directories.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-white">2. Network Activity & Telemetry</h4>
            <p>
              NOVA PLAYER does not contain any third-party analytics SDKs (such as Firebase Analytics, Google Analytics, or Adjust),
              crash reporters that transmit stack traces to external servers, or advertising networks. The app has zero network permissions declared.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-white">3. Local Application Data</h4>
            <p>
              Playlists, playback resume markers, and equalizer presets are stored exclusively in your device's private app sandbox.
              Clearing app data or uninstalling the application completely erases all local configuration.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-white">4. Contact & Inquiries</h4>
            <p>
              If you have any questions about this privacy statement, you can reach out directly to the team at{' '}
              <a href={`mailto:${APP_CONFIG.contactEmail}`} className="text-violet-400 hover:underline">
                {APP_CONFIG.contactEmail}
              </a>.
            </p>
          </section>

        </div>

        {/* Footer action */}
        <div className="pt-2 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
