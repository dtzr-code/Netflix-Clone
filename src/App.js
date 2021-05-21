import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import db, { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Watching from './screens/Watching';
import ManageProfiles from './screens/ManageProfiles';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  //For logging in and logging out
  //Need for the retention of logged in info
  useEffect(() => {
    //acts like a listerner so it listens to any authenticated state change
    //if log in and refresh, it will store it to your local memory
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout())
      }
    });
    
    //cleaning up
    //if the component was to unmount, we don't want to duplicate another listerner
    return unsubscribe
  }, [dispatch, auth])

  /* For checking if user has subscribed to a plan */
  /* Only when user has subscribed to a plan, then render the movies */
  const [plan, setPlan] = useState()

  const currentUser = auth.currentUser
  if (currentUser){
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        if(!querySnapshot.empty){
          setPlan(true)
        } else {
          setPlan(false)
        }
      })
  }

  return (
    <div className="app">
      <Router>
        {/* If there is no user, render the login screen else render the app components */}
        {!user ? (
          <LoginScreen/>
        ) : (!plan ? (
          <ProfileScreen/>
        ) : (
          <Switch>
            <Route exact path = '/'>
              <Watching/>
            </Route>
            
            <Route exact path ="/home">
              <HomeScreen/>
            </Route>

            <Route exact path='/profile'>
              <ProfileScreen/>
            </Route>

            <Route exact path='/ManageProfiles'>
              <ManageProfiles/>
            </Route>
          </Switch>
        ))
        }
      </Router>
        
    </div>
  );
}

export default App;
