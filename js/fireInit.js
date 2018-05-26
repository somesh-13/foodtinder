

var app_firebase={};
(function (){

      // Initialize Firebase  
      var config = {
        apiKey: "AIzaSyAfNfsN9bDnFAUEmDVKgjqOlJy_Q4FLzBo",
        authDomain: "foodtinder-3543e.firebaseapp.com",
        databaseURL: "https://foodtinder-3543e.firebaseio.com",
        projectId: "foodtinder-3543e",
        storageBucket: "foodtinder-3543e.appspot.com",
        messagingSenderId: "888433972263",

      }; 

      firebase.initializeApp(config);
      app_firebase=firebase;
})();


database = firebase.database();
function submitClick(){  
    var name=$('#name')[0].value;
    var profession=$('#profession')[0].value;
    var age=$('#age')[0].value;
    var gender=$("input[name='gender']:checked").val();
    var ref= database.ref('foodApp');
  
var data = {
    
    name: name,
    age: age,
    profession: profession,
    gender: gender,
    
}

ref.push(data);
document.getElementById("myNavInput").style.width = "0%";
} 
