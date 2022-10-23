import React from 'react'
import './Login.css'
import Loginimage from "../../assets/Loginimage.svg"
import Logo from "../../assets/Logo.svg"
export default function Login() {
  return (
    <div className="Login">
        <div className="Loginleft">
                <div>
                <img src={Loginimage} className='Shoppingimage'  alt="Logo Image"  ></img>  
                </div>
        </div>
        <div className="Loginright">
            <img src={Logo}  className='Logo' alt="Logo" ></img>
            <p>Welcome back</p>
            <h2>Login to your account</h2>
            <div class="mb-4" >
            <label  class="form-label">Email</label>
            <input type="email" class="form-control" id="adminemail" placeholder="John.snow@gmail.com" />
            </div>
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="adminpassword" placeholder="*********" />
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary" type="button">Login Now</button>
            </div>













            {/* <div>
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="adminemail" placeholder="John.snow@gmail.com" />
            </div> */}

        </div>
    </div>
  )
}
