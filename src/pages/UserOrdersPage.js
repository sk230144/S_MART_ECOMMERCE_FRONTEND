import React from 'react'
import Navbar from "../features/Navbar/Navbar.js"
import UserOrders from '../features/user/components/UserOrders.js'

const UserOrdersPage = () => {
  return (
    <div>
    <Navbar>
    <h1 className=' mx-auto text-red-800 font-extrabold text-2xl text-center '> ---- My Orders ----</h1>
        <UserOrders></UserOrders>
    </Navbar>
      
    </div>
  )
}

export default UserOrdersPage
