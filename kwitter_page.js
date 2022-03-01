var firebaseConfig = {
    apiKey: "AIzaSyBldzs4nB4d275lAbZriySYQpvl_isklrQ",
    authDomain: "letschat-ca8a7.firebaseapp.com",
    databaseURL: "https://letschat-ca8a7-default-rtdb.firebaseio.com",
    projectId: "letschat-ca8a7",
    storageBucket: "letschat-ca8a7.appspot.com",
    messagingSenderId: "130830876849",
    appId: "1:130830876849:web:3534eef03d11dcd1672290",
    measurementId: "G-9T2288ENZB"
  };
      
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
      document.getElementById("msg").value="";
      
  }