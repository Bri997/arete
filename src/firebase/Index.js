import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAo_ES2t4DvbojF7dTm6kMtdtDJe5muZSw',
  authDomain: 'chatapp-3fb0c.firebaseapp.com',
  projectId: 'chatapp-3fb0c',
  storageBucket: 'chatapp-3fb0c.appspot.com',
  messagingSenderId: '996136144327',
  appId: '1:996136144327:web:02721d08bddfb081195de2',
  measurementId: 'G-L4B8X74RLM',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
