import * as firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig={
    
    apiKey: "AIzaSyDIDNgePu8EnDIaf3chhe7JSSvF8CvzGYU",
    authDomain: "willy-e19d8.firebaseapp.com",
    projectId: "willy-e19d8",
    storageBucket: "willy-e19d8.appspot.com",
    messagingSenderId: "614607412034",
    appId: "1:614607412034:web:665c306e2fd492f5b686db"
  
}

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()