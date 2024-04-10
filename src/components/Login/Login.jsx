import React, { useState } from 'react';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { auth } from "../../App";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, } from "firebase/auth";
import { app } from "../../firebase";
import Navbar from "../../components/Navbar/Navbar";

// const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();

function LoginPage({user, theme, setTheme}) {
  // signOut(auth);
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password).then(value => alert('Success'));
  };

  // const signinUser = () => {
  //   signInWithEmailAndPassword(auth, email, password).then((value) => alert("Signin Success"))
  //   .catch((err) => console.log(err));
  // };

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((value) => {
        window.location.href = '/';
      })
      .catch((err) => alert(err));
  };
  

  // const signupWithGoogle = () => {
  //   signInWithPopup(auth,googleProvider).catch((err) => console.log(err))
  // };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        window.location.href = '/';
      })
      .catch((err) => console.log(err));
      ;
  };
  

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <Navbar theme={theme} setTheme={setTheme} user={user}/>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input className='LoginInput' type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='LoginInput' type="email" placeholder="Email" required/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input onChange={(e) => setPassword(e.target.value)} value={password}className='LoginInput' type="password" placeholder="Password" required />
            </div>
            <button onClick={signinUser} className='btn'>Sign In</button>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <button onClick={signupWithGoogle} className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </button>
            </div>
          </form>
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input className='LoginInput' type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='LoginInput' type="email" placeholder="Email"  required/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='LoginInput' type="password" placeholder="Password"  required/>
            </div>
            <button onClick={createUser} className='btn'>Sign Up</button>
            <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">
             
              <button onClick={signupWithGoogle} className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliqui!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
              </button>
          </div>
          <img src="/img/dogLogin1.svg" class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className='loginh3'>One of us ?</h3>
            <p className='loginp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="/img/dogLogin.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  )}

  export default LoginPage;