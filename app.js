var firebaseConfig = {
    apiKey: "AIzaSyDy_RL0C07Y2ACedRr5ESTq_dKvwfHV7gY",
    authDomain: "web-page-saylani.firebaseapp.com",
    databaseURL: "https://web-page-saylani.firebaseio.com",
    projectId: "web-page-saylani",
    storageBucket: "web-page-saylani.appspot.com",
    messagingSenderId: "526063753920",
    appId: "1:526063753920:web:2e454c3244bb5def9aab25",
    measurementId: "${config.measurementId}"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  var database = firebase.database()

//   console.log(database)



///ADD TODO///
function addtodo(){

        ///get input//
        var input = document.getElementById("todo")
        var todoObj = {
            todo : input.value
        }
        console.log("hit")

        database.ref("/todos").push(todoObj)
        input.value = ""


}

database.ref("/todos").on("child_added" , (data)=>{
        console.log(data.val());
        console.log(data.key);
})
 

///DELETE ALL TODO///
function  delTodo(){

}