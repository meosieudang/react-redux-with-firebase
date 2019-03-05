import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCnufV3t-JeD5Vw1IfxwoG0v1S5-3Au3wA",
  authDomain: "my-project-755d5.firebaseapp.com",
  databaseURL: "https://my-project-755d5.firebaseio.com",
  projectId: "my-project-755d5",
  storageBucket: "my-project-755d5.appspot.com",
  messagingSenderId: "133485207130"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
// .settings({ timestampsInSnapshots: true })

export default firebase;