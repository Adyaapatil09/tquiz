// new code for firebase db
function savescr() {
     var score = document.getElementById("score");
     localStorage.setItem("score", score.value);
     alert("score has been saved");
   }
   
   // stating config for firebase
   const firebaseConfig = {
     apiKey: "AIzaSyA2IJxHPvx_YRXBT8TU0jRJws-RpbB4nWo",
     authDomain: "Codestorm-b31c4.firebaseapp.com",
     projectId: "Codestorm-b31c4",
     storageBucket: "Codestorm-b31c4.appspot.com",
     messagingSenderId: "379140324528",
     appId: "1:379140324528:web:26cc01c20583605e228f75",
     measurementId: "G-J5L4RJLQ0Q",
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
   //start db
   let firestore = firebase.firestore();
   // get username for current user
   var username = localStorage.getItem("name");
   //declaring colection
   const userinfo = firestore.collection("users");
   //fetch and save data
   userinfo
     .doc(username)
     .set({
       name: localStorage.getItem("name"),
       phone: localStorage.getItem("phone"),
       score: localStorage.getItem("score"),
     })
     .then(function (userinfo) {
       //sucess on saving data
       console.log("Score Saved Successfully");
     })
     .catch(function (error) {
       //error on failure to save
       console.log("error! could not save data");
       console.log(error)
     });
   