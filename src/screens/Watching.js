import React from 'react'
import './Watching.css'
import { useHistory } from 'react-router-dom'

function Watching() {

  const history = useHistory()

  return (
    <div className="WatchScreen">
      <div className="nav">
        <img 
            className="nav__logo" 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""
          />
      </div>
       <div className="watchScreen__details">
         <h2>Who's watching?</h2>
          <div className="watchScreen__profiles">

            <div className="watchScreen__profile">
              <img
                onClick={()=> history.push("/home")}
                src = "https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png?r=8aa"
                alt=""
              />
              <p>Derrick</p>
            </div>

            <div className="watchScreen__profile">
              <img
                onClick={()=> history.push("/home")}
                src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYbN2li_u3UMH4coDfBhqybOKYFnffjNB-tZ4qANwBa5drVi9_-Wr3sHmibY6gxM_Uizr856wW0cFLkDdGBSRnwpo7ij.png?r=2ca"
                alt=""
              />
              <p>Christina</p>
            </div>

            <div className="watchScreen__profile">
              <img 
                onClick={()=> history.push("/home")}
                src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdm_-DEYu1y2T38LnXWSy-u7u24MbY361Zg2WziU3fOqSJy3w2j3-7E9f6FQVC_Rv3zj3xGZ1SQM7F6G8WjR4XFnHwDL.png?r=fcd"
                alt =""
              />
              <p>Children</p>
            </div>

            <div className="watchScreen__profile">
              <img
                onClick={()=> history.push("/home")}
                src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97"
                alt =""
              />
              <p>Alvin</p>
            </div>

            <div className="watchScreen__profile">
              <img
                onClick={()=> history.push("/home")}
                src="https://occ-0-3069-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABff9GwVfmWtIhQBhZVLjKfT9MzvpJ99k4whm5tLNuu006c_wBrRuAiNJJIztprmSh-qB7GM5P70bOGOZHnewedP84pLe.png?r=3ce"
                alt =""
              />
              <p>Issac</p>
            </div>
            
          </div>

          <div className="watchScreen__manage">
            <button 
              onClick={()=> history.push('/ManageProfiles')}
              className="watchScreen__manage_button">MANAGE PROFILES</button>
          </div>

       </div>
    </div>
    
  )
}

export default Watching
