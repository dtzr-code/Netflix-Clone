import React, { useRef } from 'react'
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import "./SignUpScreen.css"

function SignUpScreen() {

  //To remember the user email n pw
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const FirstNameRef = useRef(null);

  const history = useHistory();

  const register = (e) =>{

    e.preventDefault();
    //everytime we click the register button, we want to create an account with the user email and pw

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then()
    .catch(error => {
      alert(error.message)
    })
  };


  return (
    <div className= "loginScreen__background">
      <div className="loginScreen__gradient">
        <div className="loginScreen__navbar">
          <img
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""
          />
        </div>
        <div className="signupScreen">
          <form>
            <h1>Sign Up</h1>
            <input ref={FirstNameRef} placeholder="First Name" type="text" />
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={register}>Sign Up</button>

            <h4> 
              <span className="signupScreen__gray">Already a member? </span> 
              <span className="signupScreen__link" onClick={()=>history.push('/signin')}>Sign in now.</span>
            </h4>
          </form>
        </div>
      </div>  
    </div>
  )
}

export default SignUpScreen
