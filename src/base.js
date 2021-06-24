import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfa6NtrJZ1QgHPgfeEw3QQv5kHsmQ_cxw',
  authDomain: 'profijt-dash.firebaseapp.com',
  projectId: 'profijt-dash',
  storageBucket: 'profijt-dash.appspot.com',
  messagingSenderId: '654536751475',
  appId: '1:654536751475:web:e2c823daf4637615116d06',
}
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig)
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
