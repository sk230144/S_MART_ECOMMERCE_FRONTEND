import React from 'react'
import Navbar from "../features/Navbar/Navbar.js"
import UserProfile from '../features/user/components/UserProfile.js'



const UserProfilePage = () => {
  return (
   <Navbar>
   <h1 className=' mx-auto text-red-800 font-extrabold text-2xl text-center '> ---- My Profile ----</h1>
      <UserProfile></UserProfile>
   </Navbar>
  )
}

export default UserProfilePage
