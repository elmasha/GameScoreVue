import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/analytics'
import firebaseConfig from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig)
    // const firebaseAnalytic = firebase.analytics()

    export default firebaseApp.firestore()
