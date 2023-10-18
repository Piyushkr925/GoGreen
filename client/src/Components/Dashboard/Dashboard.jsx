import React from 'react'
import Sidebar from '../Dashboard/Components/SideBarSection/Sidebar'
import Body from '../Dashboard/Components/BodySection/Body'


const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className='dasboardContainer flex'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard