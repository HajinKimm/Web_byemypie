import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAOCK_Tr1wjcAZ1CchE6Y1MNqU9enDnCYM",
    authDomain: "react-projetc.firebaseapp.com",
    projectId: "react-projetc",
    storageBucket: "react-projetc.appspot.com",
    messagingSenderId: "717750652419",
    appId: "1:717750652419:web:85964cb5543bc99f780836",
    measurementId: "G-VGPNBBVBLK"
};

firebase.initializeApp(firebaseConfig);
export default firebase