//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBfGLubvp54awpTn_U3zD91kxjz62IghVU",
  authDomain: "project-90-d25ea.firebaseapp.com",
  databaseURL: "https://project-90-d25ea-default-rtdb.firebaseio.com",
  projectId: "project-90-d25ea",
  storageBucket: "project-90-d25ea.appspot.com",
  messagingSenderId: "163370675806",
  appId: "1:163370675806:web:fec4bbfc7df1e3d23f0ecf"
  };
   
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("message").value="";
}
function logoutt(){
  
    window.location = "kwitter_room.html";
  }
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
}
});
});
}
getData();
