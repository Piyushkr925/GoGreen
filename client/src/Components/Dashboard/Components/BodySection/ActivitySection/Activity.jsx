import React from 'react'
import './activity.scss'

import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../../Assests/user5.jpeg'
import user1 from '../../../../Assests/user4.jpg'
import user2 from '../../../../Assests/user2.jpg'
import user3 from '../../../../Assests/user3.jpg'
import user4 from '../../../../Assests/user1.jpeg'



const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='seeContainer grid'>
        <div className="singleCustomer flex">
          <img src={user} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Ola Martha
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Ola Martha
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Ola Martha
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Ola Martha
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Ola Martha
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 min ago
          </div>
        </div>


      </div>

    </div>
  )
}

export default Activity