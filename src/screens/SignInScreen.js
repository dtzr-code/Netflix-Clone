import React, { useRef } from 'react'
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import "./SignInScreen.css"

function SignInScreen() {

  //To remember the user email n pw
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then(() => {
      history.push('/profile')
    })
    .catch(error => {
      alert(error.message)
    })
  }

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
          <div className="signinScreen">
            <form>
              <h1>Sign In</h1>
              <input ref={emailRef} placeholder="Email" type="email" />
              <input ref={passwordRef} placeholder="Password" type="password" />
              <button type="submit" onClick={signIn}>Sign In</button>

              <h4> 
                <span className="signinScreen__gray">New to Netflix? </span> 
                <span className="signinScreen__link" onClick={()=>history.push('/signup')}>Sign Up now.</span>
              </h4>
            </form>
          </div>
        </div>  
      </div>
  )
}

export default SignInScreen
