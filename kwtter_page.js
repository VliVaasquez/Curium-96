//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBv48OKKLgv8f9d5yog07OqGolF7fIqnB4",
    authDomain: "kwitter-app-2-ade93.firebaseapp.com",
    databaseURL: "https://kwitter-app-2-ade93-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-2-ade93",
    storageBucket: "kwitter-app-2-ade93.appspot.com",
    messagingSenderId: "251681434324",
    appId: "1:251681434324:web:cd5e63cec1fbed84576941"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
 function send()
 {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });

       document.getElementById("msg").value = "";
             
 }
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
