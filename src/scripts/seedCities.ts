import 'dotenv/config';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { join } from 'path';

// Initialize Firebase Admin with environment variables
const privateKey = process.env.FIREBASE_PRIVATE_KEY 
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n').replace(/"/g, '')
  : undefined;

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key": privateKey,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL
};

const serviceAccountPath = join(process.cwd(), 'firebase-service-account.json');
const serviceAccountParsed = JSON.parse(readFileSync(serviceAccountPath, 'utf-8'));

initializeApp({
  credential: cert(serviceAccountParsed as any)
});

const db = getFirestore();

const cities = [
  {
    id: 'abc123xyz456',
    name: 'Kyoto, Japan',
    created: new Date('2025-04-25T17:00:00.000Z') // 12:00 PM UTC-5
  },
  {
    id: 'def456uvw789',
    name: 'Lisbon, Portugal',
    created: new Date('2025-04-26T13:00:00.000Z') // 08:00 AM UTC-5
  }
];

async function seedCities() {
  try {
    const batch = db.batch();
    const citiesRef = db.collection('cities');

    cities.forEach((city) => {
      const docRef = citiesRef.doc(city.id);
      batch.set(docRef, {
        name: city.name,
        created: city.created
      });
    });

    await batch.commit();
    console.log('✅ Successfully seeded cities into Firestore');
  } catch (error) {
    console.error('❌ Error seeding cities:', error);
    process.exit(1);
  }
}

seedCities(); 