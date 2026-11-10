import React, { useState } from 'react';
import {
  Film,
  Music2,
  HandMetal,
  Headphones,
  ListMusic,
  Star,
  Radio,
  Subtitles,
  FolderLock,
  CheckCircle2,
  Sliders,
  Maximize2,
  Cpu,
} from 'lucide-react';
import { FeatureItem } from '../types';

const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'video-playback',
    title: 'Hardware-Accelerated 4K/8K Video',
    category: 'Playback Engine',
    summary:
      'Seamless local playback of MKV, MP4, WebM, and TS containers with hardware AV1, HEVC (H.265), and AVC (H.264) decoding.',
    details: [
      'Zero frame drop 60fps / 120fps high-refresh rate support',
      'HDR10, HDR10+, and Dolby Vision tone-mapping fallback',
      'Dynamic aspect ratio switching (16:9, 18:9, 21:9, Crop & Fit)',
    ],
    icon: 'Film',
    highlight: true,
  },
  {
    id: 'music-audio',
    title: 'Lossless Hi-Res Audio Engine',
    category: 'Audio Architecture',
    summary:
      'Direct-to-DAC bit-perfect playback for audiophile formats including FLAC, ALAC, WAV, Opus, and MP3 up to 24-bit/192kHz.',
    details: [
      'Built-in 10-band parametric equalizer with custom curves',
      'Gapless playback transition support with crossfade',
      'Embedded and external lyrics (LRC) synchronization',
    ],
    icon: 'Music2',
  },
  {
    id: 'gesture-controls',
    title: 'Precision Gesture Seeking',
    category: 'Interaction',
    summary:
      'Fluid on-screen touch gestures designed for modern Android edge-to-edge displays. Adjust parameters without obscuring content.',
    details: [
      'Horizontal swipe anywhere on screen for fine-grained scrubbing',
      'Left vertical edge swipe for display brightness control',
      'Right vertical edge swipe for system & media volume curve',
    ],
    icon: 'HandMetal',
    highlight: true,
  },
  {
    id: 'background-playback',
    title: 'Persistent Background Audio',
    category: 'Multitasking',
    summary:
      'Continue listening to long videos, video podcasts, and music lectures with the screen turned off or while switching between apps.',
    details: [
      'Android MediaSession API integration with lockscreen controls',
      'Foreground service with efficient battery preservation',
      'Full headphone / Bluetooth remote command compatibility',
    ],
    icon: 'Headphones',
  },
  {
    id: 'audio-only-mode',
    title: 'Instant Audio-Only Mode',
    category: 'Battery Saver',
    summary:
      'One-tap toggle to immediately cut video raster decoding and stream pure audio, drastically extending device battery life.',
    details: [
      'Cuts SoC GPU power draw during spoken lectures and talks',
      'Eliminates thermal throttling during extended sessions',
      'Preserves current timestamp when switching back to video',
    ],
    icon: 'Radio',
  },
  {
    id: 'subtitles',
    title: 'Advanced Subtitle Rendering',
    category: 'Typography',
    summary:
      'Full styling and layout support for anime ASS/SSA subtitle scripts, along with standard SRT, VTT, and embedded PGS tracks.',
    details: [
      'Configurable typography: font family, size, outline, and shadow',
      'Micro-second manual subtitle time offset synchronization',
      'Multi-audio track switching with language detection',
    ],
    icon: 'Subtitles',
  },
  {
    id: 'playlists',
    title: 'Smart Playlists & Queue',
    category: 'Media Management',
    summary:
      'Assemble dynamic playback queues, save recurring playlists, and import standard M3U/M3U8 index files without hassle.',
    details: [
      'Drag-and-drop playlist reordering with shuffle & A-B repeat',
      'Auto-generated Smart Collections (Recently Added, Most Played)',
      'No cloud dependency — all playlist manifests stored locally',
    ],
    icon: 'ListMusic',
  },
  {
    id: 'favorites',
    title: 'Favorites & Timestamp Bookmarks',
    category: 'Quick Access',
    summary:
      'Pin essential clips and set instant recall markers within lengthy recordings, lectures, or concerts for instant resumption.',
    details: [
      'One-tap bookmarking at specific minute/second timestamps',
      'Categorized Quick Access shelf on player launch',
      'Persistent resume position across all local media',
    ],
    icon: 'Star',
  },
  {
    id: 'media-management',
    title: 'Folder Explorer & Scoped Storage',
    category: 'File System',
    summary:
      'Navigate your internal storage, MicroSD card, and USB OTG drives through a clean native folder view with hidden file support.',
    details: [
      'Strict adherence to Android Scoped Storage guidelines',
      'No full-device scanning or telemetry indexing',
      'Private folders exclusion (.nomedia file support)',
    ],
    icon: 'FolderLock',
  },
];

export const Features: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'audio' | 'system'>('all');

  const filteredFeatures = FEATURES_DATA.filter((item) => {
    if (activeFilter === 'video') return ['video-playback', 'gesture-controls', 'subtitles'].includes(item.id);
    if (activeFilter === 'audio') return ['music-audio', 'background-playback', 'audio-only-mode'].includes(item.id);
    if (activeFilter === 'system') return ['playlists', 'favorites', 'media-management'].includes(item.id);
    return true;
  });

  return (
    <section id="features" className="py-24 bg-[#0a0d17]/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold text-violet-400 tracking-wider uppercase font-mono">
            ENGINEERED FOR ANDROID
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Built for Pure Local Playback.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            No cloud accounts. No streaming subscriptions. Just uncompromising control over your local
            audio and video files with lightweight architecture and battery-friendly hardware decoding.
          </p>

          {/* Interactive Filter Controls (Allowed buttons for state filtering) */}
          <div className="flex items-center justify-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl w-fit mx-auto mt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeFilter === 'all'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Features (9)
            </button>
            <button
              onClick={() => setActiveFilter('video')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeFilter === 'video'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Video & Gestures
            </button>
            <button
              onClick={() => setActiveFilter('audio')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeFilter === 'audio'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Hi-Res & Background
            </button>
            <button
              onClick={() => setActiveFilter('system')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeFilter === 'system'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Library & Storage
            </button>
          </div>
        </div>

        {/* Features Bento / Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                item.highlight
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0e1322] border-violet-500/40 shadow-lg shadow-violet-950/20'
                  : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                {/* Category & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 font-mono tracking-tight">
                    {item.category}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      item.highlight
                        ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {item.icon === 'Film' && <Film className="w-4 h-4" />}
                    {item.icon === 'Music2' && <Music2 className="w-4 h-4" />}
                    {item.icon === 'HandMetal' && <HandMetal className="w-4 h-4" />}
                    {item.icon === 'Headphones' && <Headphones className="w-4 h-4" />}
                    {item.icon === 'Radio' && <Radio className="w-4 h-4" />}
                    {item.icon === 'Subtitles' && <Subtitles className="w-4 h-4" />}
                    {item.icon === 'ListMusic' && <ListMusic className="w-4 h-4" />}
                    {item.icon === 'Star' && <Star className="w-4 h-4" />}
                    {item.icon === 'FolderLock' && <FolderLock className="w-4 h-4" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Bullet List */}
                <ul className="space-y-2 pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Codec & Compatibility Table Strip */}
        <div id="specs" className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-base font-semibold text-white tracking-tight">
                Codec & Container Matrix
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Native Android MediaCodec integration coupled with lightweight software fallbacks.
              </p>
            </div>
            <div className="text-xs font-mono text-violet-400 bg-violet-950/40 border border-violet-800/40 px-2.5 py-1 rounded-lg">
              ARM64 / ARMv7 / x86_64 Compatible
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1.5">
              <span className="font-semibold text-slate-200 block">Video Formats</span>
              <p className="text-slate-400 leading-normal">
                MKV, MP4, WebM, AVI, TS, M2TS, MOV, FLV, 3GP, VOB
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1.5">
              <span className="font-semibold text-slate-200 block">Video Decoders</span>
              <p className="text-slate-400 leading-normal">
                AV1, HEVC (H.265), AVC (H.264), VP9, VP8, MPEG-4, VC-1
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1.5">
              <span className="font-semibold text-slate-200 block">Audio Codecs</span>
              <p className="text-slate-400 leading-normal">
                FLAC, Opus, ALAC, AAC, MP3, Vorbis, AC-3, E-AC-3, DTS Passthrough
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1.5">
              <span className="font-semibold text-slate-200 block">Subtitles & Playlists</span>
              <p className="text-slate-400 leading-normal">
                ASS, SSA, SRT, VTT, SubRip, PGS, TXT, M3U, M3U8, PLS
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
