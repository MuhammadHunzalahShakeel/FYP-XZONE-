import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
import Loginimage from "../../assets/Loginimage.svg"
import Logo from "../../assets/Logo.svg"
import axios from "axios";

import { Link } from "react-router-dom";


export default function Login() {
  const baseURL = "http://18.222.182.9:5000/api/auth/login/admin";
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    e.target.name === 'login-email' ? setLoginData({ ...loginData, email: e.target.value }) : setLoginData({ ...loginData, password: e.target.value });
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await login({ variables: { email: loginData.email, password: loginData.password } });
      console.log(loginData)
      
      // console.log(error, '123123')
      // console.log(loading)
      axios
      .post(baseURL, loginData)
      .then((response) => {if(response.status===200){
        console.log(response.data)
        localStorage.setItem('admin', JSON.stringify(response.data["0"]));
        localStorage.setItem('token', response.data.token);
        navigate("/advertisment");
          window.location.reload();
      }
      else{
        console.log(response)
      }
});
}
      
    catch (error) {
      console.log(error.message)
 }
  
  }
  return (
    <div className="Login">
        <div className="Loginleft">
                <div>
                <img src={Loginimage} className='Shoppingimage'  alt="Logo Image" ></img>  
                </div>
        </div>
        <div className="Loginright">
            <img src={Logo}  className='Logo' alt="Logo"></img>
            <p>Welcome back</p>
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-4">
              <label  class="form-label">Email</label>
              <input type="email" class="form-control" name='login-email' onChange={handleChange} id="adminemail" placeholder="John.snow@gmail.com" />
              </div>
              <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" name='login-password' onChange={handleChange} class="form-control" id="adminpassword" placeholder="*********" />
              </div>
              <div class="d-grid gap-2 col-3 mx-auto">
              {/* <button class="btn btn-primary" type="button"><Link to="/advertisment" className='loginbutton'>Login Now</Link></button> */}
              <button class="btn btn-primary" type="submit">Login Now</button>
              </div>
              <div className="signup">Don't have an account? <Link to="/signup" className='linktosignup' >Sign Up</Link> </div>
            </form>
        </div>
    </div>
    
   
  )
}
