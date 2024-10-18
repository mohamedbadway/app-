import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

function Login({setShowLogin}) {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='login' id='login'>
      <form className="login-container">

        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password'  required/>
        </div>

        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Polic..</p>
        </div>

        {currState === "Login"
          ? <p>Create A New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
          :<p>Already Have An Account? <span onClick={()=>setCurrState("Login")}>Login Here</span> </p>
        }

      </form> 
    </div>
  )
}

export default Login
