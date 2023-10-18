// import './App.css'
import './App.scss'
import React from 'react'
// import Sidebar from './Components/Dashboard/Components/SideBarSection/Sidebar'
// import Body from './Components/Dashboard/Components/BodySection/Body'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div><Login/></div>
  },
  {
    path:'/register',
    element: <div><Register/></div>
  },
  {
    path:'/dashboard',
    element: <div><Dashboard/></div>
  }
])

function App() {
  

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
  
    // return(
    //   <div className="container">
    //   <Sidebar/>
    //   <Body/>
    //   </div>
    // )

}

export default App