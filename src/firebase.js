import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDwetDauSKPCrgSrNYqkay8RS9MLbDHZNQ",
    authDomain: "clone-7e873.firebaseapp.com",
    projectId: "clone-7e873",
    storageBucket: "clone-7e873.appspot.com",
    messagingSenderId: "907681821310",
    appId: "1:907681821310:web:7bc2b1f5b1f08237069e2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()

  export {db} 
