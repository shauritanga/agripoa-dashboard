#!/usr/bin/env node

/**
 * Script to test Firebase connection
 * Run with: node scripts/test-firebase.js
 */

import { initializeApp } from 'firebase/app';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');

try {
  const envFile = readFileSync(envPath, 'utf8');
  const envLines = envFile.split('\n');
  
  envLines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        if (value) {
          process.env[key] = value;
        }
      }
    }
  });
} catch (error) {
  console.error('❌ Could not load .env file. Make sure it exists in the project root.');
  process.exit(1);
}

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  ...(process.env.VITE_FIREBASE_MEASUREMENT_ID && { measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID }),
};

console.log('🔥 Firebase Connection Test\n');

console.log('📋 Configuration:');
console.log('API Key:', firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : 'Missing');
console.log('Auth Domain:', firebaseConfig.authDomain || 'Missing');
console.log('Project ID:', firebaseConfig.projectId || 'Missing');
console.log('Storage Bucket:', firebaseConfig.storageBucket || 'Missing');
console.log('Messaging Sender ID:', firebaseConfig.messagingSenderId || 'Missing');
console.log('App ID:', firebaseConfig.appId ? `${firebaseConfig.appId.substring(0, 20)}...` : 'Missing');

try {
  console.log('\n🚀 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  console.log('✅ Firebase initialized successfully!');
  console.log('App name:', app.name);
  console.log('Project ID:', app.options.projectId);
} catch (error) {
  console.error('❌ Firebase initialization failed:');
  console.error('Error code:', error.code);
  console.error('Error message:', error.message);
  
  if (error.code === 'auth/invalid-api-key') {
    console.log('\n💡 Troubleshooting tips:');
    console.log('1. Check that your API key is correct in the .env file');
    console.log('2. Make sure you copied the API key from the correct Firebase project');
    console.log('3. Verify that the Firebase project exists and is active');
    console.log('4. Check that the API key has the necessary permissions');
  }
}
