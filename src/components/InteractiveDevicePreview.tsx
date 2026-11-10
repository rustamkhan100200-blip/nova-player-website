import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  Sun,
  Maximize2,
  Subtitles,
  Music,
  Video,
  Layers,
  SkipForward,
  SkipBack,
  Sliders,
  Folder,
  Radio,
  Check,
  RotateCcw,
} from 'lucide-react';

export const InteractiveDevicePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'pip'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(34);
  const [volume, setVolume] = useState(78);
  const [brightness, setBrightness] = useState(64);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [audioTrack, setAudioTrack] = useState('English [DTS-HD 5.1]');

  // Gentle automatic playback progress simulator
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 10 : prev + 0.5));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto select-none">
      {/* Decorative ambient backdrop glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600/30 via-indigo-600/20 to-blue-600/30 rounded-[44px] blur-2xl opacity-60 pointer-events-none" />

      {/* Screen Mode Selector Tabs directly above the device */}
      <div className="flex items-center justify-center gap-1.5 mb-4 p-1 bg-slate-900/90 border border-slate-800/80 rounded-xl backdrop-blur-md max-w-sm mx-auto shadow-lg">
        <button
          onClick={() => setActiveTab('video')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'video'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Video className="w-3.5 h-3.5" />
          <span>4K Video</span>
        </button>
        <button
          onClick={() => setActiveTab('audio')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'audio'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Music className="w-3.5 h-3.5" />
          <span>Hi-Res Audio</span>
        </button>
        <button
          onClick={() => setActiveTab('pip')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'pip'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>PiP / Background</span>
        </button>
      </div>

      {/* Android Device Outer Frame */}
      <div className="relative bg-[#0c101c] rounded-[40px] p-2.5 sm:p-3 shadow-2xl border border-slate-800/80 ring-1 ring-white/10">
        {/* Device camera punch hole / Speaker slit */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-black ring-1 ring-slate-800/90 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-950/80" />
          </div>
        </div>

        {/* Screen Bezel & Display Viewport */}
        <div className="relative rounded-[30px] overflow-hidden bg-[#06080e] aspect-[9/17.5] flex flex-col border border-slate-900/60 shadow-inner">
          
          {/* Android Status Bar */}
          <div className="w-full px-6 pt-3 pb-2 flex items-center justify-between text-[11px] text-slate-300 font-mono tracking-tight z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5 opacity-80 text-[10px]">
              <span className="font-sans">5G</span>
              <div className="w-4 h-2 border border-slate-300 rounded-[2px] p-[1px] flex items-center">
                <div className="h-full w-3 bg-slate-300 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* VIEWPORT CONTENT ACCORDING TO ACTIVE TAB */}

          {/* 1. VIDEO PLAYER VIEW WITH GESTURE HUD */}
          {activeTab === 'video' && (
            <div className="relative flex-1 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 p-4">
              {/* Simulated Cinematic Scene Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 z-10" />
                {/* Visual art representing 4K cinematic landscape */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-black flex items-center justify-center">
                  <div className="relative w-full h-full opacity-60">
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
                    {/* Architectural grid vector aesthetic */}
                    <svg className="w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,80 Q25,30 50,70 T100,60 L100,100 L0,100 Z" fill="#1e1b4b" />
                      <circle cx="75" cy="30" r="12" fill="#818cf8" opacity="0.3" />
                      <line x1="0" y1="80" x2="100" y2="80" stroke="#6366f1" strokeWidth="0.3" strokeDasharray="2,2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Top Overlay HUD */}
              <div className="relative z-20 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2">
                  <span className="font-semibold tracking-tight truncate max-w-[140px]">
                    Interstellar_Odyssey_4K.mkv
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-600/80 font-mono text-white">
                    AV1 · 4K
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSubtitles(!showSubtitles)}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      showSubtitles
                        ? 'bg-violet-600/30 border-violet-500 text-violet-200'
                        : 'bg-black/40 border-white/10 text-slate-400'
                    }`}
                    title="Toggle Subtitles"
                  >
                    <Subtitles className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() =>
                      setAudioTrack(
                        audioTrack.includes('5.1')
                          ? 'Director Commentary [AAC 2.0]'
                          : 'English [DTS-HD 5.1]'
                      )
                    }
                    className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-slate-200 hover:text-white"
                    title="Switch Audio Track"
                  >
                    <Radio className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Interactive Gesture Indicators Overlay (Left: Brightness, Right: Volume) */}
              <div className="relative z-20 grid grid-cols-2 gap-4 py-8 pointer-events-none">
                {/* Left Screen: Brightness Gesture HUD */}
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 p-2.5 rounded-2xl w-fit">
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-300"
                      style={{ width: `${brightness}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono tabular-nums text-slate-300">
                    {brightness}%
                  </span>
                </div>

                {/* Right Screen: Volume Gesture HUD */}
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 p-2.5 rounded-2xl w-fit justify-self-end">
                  <Volume2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-400 transition-all duration-300"
                      style={{ width: `${volume}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono tabular-nums text-slate-300">
                    {volume}%
                  </span>
                </div>
              </div>

              {/* Subtitle Rendering Area */}
              {showSubtitles && (
                <div className="relative z-20 text-center my-auto px-4">
                  <span className="inline-block px-3 py-1.5 bg-black/75 backdrop-blur-sm text-yellow-300 font-sans text-xs sm:text-sm font-medium tracking-wide rounded shadow border border-yellow-500/20">
                    "All signals point to the outer rim coordinate."
                  </span>
                </div>
              )}

              {/* Video Bottom HUD: Progress Bar & Controls */}
              <div className="relative z-20 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-2xl space-y-2.5">
                {/* Time & Scrubbing Track */}
                <div className="space-y-1">
                  <div
                    className="relative w-full h-1.5 bg-slate-800 rounded-full cursor-pointer overflow-hidden group"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const newProgress = Math.round((clickX / rect.width) * 100);
                      setProgress(Math.max(0, Math.min(100, newProgress)));
                    }}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 tabular-nums">
                    <span>
                      {Math.floor((progress * 42) / 100)}:
                      {String(Math.floor(((progress * 42 * 60) / 100) % 60)).padStart(2, '0')}
                    </span>
                    <span className="text-slate-500 text-[9px]">{audioTrack}</span>
                    <span>42:18</span>
                  </div>
                </div>

                {/* Main Playback Bar Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setProgress((p) => Math.max(0, p - 5))}
                      className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
                      title="Seek -10s"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                      1.0x
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setProgress((p) => Math.max(0, p - 10))}
                      className="text-slate-300 hover:text-white"
                      title="Previous chapter"
                    >
                      <SkipBack className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-full bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center shadow-md shadow-violet-600/30 transition-transform active:scale-95"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white translate-x-0.5" />
                      )}
                    </button>
                    <button
                      onClick={() => setProgress((p) => Math.min(100, p + 10))}
                      className="text-slate-300 hover:text-white"
                      title="Next chapter"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setVolume((v) => (v >= 100 ? 50 : v + 10));
                        setBrightness((b) => (b >= 100 ? 40 : b + 10));
                      }}
                      className="text-[10px] text-violet-300 hover:text-violet-200 border border-violet-500/30 px-1.5 py-0.5 rounded bg-violet-950/40"
                      title="Simulate Swipe Gestures"
                    >
                      Gesture
                    </button>
                    <button
                      onClick={() => setActiveTab('pip')}
                      className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
                      title="Pop into Picture-in-Picture"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. HI-RES AUDIO PLAYER VIEW */}
          {activeTab === 'audio' && (
            <div className="relative flex-1 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0e1222] via-[#090d18] to-black p-4">
              {/* Audio Top Bar */}
              <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800/60 pb-2">
                <span className="font-semibold text-white">Lossless Studio</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-900/50 text-violet-300 border border-violet-700/40">
                  FLAC 24-bit / 96kHz
                </span>
              </div>

              {/* Album Art & Track Info */}
              <div className="flex flex-col items-center text-center my-auto space-y-3">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-violet-900 via-indigo-800 to-purple-600 p-1 shadow-xl shadow-violet-950/60 border border-violet-500/30 group">
                  <div className="w-full h-full rounded-xl bg-slate-950/70 flex flex-col items-center justify-center p-3 relative overflow-hidden">
                    <Music className="w-10 h-10 text-violet-400 mb-1" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                      NOVA SOUND
                    </span>
                    {/* Animated sound wave bars */}
                    <div className="flex items-end gap-1 h-6 mt-2">
                      {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-violet-400 rounded-full transition-all duration-300"
                          style={{
                            height: isPlaying ? `${(h * (progress % 2 ? 0.9 : 1.1)) % 100}%` : '20%',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    Quantum Frequency #4
                  </h4>
                  <p className="text-xs text-slate-400">Aethelgard Philharmonic · 2026</p>
                </div>

                {/* 10-Band EQ Quick Preset */}
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                  <Sliders className="w-3 h-3 text-violet-400" />
                  <span>EQ: Bass Boost + Clear Dialogue</span>
                </div>
              </div>

              {/* Audio Controls */}
              <div className="bg-slate-900/90 border border-slate-800/80 p-3 rounded-2xl space-y-2">
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500 transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 tabular-nums">
                    <span>02:14</span>
                    <span>05:48</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setProgress((p) => Math.max(0, p - 10))}
                    className="text-slate-300 hover:text-white"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-9 h-9 rounded-full bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center shadow-lg shadow-violet-600/30"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
                  </button>
                  <button
                    onClick={() => setProgress((p) => Math.min(100, p + 10))}
                    className="text-slate-300 hover:text-white"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. PICTURE-IN-PICTURE & MULTITASKING BACKGROUND VIEW */}
          {activeTab === 'pip' && (
            <div className="relative flex-1 flex flex-col justify-between overflow-hidden bg-slate-950 p-4">
              {/* Android Home Screen Simulator */}
              <div className="relative z-0 space-y-4 pt-2">
                {/* Search Bar Widget */}
                <div className="w-full py-2 px-3 bg-slate-900/70 border border-slate-800/70 rounded-full flex items-center gap-2 text-[11px] text-slate-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-500/60" />
                  <span>Search apps, contacts, files...</span>
                </div>

                {/* App Icons Grid */}
                <div className="grid grid-cols-4 gap-3 text-center">
                  {[
                    { name: 'Camera', color: 'from-amber-600 to-orange-500' },
                    { name: 'Gallery', color: 'from-pink-600 to-rose-500' },
                    { name: 'Browser', color: 'from-blue-600 to-cyan-500' },
                    { name: 'Settings', color: 'from-slate-600 to-slate-700' },
                  ].map((app, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 opacity-75">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${app.color} shadow-sm`} />
                      <span className="text-[9px] text-slate-400">{app.name}</span>
                    </div>
                  ))}
                </div>

                {/* Nova Player Background Playback System Notification */}
                <div className="bg-slate-900/90 border border-violet-500/30 rounded-xl p-2.5 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5 text-violet-300 font-semibold">
                      <Play className="w-3 h-3 fill-violet-300" />
                      <span>NOVA PLAYER · Background Service</span>
                    </div>
                    <span className="text-slate-400 font-mono">03:42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-white truncate max-w-[170px]">
                        Cosmos_Documentary_E04.mkv
                      </p>
                      <p className="text-[10px] text-slate-400">Audio stream active · Screen locked</p>
                    </div>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-lg bg-violet-600/30 text-violet-200"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating PiP Window (Picture-in-Picture) */}
              <div className="relative self-end w-44 rounded-xl overflow-hidden border-2 border-violet-500/80 shadow-2xl bg-black p-1.5 aspect-video z-20">
                <div className="relative w-full h-full rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950 via-slate-900 to-violet-950" />
                  <Video className="w-6 h-6 text-violet-400 relative z-10 animate-pulse" />
                  <div className="absolute top-1 left-1 bg-black/70 px-1 py-0.5 rounded text-[8px] font-mono text-white">
                    PiP Active
                  </div>
                  <div className="absolute bottom-1 right-1 flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('video')}
                      className="p-0.5 bg-black/60 rounded text-slate-200 hover:text-white"
                      title="Return to Fullscreen Player"
                    >
                      <Maximize2 className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Android Navigation Bar Pill */}
              <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto my-1" />
            </div>
          )}

          {/* Android Bottom Home Navigation Bar Bar */}
          <div className="w-28 h-1 bg-slate-700/60 rounded-full mx-auto mb-2" />
        </div>
      </div>
    </div>
  );
};
