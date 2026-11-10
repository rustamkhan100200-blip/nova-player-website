/**
 * Centralized Configuration for NOVA PLAYER Official Website.
 * All download buttons, version strings, checksums, and metadata are driven from here.
 */

// Centralized APK download URL configuration.
// When empty ("" or undefined), all download actions trigger the clear "Download coming soon" modal/state.
// When set to a direct APK link (e.g., "https://cdn.novaplayer.app/releases/nova-player-v1.0.0-beta.apk"),
// clicking any download button triggers immediate asset download.
export const APK_DOWNLOAD_URL: string = "";

// WhatsApp customer support configuration
export const WHATSAPP_SUPPORT_NUMBER: string = "93789534644";
export const WHATSAPP_SUPPORT_URL: string =
  "https://wa.me/93789534644?text=Hello%2C%20I%20need%20help%20with%20NOVA%20PLAYER.%20My%20issue%20is%3A%20";

export interface AppReleaseInfo {
  name: string;
  tagline: string;
  version: string;
  versionCode: number;
  releaseDate: string;
  apkSize: string;
  minAndroid: string;
  targetAndroid: string;
  architectures: string[];
  sha256: string;
  contactEmail: string;
  whatsappNumber: string;
  whatsappUrl: string;
  isComingSoon: boolean;
  packageId: string;
}

export const APP_CONFIG: AppReleaseInfo = {
  name: "NOVA PLAYER",
  tagline: "Your Media. Your Freedom.",
  version: "v1.0.0-beta",
  versionCode: 100,
  releaseDate: "November 2026",
  apkSize: "28.4 MB",
  minAndroid: "Android 8.0 (API Level 26) or higher",
  targetAndroid: "Android 14 / 15 (API Level 34+)",
  architectures: ["arm64-v8a", "armeabi-v7a", "x86_64"],
  sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  contactEmail: "support@novaplayer.app",
  whatsappNumber: WHATSAPP_SUPPORT_NUMBER,
  whatsappUrl: WHATSAPP_SUPPORT_URL,
  packageId: "io.novaplayer.android",
  // Automatically computed: true if APK_DOWNLOAD_URL is blank or not provided
  get isComingSoon(): boolean {
    return !APK_DOWNLOAD_URL || APK_DOWNLOAD_URL.trim() === "";
  },
};

/**
 * Helper to determine download behavior
 */
export function getDownloadAction(customUrl?: string): {
  isAvailable: boolean;
  url: string;
  message: string;
} {
  const activeUrl = (customUrl !== undefined ? customUrl : APK_DOWNLOAD_URL).trim();
  if (!activeUrl) {
    return {
      isAvailable: false,
      url: "",
      message: "Download coming soon. The release build is currently being signed and verified.",
    };
  }
  return {
    isAvailable: true,
    url: activeUrl,
    message: "Direct download ready.",
  };
}
