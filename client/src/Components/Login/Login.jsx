import React from 'react'
import '../../App.scss'
import './Login.css'
// import '../../App.css'
import video from '../../LoginAssets/video1.mp4'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../LoginAssets/Logo.png'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='contanier flex'>
        <div className='videoDiv'> 
        <video src={video} autoPlay muted loop></video>
        <div className='textDiv'>
          <h2 className='title'>Create And Sell Extraordinary Products</h2>
          <p>Adopt the peace of nature!</p>
        </div>
        <div className='footerDiv flex'>
          <span className='text'>Dont't have an account?</span>
          <Link to={'/register'}>
            <button className='btn'>Sign Up</button>
          </Link>
        </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo Image'/>
            <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid'>
            <span className='showMessage'>Login Status will go here</span>

            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                <FaUserShield className='icon'></FaUserShield>
                <input type='text' id='username' placeholder='Enter Username'></input>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon'></BsFillShieldLockFill>
                <input type='text' id='password' placeholder='Password'></input>
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon'></AiOutlineSwapRight>
            </button>

            <a href='/dashboard'>Dashboard</a>

            <span className='forgotPassword'>
              Forgot your Password?
              <a href=''>Click Here</a>
            </span>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;