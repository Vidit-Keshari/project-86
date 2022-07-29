user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDaWhnPg05Xp0yVnp3KDEtZ92tLF9YVWwY",
      authDomain: "classtestkwitter-89dd5.firebaseapp.com",
      databaseURL: "https://classtestkwitter-89dd5-default-rtdb.firebaseio.com",
      projectId: "classtestkwitter-89dd5",
      storageBucket: "classtestkwitter-89dd5.appspot.com",
      messagingSenderId: "1070060335854",
      appId: "1:1070060335854:web:edabc354d541f06d6e39ff"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}