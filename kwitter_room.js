
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBZ_FQFlZ6KezRuI1KQ8cg0DMh2S1Sidu0",
      authDomain: "the-kwitter-app-63872.firebaseapp.com",
      databaseURL: "https://the-kwitter-app-63872-default-rtdb.firebaseio.com",
      projectId: "the-kwitter-app-63872",
      storageBucket: "the-kwitter-app-63872.appspot.com",
      messagingSenderId: "878927699302",
      appId: "1:878927699302:web:e6283b21e2e1d92be6bca7",
      measurementId: "G-F388FD88B2"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
      //End code
      });});}
getData();
