import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// You can use either a service account JSON file or environment variables
let serviceAccount;
try {
  // Option 1: Use service account JSON file
  const serviceAccountPath = join(process.cwd(), 'firebase-service-account.json');
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf-8'));
} catch (error) {
  // Option 2: Use environment variables
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL
  };
}

console.log('Initializing Firebase with project:', serviceAccount.projectId);

// Initialize Firebase with the service account
initializeApp({
  credential: cert(serviceAccount as any)
});

const db = getFirestore();

// Generate 500 cities with the same structure
const generateCities = () => {
  const cities = [];
  const cityNames = [
    'Tokyo', 'Kyoto', 'Osaka', 'Lisbon', 'Porto', 'Rome', 'Milan', 'Venice',
    'Paris', 'Lyon', 'Barcelona', 'Madrid', 'Berlin', 'Munich', 'Amsterdam',
    'Rotterdam', 'Brussels', 'Antwerp', 'Zurich', 'Geneva', 'Vienna', 'Salzburg',
    'Athens', 'Thessaloniki', 'Bangkok', 'Chiang Mai', 'Hanoi', 'Ho Chi Minh City',
    'Seoul', 'Busan', 'Beijing', 'Shanghai', 'Mumbai', 'Delhi', 'Sydney',
    'Melbourne', 'Auckland', 'Wellington', 'Toronto', 'Vancouver', 'New York',
    'Los Angeles', 'Mexico City', 'Guadalajara', 'São Paulo', 'Rio de Janeiro',
    'Buenos Aires', 'Córdoba', 'Santiago', 'Valparaíso', 'Lima', 'Cusco'
  ];

  const baseDate = new Date('2025-04-25T17:00:00.000Z');

  for (let i = 0; i < 500; i++) {
    const cityName = cityNames[Math.floor(Math.random() * cityNames.length)];
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i);

    cities.push({
      id: `city_${i.toString().padStart(3, '0')}`,
      name: cityName,
      created: date
    });
  }

  console.log(`Generated ${cities.length} cities`);
  console.log('Sample of first 3 cities:', cities.slice(0, 3));
  return cities;
};

async function seedCities() {
  try {
    const cities = generateCities();
    const batch = db.batch();
    const citiesRef = db.collection('cities');

    console.log('Starting to add cities to batch...');
    
    cities.forEach((city) => {
      const docRef = citiesRef.doc(city.id);
      batch.set(docRef, {
        name: city.name,
        created: city.created
      });
    });

    console.log('Committing batch to Firestore...');
    await batch.commit();
    
    // Verify the data was written
    const snapshot = await citiesRef.limit(5).get();
    console.log('Verification - First 5 cities in database:');
    snapshot.forEach(doc => {
      console.log(`ID: ${doc.id}, Data:`, doc.data());
    });

    console.log('✅ Successfully seeded cities into Firestore');
  } catch (error) {
    console.error('❌ Error seeding cities:', error);
    process.exit(1);
  }
}

seedCities(); 