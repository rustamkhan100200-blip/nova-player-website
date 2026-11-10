import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Cpu, Smartphone, Sliders } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Does NOVA PLAYER require an internet connection or account?',
    answer:
      'No. NOVA PLAYER is a 100% offline local media player. It does not require user registration, cloud login, or an active network connection. The app contains zero tracking pixels, ad networks, or telemetry collectors.',
  },
  {
    id: 'faq-2',
    category: 'codecs',
    question: 'Which video and audio formats are supported natively?',
    answer:
      'NOVA PLAYER supports MKV, MP4, WebM, AVI, TS, and MOV containers. It leverages hardware decoding for AV1, HEVC (H.265), AVC (H.264), and VP9, paired with native playback for FLAC, ALAC, Opus, AAC, and MP3 audio up to 24-bit/192kHz.',
  },
  {
    id: 'faq-3',
    category: 'technical',
    question: 'How do gesture seeking and brightness controls work?',
    answer:
      'Touch gestures are designed for natural one-handed navigation. Swipe horizontally anywhere on the screen to scrub forwards or backwards through the timeline. Swipe vertically along the left edge to adjust display luminance, and along the right edge to adjust audio volume without interrupting video playback.',
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: 'Can I play audio in the background or with the screen off?',
    answer:
      'Yes. NOVA PLAYER implements Android MediaSession and Foreground Audio Service APIs. When you minimize the app or lock your screen, playback continues seamlessly with media controls accessible on your lock screen and notification tray.',
  },
  {
    id: 'faq-5',
    category: 'codecs',
    question: 'Does NOVA PLAYER render stylized anime ASS/SSA subtitles correctly?',
    answer:
      'Yes. NOVA PLAYER embeds a specialized subtitle rasterization engine that respects font styles, positioned dialogue, karaoke effects, and custom colors present in advanced ASS and SSA subtitle files, as well as standard SRT and WebVTT tracks.',
  },
  {
    id: 'faq-6',
    category: 'privacy',
    question: 'What device permissions does NOVA PLAYER request?',
    answer:
      'NOVA PLAYER only requests permission to read local media files (READ_MEDIA_VIDEO and READ_MEDIA_AUDIO on Android 13+, or READ_EXTERNAL_STORAGE on earlier Android versions). It does not request internet access, location, camera, contacts, or microphone permissions.',
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Why is NOVA PLAYER distributed as an APK rather than only on the Play Store?',
    answer:
      'Distributing directly as a verified APK allows us to deliver bit-perfect audio decoders and full hardware acceleration without proprietary store restrictions, telemetry mandates, or bundled advertising frameworks. Every APK is cryptographically signed with our verified release key.',
  },
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0d17]/80 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold text-violet-400 tracking-wider uppercase font-mono">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Everything You Need to Know.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Transparent answers regarding codecs, device permissions, and the architecture of NOVA PLAYER.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-colors duration-150 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-violet-500/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl"
                >
                  <span className="text-base font-semibold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-violet-600/20 text-violet-300' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
