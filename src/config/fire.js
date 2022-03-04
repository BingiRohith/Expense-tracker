import firebase from 'firebase';
   
const config = {

  apiKey: "AIzaSyBlc--I0Q7UrxZD_hgd8jnMZO5HLv6V080",
  authDomain: "expense-track-4b2c0.firebaseapp.com",
  projectId: "expense-track-4b2c0",
  storageBucket: "expense-track-4b2c0.appspot.com",
  messagingSenderId: "330693904415",
  appId: "1:330693904415:web:a9da307f3b046d5f2ded2a",
  measurementId: "G-M6FMCG3Q2M"

}
const fire = firebase.initializeApp(config);

export default fire;