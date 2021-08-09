import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDmem0CjoR73WJsWKA3O0U81YIYoBHD1Rs",
    authDomain: "vue-shop-bae99.firebaseapp.com",
    projectId: "vue-shop-bae99",
    storageBucket: "vue-shop-bae99.appspot.com",
    messagingSenderId: "876932320915",
    appId: "1:876932320915:web:c7996a54d44fa864308766"
};

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { fb, db }