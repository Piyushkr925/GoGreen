import React from 'react'
import '../../App.scss'
import './Register.css'
// import '../../App.css'
import video from '../../LoginAssets/video1.mp4'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../LoginAssets/Logo.png'
import {FaUserShield} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Register = () => {
  return (
    <div className='registerPage flex'>
      <div className='contanier flex'>
        <div className='videoDiv'> 
        <video src={video} autoPlay muted loop></video>
        <div className='textDiv'>
          <h2 className='title'>Create And Sell Extraordinary Products</h2>
          <p>Adopt the peace of nature!</p>
        </div>
        <div className='footerDiv flex'>
          <span className='text'>Have an account?</span>
          <Link to={'/'}>
            <button className='btn'>Login</button>
          </Link>
        </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo Image'/>
            <h3>Let Us Know You!</h3>
          </div>

          <form action='' className='form grid'>

          <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <MdMarkEmailRead className='icon'></MdMarkEmailRead>
                <input type='email' id='email' placeholder='Enter Email'></input>
              </div>
            </div>


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
              <span>Register</span>
              <AiOutlineSwapRight className='icon'></AiOutlineSwapRight>
            </button>

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

export default Register;