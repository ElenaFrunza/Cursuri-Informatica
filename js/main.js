const firebaseConfig = {
    apiKey: "AIzaSyDci3zI4RLX_oKqA6ulKXiUoYQXKhoFkx8",
    authDomain: "cursuri-83b61.firebaseapp.com",
    projectId: "cursuri-83b61",
    storageBucket: "cursuri-83b61.appspot.com",
    messagingSenderId: "201923390569",
    appId: "1:201923390569:web:deffe7302bbf2f4c0946f8",
    measurementId: "G-8Q0ZRTBRBH"
  };

const postareBtn = document.getElementById('postare-btn');
const admin = "xSZ8l9pzGfS2YGGe9ZkbAtVDga23";


firebase.initializeApp(firebaseConfig);

//referinta la serviciul de autentificare
const auth = firebase.auth();
// referinta la baza de date
const db = firebase.firestore();
//referinta la colctia teme din baza de date
const temeDb = db.collection("teme");

let user = null;

const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();
    
    yearElement.innerHTML = date.getFullYear() + " ©";
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}
function refresh(){
    window.location.reload();
}

function isAdmin () {
    if (user == null) {
        return false;
    }

    return admin == user.uid;

}
function formatareData(stamp){
let data = new Date(stamp);
let an = data.getFullYear();
let luna = data.getMonth() +1;
let zi = data.getDate();

let result = zi + "-" + luna + "-" + an;

return result;

}

auth.onAuthStateChanged (function (fuser){
    user = fuser;

    if( isAdmin() == true){
        postareBtn.style.display = "block";
    }
    else {
        postareBtn.style.display = "none";
    }

    document.querySelector("body").style.display = "block";
});
