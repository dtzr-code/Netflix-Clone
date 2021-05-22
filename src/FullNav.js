/* NAVBAR FOR MANAGE PROFILE SCREEN */

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from './features/userSlice'
import db from './firebase'
import './FullNav.css'

function FullNav() {

  const [isProfile, setProfile] = useState(true)
  const user = useSelector(selectUser)

  const toggle = () => {
    if (isProfile){
      setProfile(!isProfile)
      history.push('./home')
    } else {
      history.push('./profile')
    }
  }


  /* Creating animation when scroll, navbar disappears */
  const [show, handleShow] = useState(false);

  /* to create the /profile page */
  /* use to programmatically push the next page into the history stack*/
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {<img 
          onClick={()=> history.push('/')}
          className="nav__logo" 
          src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa"
          alt=""
        />
      handleShow(false);
    }
  }

  
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
  }},[transitionNavBar]) //code only runs when the component mounts

  /* To check if subscription collection exists */
  /* Only when subscripotion collection exists, then allow to render the movies page when clicking netflix logo */
  const [subscribed, setSubscribed] = useState()
  useEffect(()=> {
      db.collection("customers")
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach( async subscription => {
            if(subscription.exists){
              setSubscribed(true)
            }else{
              setSubscribed(false)
            };
          });
        });
  }, [user.uid])
  
  return (
    <div className = {`Fullnav ${show && "Fullnav__black"}`}> {/* Only add the nav__black class if the show variable is true  */}
      <div className="Fullnav__contents">
        {/* Netflix Logo */}
        {/* onClick to home page only renders when the user has subscribed to a package */}
        <img 
          onClick={()=> subscribed ? history.push('/home') : alert("Please subscribe to a plan first")}
          className="Fullnav__logo" 
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt=""
        />

        {/* Avatar Logo */}
        <img
          onClick={toggle}
          className="Fullnav__avatar" 
          src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa"
          alt=""
        />
      </div>
    </div>
  )
}

export default FullNav
