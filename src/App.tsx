import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { InstallationGuide } from './components/InstallationGuide';
import { DownloadSection } from './components/DownloadSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { ContactModal } from './components/ContactModal';
import { APK_DOWNLOAD_URL } from './config/appConfig';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  // Centralized URL state (defaults to APK_DOWNLOAD_URL from config)
  const [currentApkUrl, setCurrentApkUrl] = useState<string>(APK_DOWNLOAD_URL);

  const handleDownloadClick = () => {
    // If a direct URL is configured, trigger the direct asset download
    if (currentApkUrl && currentApkUrl.trim() !== '') {
      const link = document.createElement('a');
      link.href = currentApkUrl.trim();
      link.setAttribute('download', 'NovaPlayer.apk');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Otherwise display the clear "Download coming soon" modal with release alert options
      setDownloadModalOpen(true);
    }
  };

  const handleExploreFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewInstallGuide = () => {
    document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-violet-600/30 selection:text-violet-200">
      {/* Top Navigation Bar */}
      <Navbar
        onDownloadClick={handleDownloadClick}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onDownloadClick={handleDownloadClick}
          onExploreFeatures={handleExploreFeatures}
          onViewInstallGuide={handleViewInstallGuide}
        />

        {/* 2. Features Section */}
        <Features />

        {/* 3. Screenshots Gallery */}
        <Screenshots />

        {/* 4. Installation Instructions for Android */}
        <InstallationGuide onDownloadClick={handleDownloadClick} />

        {/* 5. Download Section with Release Info & Checksum */}
        <DownloadSection
          onDownloadClick={handleDownloadClick}
          activeDownloadUrl={currentApkUrl}
        />

        {/* 6. FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onDownloadClick={handleDownloadClick}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        activeUrl={currentApkUrl}
        onSetTestUrl={(url) => setCurrentApkUrl(url)}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
