import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const fire = firebase.initializeApp({
  apiKey: "AIzaSyBNVBZyA2haEm4kQ20k0ualK7mdvj9ppZg",
  authDomain: "my-project-720f5.firebaseapp.com",
  projectId: "my-project-720f5",
  storageBucket: "my-project-720f5.appspot.com",
  messagingSenderId: "944681119538",
  appId: "1:944681119538:web:da12e037b0da8745f9312b"
})

export const auth=fire.auth()
export default fire