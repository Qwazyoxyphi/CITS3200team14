import firebase from 'firebase'

if (!firebase.apps.length) {
    const firebaseconfig = {
        apiKey: "AIzaSyD-Eq5EYc7CTwsnIncTCbMkGhtala1izMg",
        authDomain: "team-14-ontologies.firebaseapp.com",
        databaseURL: "https://team-14-ontologies.firebaseio.com",
        projectId: "team-14-ontologies",
        storageBucket: "",
        messagingSenderId: "930861122178",
    }
    firebase.initializeApp(firebaseconfig)
}
export default firebase;