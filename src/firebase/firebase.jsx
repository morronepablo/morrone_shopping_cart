import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUWwZtd4zfLyDHbGzWUxccjVX0jzu8IPc",
    authDomain: "coderhouse-ecommerce-c4ea0.firebaseapp.com",
    projectId: "coderhouse-ecommerce-c4ea0",
    storageBucket: "coderhouse-ecommerce-c4ea0.appspot.com",
    messagingSenderId: "882887685889",
    appId: "1:882887685889:web:08e8e1d59ea431acb70d00"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
















// import firebase from 'firebase/app'
// import '@firebase/firestore'

// Your web app's Firebase configuration

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyDUWwZtd4zfLyDHbGzWUxccjVX0jzu8IPc",
//     authDomain: "coderhouse-ecommerce-c4ea0.firebaseapp.com",
//     projectId: "coderhouse-ecommerce-c4ea0",
//     storageBucket: "coderhouse-ecommerce-c4ea0.appspot.com",
//     messagingSenderId: "882887685889",
//     appId: "1:882887685889:web:08e8e1d59ea431acb70d00"
// })
// var firebaseConfig = {
//     apiKey: "AIzaSyDUWwZtd4zfLyDHbGzWUxccjVX0jzu8IPc",
//     authDomain: "coderhouse-ecommerce-c4ea0.firebaseapp.com",
//     projectId: "coderhouse-ecommerce-c4ea0",
//     storageBucket: "coderhouse-ecommerce-c4ea0.appspot.com",
//     messagingSenderId: "882887685889",
//     appId: "1:882887685889:web:08e8e1d59ea431acb70d00"
// }

// export function getFirebase() {
//     return app
// }

// export function getFirestore() {
//     return firebase.firestore(app)
// }
// Initialize Firebase
// fb = firebase.initializeApp(firebaseConfig)

// disponible para todos
//export const db = getFirestore()
