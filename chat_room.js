const firebaseConfig = {
    apiKey: "AIzaSyC8G8okvuuCLZVTU4NIYg1aD5u8U9cXRTc",
    authDomain: "piquenique-f3f51.firebaseapp.com",
    databaseURL: "https://piquenique-f3f51-default-rtdb.firebaseio.com",
    projectId: "piquenique-f3f51",
    storageBucket: "piquenique-f3f51.appspot.com",
    messagingSenderId: "365831359204",
    appId: "1:365831359204:web:6d09a64b7c249c81e1baf1",
    measurementId: "G-6PY3B63FH8"
  };

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";


  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }


    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Nome da sala: " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }