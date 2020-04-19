import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCepnT7dfn1stjxoOgFAdJ3f3yFqi9hXyk",
  authDomain: "crwn-db-45b2a.firebaseapp.com",
  databaseURL: "https://crwn-db-45b2a.firebaseio.com",
  projectId: "crwn-db-45b2a",
  storageBucket: "crwn-db-45b2a.appspot.com",
  messagingSenderId: "919002457817",
  appId: "1:919002457817:web:133142b9801a0791f880c8",
  measurementId: "G-84CL1L8K3S",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
