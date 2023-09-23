import React from 'react'
import Navbar from "../features/Navbar/Navbar.js"
import AdminProductList from '../features/counter copy/components/AdminProductList.js'

const AdminHome = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
    </div>
  )
}

export default AdminHome
