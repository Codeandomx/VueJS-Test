import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHnqjUwq2uatiXhdDEAc006_Bl332Vn2U",
  authDomain: "crud-curso.firebaseapp.com",
  databaseURL: "https://crud-curso.firebaseio.com",
  projectId: "crud-curso",
  storageBucket: "crud-curso.appspot.com",
  messagingSenderId: "392643416883",
  appId: "1:392643416883:web:f365afdd90129737"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
