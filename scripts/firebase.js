
      //Importo solo los metodos que voy a usar de firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, where} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js" 
        import{validateUserState} from './index'
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyA0zk9UtcESSCmXhPPUbqb_VqRNaqQfdw8",
          authDomain: "fir-prog-web.firebaseapp.com",
          projectId: "fir-prog-web",
          storageBucket: "fir-prog-web.appspot.com",
          messagingSenderId: "886358910534",
          appId: "1:886358910534:web:03e36396fe22f4452d8c47"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        const db = getFirestore(app);
        const auth = getAuth(app); //inicializar autenticación

//CREAR PRODUCTOS
        export async function addTask(title,description){
          try {
            const docRef = await addDoc(collection(db, "task"), { //funcion asincrona para que mande los datos a la colección "task"
              title,
              description,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
        }

        export async function getAllTasks(){
          const querySnapshot = await getDocs(collection(db, "task")); //Toma una "foto" de las tareas que estamos mandando
          const mappedArrray = []
          querySnapshot.forEach((doc) => { //Un foreach para que cada una de las cosas que mandamos las devuelva en el mappedArray (que aparece en consola)
            console.log(doc.id, " => ", doc.data());
            mappedArrray.push(doc.data())
          });

          return mappedArrray
        }


        //SIGN IN
        export function newUser(email,password){
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => { //promesa --> despues de hacer algo x, realiza algo y
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            alert(errorMessage)
          });
        
        }

          //LOGIN
          export function login(email,password){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
            });

          }
  
          export function signOut(){
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
            
          }


          onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              validateUserState(true);

          
            } else {

              validateUserState(false);
            }
          });

          const buttonRedirect = document.getElementById('redirect')

          if(validateUserState === true){
            redirect.innerHTML= "";
            redirect.innerHTML += `
            <a href="./index.html"></a>`
          } else{
            alert('There´s a problem with your account session')
          }