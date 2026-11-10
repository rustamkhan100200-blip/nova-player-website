import test from 'node:test';
import assert from 'node:assert/strict';
import {
  APP_CONFIG,
  getDownloadAction,
  WHATSAPP_SUPPORT_NUMBER,
  WHATSAPP_SUPPORT_URL,
} from './appConfig';

test('appConfig provides required metadata for NOVA PLAYER', () => {
  assert.equal(APP_CONFIG.name, 'NOVA PLAYER');
  assert.equal(APP_CONFIG.tagline, 'Your Media. Your Freedom.');
  assert.ok(APP_CONFIG.version.length > 0, 'Version string must exist');
  assert.ok(APP_CONFIG.apkSize.includes('MB'), 'File size must mention MB');
  assert.ok(APP_CONFIG.sha256.length === 64, 'SHA-256 must be a 64-char hex string');
});

test('WhatsApp customer support configuration is correct', () => {
  assert.equal(WHATSAPP_SUPPORT_NUMBER, '93789534644');
  assert.ok(WHATSAPP_SUPPORT_URL.startsWith('https://wa.me/93789534644'));
  assert.ok(WHATSAPP_SUPPORT_URL.includes('text=Hello%2C%20I%20need%20help'));
  assert.equal(APP_CONFIG.whatsappNumber, '93789534644');
  assert.equal(APP_CONFIG.whatsappUrl, WHATSAPP_SUPPORT_URL);
});

test('getDownloadAction returns coming soon state when APK_DOWNLOAD_URL is empty', () => {
  const action = getDownloadAction('');
  assert.equal(action.isAvailable, false);
  assert.ok(action.message.toLowerCase().includes('coming soon'));
});

test('getDownloadAction returns direct download url when a valid URL is supplied', () => {
  const testUrl = 'https://downloads.novaplayer.io/nova-player-v1.0.0.apk';
  const action = getDownloadAction(testUrl);
  assert.equal(action.isAvailable, true);
  assert.equal(action.url, testUrl);
});

