import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../features/userSlice'
import db, { auth } from '../firebase'
import FullNav from '../FullNav'
import PlanScreen from './PlanScreen'
import "./ProfileScreen.css"

function ProfileScreen() {

  const history = useHistory();
  
  /* to use the email attribute */
  const user = useSelector(selectUser)

  // To get the user subscription plan name
  const [current, setCurrent] = useState("NIL")
  useEffect(()=> {
      db.collection("customers")
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {

          /* querySnapshot represents the result of a query */
          /* loop through forEach subscriptions and retrieve the role attribute, current period start and end */
          querySnapshot.forEach( async subscription => {
            setCurrent({
              role: subscription.data().role
            });
          });
        });
  }, [user.uid])

  const signout = () => {
    auth.signOut();
    history.push('/');
  }


  return (
    <div className='profileScreen'>
      <FullNav/> {/* Reusing the nav bar */}
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img 
            src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              {/* Showing current plan: beside h3 element plans */}
              <h3>Plans (Current Plan: {current.role})</h3>

              <PlanScreen/>

              {/* Upon clicking to sign out, it will go to App.js and triggers off the listerner because the authentications tate changed */}
              {/* Now there is no userAuth, so it will dispatch the  logout action so now user is now null and retunrs back to the login screen*/}
              <button 
                onClick={signout}
                className="profileScreen__signOut"
              >Sign Out</button>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
