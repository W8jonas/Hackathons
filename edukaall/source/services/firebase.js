import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/firebase-storage'

import {
	ENV_REACT_APP_API_KEY,
	ENV_REACT_APP_AUTH_DOMAIN,
	ENV_REACT_APP_PROJECT_ID,
	ENV_REACT_APP_STORAGE_BUCKET,
	ENV_REACT_APP_MESSAGING_SENDER_ID,
	ENV_REACT_APP_APP_ID,
} from '@env'
import firebase from 'firebase/app'

const firebaseConfig = {
	apiKey: ENV_REACT_APP_API_KEY,
	authDomain: ENV_REACT_APP_AUTH_DOMAIN,
	// databaseURL: ENV_REACT_APP_DATABASE_URL,
	projectId: ENV_REACT_APP_PROJECT_ID,
	storageBucket: ENV_REACT_APP_STORAGE_BUCKET,
	messagingSenderId: ENV_REACT_APP_MESSAGING_SENDER_ID,
	appId: ENV_REACT_APP_APP_ID,
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
} else {
	firebase.app() // if already initialized, use that one
}

firebase.firestore().settings({ experimentalForceLongPolling: true })

const auth = firebase.auth()
const database = firebase.database()
const firestoreDatabase = firebase.firestore()
const firebaseStorage = firebase.storage()

export {
	firebase, auth, database, firestoreDatabase, firebaseStorage,
}
