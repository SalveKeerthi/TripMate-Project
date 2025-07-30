import { db } from './firebase.js';
import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

export async function saveItinerary(userId, place) {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    itineraries: arrayUnion(place)
  });
}

export async function getUserItineraries(userId) {
  const userRef = doc(db, 'users', userId);
  const snapshot = await getDoc(userRef);
  return snapshot.exists() ? snapshot.data().itineraries : [];
}
