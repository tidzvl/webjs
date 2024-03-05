import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js' 
import { getDatabase, ref, set, onValue, get, child} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js' 

const firebaseConfig = {
  apiKey: "AIzaSyCP_0hKxMychNVPfFeozLAytkurhZ6B8Cg",
  authDomain: "ithopital.firebaseapp.com",
  databaseURL: "https://ithopital-default-rtdb.firebaseio.com",
  projectId: "ithopital",
  storageBucket: "ithopital.appspot.com",
  messagingSenderId: "513901096082",
  appId: "1:513901096082:web:449e1809ecbf7c7d860a4b",
  measurementId: "G-WDFCQQ7JX7"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



(function (){
	function writeUser(userId, name, email, yo){
		set(ref(database, 'users/' + userId), {
		    username: name,
		    email: email,
		    year_old : yo
		  });
		  console.log("Writed!");
	}

	function readUser(userId){
		const dbRef = ref(database);
		get(child(dbRef, `users/${userId}`)).then((snapshot) => {
		  if (snapshot.exists()) {
		    console.log(snapshot.val());
		  } else {
		    console.log("No data available");
		  }
		}).catch((error) => {
		  console.error(error);
		});
	}

	// document.getElementById('book').addEventListener('click', () => {writeUser("2","TiDz","tidz@ti.com","22");}, true);
	document.getElementById('book').addEventListener('click', () => {readUser("2");}, true);
})();