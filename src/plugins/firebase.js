import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCBylcu9k1FEzKikCmnrzYBWPg-qE6MiTo',
    authDomain: 'cfu-univnews.firebaseapp.com',
    databaseURL: 'https://cfu-univnews.firebaseio.com',
    projectId: 'cfu-univnews',
    storageBucket: 'cfu-univnews.appspot.com',
    messagingSenderId: '508093791554',
    appId: '1:508093791554:web:4e828f0920ed0814511cdb',
    measurementId: 'G-ZZ743TNE54'
  })
}
export default firebase
