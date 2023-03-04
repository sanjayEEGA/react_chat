import React, { useRef, useState } from 'react';
import './App.css';
import './Style.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import logo from './logo.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDtQtB9xIMxjfiL5S1sG60MNJ06zK_9GMg",
  authDomain: "react-curd-bef16.firebaseapp.com",
  projectId: "react-curd-bef16",
  storageBucket: "react-curd-bef16.appspot.com",
  messagingSenderId: "977324988674",
  appId: "1:977324988674:web:7ff31264f6684c35db8a1b",
  measurementId: "G-0JDZTQ7EYB"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h2  class="header-h1-tag">Chat With Sanjay</h2>
        <SignOut />
      </header>


      
      <section>
      
        <div class="pt-table desktop-768">
            <div class="pt-tablecell page-home relative" 
                    
                    >
                <div class="overlay"></div>
                {user ? <ChatRoom /> : <SignIn />}
                            
                            
            </div>
        </div>
    
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
        
<div class="container">
  
    <div class="row">
        <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            

            <div class="hexagon-menu clear">
               
                
                
                <div class="hexagon-item">
                    <div class="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <a  class="hex-content">
                        <span class="hex-content-inner">
                            <span class="icon">
                            <i class="fa-brands fa-google"></i>
                            </span>
                            <a className="sign-in" onClick={signInWithGoogle}>
                            <span class="title">Sign in with Google</span></a>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                    </a>
                </div>
                
                
            </div>
            
        </div>
       
    </div>

    


</div>
 
        <h3 class="animate-charcter d-flex justify-content-center" >Do not violate the community guidelines or you will be banned for life!</h3>
    

      {/* <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> */}
      {/* <p>Do not violate the community guidelines or you will be banned for life!</p> */}
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
<>
    
    {/* <a className="" onClick={() => auth.signOut()}>  Sign Out</a> */}

    <div class="navigation">
  
  <a class="button" href="" onClick={() => auth.signOut()}>
      {/* <i class="fa-solid fa-right-from-bracket"></i> */}
      <img src={logo} className="App-logo" alt="logo" />
<div class="logout">SignOut</div>

  </a>

</div>
    

    
    </>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      {/* <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" /> */}
      <input  value={formValue} onChange={(e) => setFormValue(e.target.value)}  class="animate-charcter" placeholder="say something nice" />
      <button type="submit" disabled={!formValue}><i class="fa-solid fa-paper-plane"></i></button>
   
    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
     
    
    </div>
  </>)
}


export default App;
