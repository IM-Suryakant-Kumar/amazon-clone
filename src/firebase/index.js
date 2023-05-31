import { initializeApp } from "firebase/app";
import { getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyArHMjxL_40Z2VDjY0Znq4V-3QSYGZKXKM",
  authDomain: "clone-c6080.firebaseapp.com",
  projectId: "clone-c6080",
  storageBucket: "clone-c6080.appspot.com",
  messagingSenderId: "480540112486",
  appId: "1:480540112486:web:004f7a0c14288384319fa7",
  measurementId: "G-DL2TP8DQ2P"
};

const app = initializeApp(firebaseConfig)


const auth = getAuth(app)
const db = getFirestore(app)

const createUser = (email, password, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user
      console.log(`Sign Up Successfully as ${user.email}`)
      if(user) {
        navigate("/")
      }
    })
    .catch(err => alert(err.message))
}

const signInUser = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user
      console.log(`Sign In Successfully as ${user.email}`)
      navigate("/")
    })
    .catch(err => alert( err.message))
}

const trackUserOnAuthStateChanged = (dispatch, setUser) => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      dispatch(setUser(user))
      console.log(`${user.email} is signed in`)
    } else {
      // console.log(`${user.email} is signed out`)
    }
  })
}

export const handleSignOut = (dispatch, setUser) => {
  signOut(auth).then(() => {
    console.log("sign out")
     dispatch(setUser(""))
  }).catch(err => console.log(err))
} 

export { createUser, signInUser, trackUserOnAuthStateChanged }