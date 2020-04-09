import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGXu7YvxYfwitzCS0gsT17XKjESGtPdaE",
    authDomain: "market-place-e5bbf.firebaseapp.com",
    databaseURL: "https://market-place-e5bbf.firebaseio.com",
    projectId: "market-place-e5bbf",
    storageBucket: "market-place-e5bbf.appspot.com",
    messagingSenderId: "587744975683",
    appId: "1:587744975683:web:022f7e6191b1a0cbec6df6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(err) {
            console.log('Create user error ', err.message);
        }
    }

    return userRef;
}

export default firebase;