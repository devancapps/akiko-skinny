import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { join } from 'path';

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