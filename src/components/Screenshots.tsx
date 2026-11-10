import React, { useState } from 'react';
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Film,
  Music,
  Layers,
  Subtitles,
  Folder,
  ListMusic,
  Check,
  Info,
} from 'lucide-react';
import { ScreenshotSlide } from '../types';

const SCREENSHOT_SLIDES: ScreenshotSlide[] = [
  {
    id: 'screen-video',
    title: 'Ultra HD Video Player HUD',
    tagline: 'Precision On-Screen Gestures & Dual Stream Control',
    category: 'video',
    description:
      'Immersive full-screen playback with floating gesture sliders for volume and display luminance. Instant aspect ratio switching and chapter markers.',
    features: [
      'Swipe left vertical edge for brightness (0-100%)',
      'Swipe right vertical edge for volume with boost curve',
      'Dynamic aspect ratios (Fit, Fill, 16:9, 21:9 CinemaScope)',
    ],
    previewType: 'video-player',
  },
  {
    id: 'screen-audio',
    title: 'Lossless Hi-Res Audio Player',
    tagline: 'Bit-Perfect Playback with 10-Band EQ & Waveform',
    category: 'audio',
    description:
      'Studio-grade music playback showing real-time frequency visualizer, album cover artwork, dynamic audio sample rate (24-bit/96kHz), and gapless queuing.',
    features: [
      'Interactive 10-band parametric equalizer presets',
      'Real-time audio frequency visualizer spectrum',
      'Gapless playback transition with crossfade timer',
    ],
    previewType: 'audio-player',
  },
  {
    id: 'screen-pip',
    title: 'Floating Picture-in-Picture (PiP)',
    tagline: 'Seamless Android Multitasking & Background Stream',
    category: 'controls',
    description:
      'Keep watching video clips in a resizable, drag-anywhere floating overlay while browsing other applications or keeping notes.',
    features: [
      'Native Android Picture-in-Picture API support',
      'Background audio service when screen is locked',
      'Floating player controls with 10s seek forward/back',
    ],
    previewType: 'pip-mode',
  },
  {
    id: 'screen-subtitles',
    title: 'Advanced Subtitle & Audio Track Engine',
    tagline: 'Fine-tuned SSA/ASS Typography & Sync Offset',
    category: 'controls',
    description:
      'Comprehensive subtitle customizer allowing micro-second synchronization adjustment, custom system font selection, outline contrast, and multi-track audio switching.',
    features: [
      'ASS/SSA anime stylized typography rendering',
      'Micro-second manual audio/subtitle sync offset',
      'External SRT/VTT file import with encoding auto-detect',
    ],
    previewType: 'subtitles',
  },
  {
    id: 'screen-library',
    title: 'Native Media Library & Folder Vault',
    tagline: 'Scoped Storage Explorer without Cloud Syncing',
    category: 'system',
    description:
      'Fast, local-only media explorer that categorizes movies, series, albums, and voice memos directly from your device storage or MicroSD card.',
    features: [
      'Zero background indexing or telemetry tracking',
      'Folder tree view with hidden folder exclusion (.nomedia)',
      'Thumbnail caching stored in private app sandbox',
    ],
    previewType: 'media-library',
  },
  {
    id: 'screen-playlist',
    title: 'Queue & Playlist Architect',
    tagline: 'Fast Reordering & Local M3U8 Export',
    category: 'system',
    description:
      'Assemble on-the-fly queues, save recurring music sets, and export playlist manifests directly to your phone storage.',
    features: [
      'Drag-and-drop song and video sequence rearrangement',
      'Smart resume point remembers last played index',
      'Universal M3U / M3U8 playlist import and export',
    ],
    previewType: 'playlists',
  },
];

export const Screenshots: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentSlide = SCREENSHOT_SLIDES[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? SCREENSHOT_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === SCREENSHOT_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="py-24 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold text-violet-400 tracking-wider uppercase font-mono">
            APP INTERFACE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Screenshots & Interface Gallery.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Engineered with a minimalist dark layout that stays out of your way. Explore the core interface
            screens of NOVA PLAYER running on Android.
          </p>
        </div>

        {/* Carousel & Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Left Column: Screen Selector & Descriptions (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Screen Tab Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
              {SCREENSHOT_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-left p-3 rounded-xl transition-all border text-xs ${
                    selectedIndex === idx
                      ? 'bg-violet-600/15 border-violet-500 text-white shadow-sm'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200 truncate">
                    {slide.previewType === 'video-player' && <Film className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                    {slide.previewType === 'audio-player' && <Music className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                    {slide.previewType === 'pip-mode' && <Layers className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                    {slide.previewType === 'subtitles' && <Subtitles className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                    {slide.previewType === 'media-library' && <Folder className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                    {slide.previewType === 'playlists' && <ListMusic className="w-3.5 h-3.5 text-violet-400 shrink-0" />}
                    <span className="truncate">
                      {slide.previewType === 'video-player' && '4K Video HUD'}
                      {slide.previewType === 'audio-player' && 'Hi-Res Audio'}
                      {slide.previewType === 'pip-mode' && 'PiP Multitask'}
                      {slide.previewType === 'subtitles' && 'Subtitles'}
                      {slide.previewType === 'media-library' && 'Media Library'}
                      {slide.previewType === 'playlists' && 'Playlists'}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Screen Details */}
            <div className="space-y-4 pt-2">
              <div>
                <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block mb-1">
                  Screen {selectedIndex + 1} of {SCREENSHOT_SLIDES.length}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {currentSlide.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-1">
                  {currentSlide.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {currentSlide.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 tabular-nums">
                  0{selectedIndex + 1} / 0{SCREENSHOT_SLIDES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="ml-auto flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Full Screen</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Phone Display Frame & Mockup (7 cols on lg) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[380px] bg-[#0c101d] rounded-[38px] p-3 shadow-2xl border border-slate-800 ring-1 ring-white/10">
              
              {/* Device Notch / Camera */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-3 h-3 rounded-full bg-black ring-1 ring-slate-800" />

              {/* Device Screen Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-slate-950 aspect-[9/18.5] flex flex-col border border-slate-900/60 shadow-inner">
                
                {/* Status Bar */}
                <div className="w-full px-5 pt-3 pb-2 flex items-center justify-between text-[10px] text-slate-400 font-mono z-20">
                  <span>10:30</span>
                  <div className="flex items-center gap-1">
                    <span>VoLTE</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Simulated Screen Body based on selected preview type */}
                <div className="flex-1 p-3 flex flex-col justify-between overflow-hidden relative">
                  
                  {/* CASE 1: VIDEO PLAYER */}
                  {currentSlide.previewType === 'video-player' && (
                    <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-indigo-950/40 to-black rounded-2xl p-3 border border-white/5 relative">
                      <div className="flex justify-between items-center text-[10px] text-white">
                        <span className="font-semibold truncate max-w-[140px]">Dune_Part2_IMAX_4K.mkv</span>
                        <span className="px-1.5 py-0.5 bg-violet-600 rounded text-[9px] font-mono">21:9</span>
                      </div>
                      
                      {/* Gestures representation */}
                      <div className="flex justify-between items-center my-auto px-2">
                        <div className="bg-black/70 backdrop-blur px-2 py-1.5 rounded-lg border border-white/10 text-[9px] text-amber-300">
                          Luminance 85%
                        </div>
                        <div className="bg-black/70 backdrop-blur px-2 py-1.5 rounded-lg border border-white/10 text-[9px] text-violet-300">
                          Volume 92%
                        </div>
                      </div>

                      <div className="bg-black/80 backdrop-blur-md rounded-xl p-2.5 space-y-2 border border-white/10 text-white">
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-violet-500 w-3/5" />
                        </div>
                        <div className="flex justify-between text-[9px] font-mono text-slate-400">
                          <span>01:14:20</span>
                          <span>02:46:12</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CASE 2: AUDIO PLAYER */}
                  {currentSlide.previewType === 'audio-player' && (
                    <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111728] to-black rounded-2xl p-3.5 border border-white/5">
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>Hi-Res Direct DAC</span>
                        <span className="text-violet-400">96kHz / 24-bit</span>
                      </div>

                      <div className="flex flex-col items-center text-center my-auto space-y-2">
                        <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-800 flex items-center justify-center shadow-lg">
                          <Music className="w-10 h-10 text-white" />
                        </div>
                        <div className="pt-1">
                          <div className="text-xs font-bold text-white">Solaris Symphony No. 3</div>
                          <div className="text-[10px] text-slate-400">Berlin Philharmonic · FLAC</div>
                        </div>
                      </div>

                      <div className="bg-slate-900/90 rounded-xl p-2 space-y-2 border border-slate-800 text-center">
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-violet-500 w-1/2" />
                        </div>
                        <span className="text-[9px] text-violet-400 font-mono">EQ: Acoustic + Hall Reverb</span>
                      </div>
                    </div>
                  )}

                  {/* CASE 3: PIP MODE */}
                  {currentSlide.previewType === 'pip-mode' && (
                    <div className="flex-1 flex flex-col justify-between bg-slate-950 rounded-2xl p-3 border border-white/5">
                      <div className="space-y-3">
                        <div className="p-2 bg-slate-900 rounded-lg text-[10px] text-slate-400 border border-slate-800">
                          Android Notification Tray · Foreground Audio Active
                        </div>
                        <div className="grid grid-cols-3 gap-2 opacity-50">
                          <div className="h-10 bg-slate-900 rounded-lg" />
                          <div className="h-10 bg-slate-900 rounded-lg" />
                          <div className="h-10 bg-slate-900 rounded-lg" />
                        </div>
                      </div>

                      {/* Floating PiP frame */}
                      <div className="self-end w-36 aspect-video bg-black rounded-xl border-2 border-violet-500 p-1 flex items-center justify-center relative shadow-xl">
                        <Film className="w-5 h-5 text-violet-400 animate-pulse" />
                        <span className="absolute bottom-1 right-1 text-[8px] bg-black/80 px-1 rounded text-white">
                          PiP 1080p
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CASE 4: SUBTITLES ENGINE */}
                  {currentSlide.previewType === 'subtitles' && (
                    <div className="flex-1 flex flex-col justify-between bg-[#0b0e18] rounded-2xl p-3 border border-white/5">
                      <div className="text-xs font-semibold text-white border-b border-slate-800 pb-2">
                        Subtitle Customizer
                      </div>
                      <div className="space-y-2 text-[10px] text-slate-300 my-auto">
                        <div className="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                          <span>Font Size</span>
                          <span className="font-mono text-violet-400">18sp (Default)</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                          <span>Timing Offset</span>
                          <span className="font-mono text-violet-400">+0.250s</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded-lg flex justify-between items-center">
                          <span>Anime SSA/ASS Engine</span>
                          <span className="text-emerald-400 font-mono">Enabled</span>
                        </div>
                      </div>
                      <div className="p-2 bg-black/80 rounded-xl text-center text-xs text-yellow-300 font-medium">
                        Preview: Subtitle text with stroke & drop shadow
                      </div>
                    </div>
                  )}

                  {/* CASE 5: MEDIA LIBRARY */}
                  {currentSlide.previewType === 'media-library' && (
                    <div className="flex-1 flex flex-col bg-[#0b0e18] rounded-2xl p-3 border border-white/5 space-y-2">
                      <div className="text-xs font-semibold text-white border-b border-slate-800 pb-1.5 flex justify-between">
                        <span>Device Storage</span>
                        <span className="text-[10px] text-slate-400 font-mono">128 GB Free</span>
                      </div>
                      <div className="space-y-1.5 overflow-hidden text-[10px]">
                        {[
                          { folder: '/Movies/Sci-Fi', items: '14 files · 42 GB' },
                          { folder: '/Music/Lossless-FLAC', items: '88 files · 9.4 GB' },
                          { folder: '/Podcasts/Offline', items: '23 files · 3.1 GB' },
                          { folder: '/Recordings/Lectures', items: '8 files · 1.2 GB' },
                        ].map((dir, i) => (
                          <div key={i} className="p-2 bg-slate-900 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-1.5 truncate">
                              <Folder className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                              <span className="text-slate-200 truncate">{dir.folder}</span>
                            </div>
                            <span className="text-slate-500 shrink-0 font-mono">{dir.items}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CASE 6: PLAYLIST ARCHITECT */}
                  {currentSlide.previewType === 'playlists' && (
                    <div className="flex-1 flex flex-col bg-[#0b0e18] rounded-2xl p-3 border border-white/5 space-y-2">
                      <div className="text-xs font-semibold text-white border-b border-slate-800 pb-1.5 flex justify-between">
                        <span>Now Playing Queue</span>
                        <span className="text-[10px] text-violet-400 font-mono">M3U8 Ready</span>
                      </div>
                      <div className="space-y-1.5 text-[10px]">
                        {[
                          { title: '1. Interstellar Suite.flac', dur: '08:42', active: true },
                          { title: '2. Neon Horizon (Live).mkv', dur: '14:20', active: false },
                          { title: '3. Deep Ocean Ambient.wav', dur: '45:10', active: false },
                        ].map((track, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-lg flex items-center justify-between ${
                              track.active ? 'bg-violet-600/30 border border-violet-500/50 text-white' : 'bg-slate-900 text-slate-300'
                            }`}
                          >
                            <span className="truncate">{track.title}</span>
                            <span className="font-mono text-slate-400">{track.dur}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Home indicator */}
                <div className="w-20 h-1 bg-slate-700/60 rounded-full mx-auto mb-2" />
              </div>
            </div>
          </div>

        </div>

        {/* Real Screenshot Placeholder Developer Notice (Anti-slop & customizable placeholder slot) */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>
            Asset slots are ready: swap any simulated screen with real APK capture PNGs in{' '}
            <code className="text-slate-300 font-mono">src/assets/screenshots/</code> anytime.
          </span>
        </div>

      </div>

      {/* Lightbox / High-Res Inspection Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h4 className="text-base font-bold text-white">{currentSlide.title}</h4>
              <button
                onClick={() => setLightboxOpen(false)}
                className="text-slate-400 hover:text-white text-sm px-2 py-1 rounded bg-slate-800"
              >
                Close (ESC)
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{currentSlide.description}</p>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-violet-400 uppercase font-mono">
                  Engineered Feature Set
                </div>
                {currentSlide.features.map((f, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="w-full py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl"
            >
              Done Viewing
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
