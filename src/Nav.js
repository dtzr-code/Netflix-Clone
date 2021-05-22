import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Nav.css'

function Nav() {

  /* For the browse button */
  const [isOpen, setOpen] = useState(false)

  const toggle= () => {
    setOpen(!isOpen)
  }

  /* For the search button */
  const [IsSearch, setSearch] = useState(false)

  const toggle_search = () => {
    setSearch(!IsSearch)
  }

  /* For the settings */
  const [IsSettings, setSettings] = useState(false)
  const toggle_setting = () => {
    setSettings(!IsSettings)
  }

  /* To toggle the subscribe page */
  const [isProfile, setProfile] = useState(true)
  const toggleSubscribe = () => {
    if (isProfile){
      setProfile(!isProfile)
      history.push('./home')
    } else {
      history.push('./profile')
    }
  }

  /* to create the /profile page */
  /* use to programmatically push the next page into the history stack*/
  const history = useHistory();

  /* Creating animation when scroll, navbar disappears */
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {<img 
          onClick={()=> history.push('/')}
          className="nav__logo" 
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt=""
        />
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
  }},[]) //code only runs when the component mounts

  return (
    <div className = {`nav ${show && "nav__black"}`}> {/* Only add the nav__black class if the show variable is true  */}
      <div className="nav__contents">
        {/* Netflix Logo */}
        <img 
          onClick={()=> history.push('/home')}
          className="nav__logo" 
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt=""
        />

        {/* Nav Links */}
        <div className="navbar__selection">
          <ul className="navbar__ul">
            <li className="navbar__li">Home</li>
            <li className="navbar__li">Series</li>
            <li className="navbar__li">Films</li>
            <li className="navbar__li">New and Popular</li>
            <li className="navbar__li">My List</li>
          </ul>
        </div>

        {/* Nav Dropdown Menus */}
        <div className="navbar__dropdown">
          <button onMouseOver = {toggle} className="dropbtn"> Browse </button>
          <div 
            style = {{display: isOpen ? 'flex' : 'none'}}
            onMouseMove = {toggle}
            className="dropdown__content">
            <option className="dropdown__option">Home</option>
            <option className="dropdown__option">Series</option>
            <option className="dropdown__option">Films</option>
            <option className="dropdown__option">News and Popular</option>
            <option className="dropdown__option">My List</option>
          </div>
        </div>

        {/* Nav Search Menu */}
        <div className="search__bar">
          <img 
            onClick = {toggle_search}
            src = "http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png"
            alt=""
          />
          <input 
            style={{
              display: IsSearch ? 'inline-block' : 'none',
              transform: IsSearch ? "scaleX(1)" : "none",
            }}
            placeholder="Titles, people, genres">
          </input>
        </div>

        {/* Dropdown Avatar Logo */}
        <div className="dropdown">
            <img
              onClick={toggleSubscribe}
              onMouseOver={toggle_setting}
              className="nav__avatar" 
              src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa"
              alt=""
            />
            <div 
              style={{display: IsSettings ? "inline-block" : 'none'}}
              className="settings__container">
              <div className="profiles__columns">
                <div className="profile__column">
                  <img
                    src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYbN2li_u3UMH4coDfBhqybOKYFnffjNB-tZ4qANwBa5drVi9_-Wr3sHmibY6gxM_Uizr856wW0cFLkDdGBSRnwpo7ij.png?r=2ca"
                    alt=""/>
                    <p>Christina</p>
                </div>
                <div className="profile__column">
                  <img
                      src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97"
                      alt =""
                    />
                    <p>Alvin</p>
                </div>
                <div className="profile__column">
                  <img
                    src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABff9GwVfmWtIhQBhZVLjKfT9MzvpJ99k4whm5tLNuu006c_wBrRuAiNJJIztprmSh-qB7GM5P70bOGOZHnewedP84pLe.png?r=3ce"
                    alt =""
                    />
                    <p>Issac</p>
                </div>
                <div className="profile__column">
                  <img
                    src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd"
                    alt =""
                    />
                    <p>Children</p>
                </div>
              </div>

              <h3
                onClick={()=> history.push('./ManageProfiles')}
                className="with_border_bottom"
              >Manage Profiles 
              </h3>
              <h3 className="with_border_bottom">Children</h3>
              <div className="account__settings">
                <h3>Account</h3>
                <h3>Help Centre</h3>
                <h3 onClick={()=> auth.signOut()}>Sign out of Netflix</h3>
              </div>
            </div>
          </div>
        

        {/* Manage profile section when hover over avatar logo */}
        
      </div>
    </div>
  )
}

export default Nav
