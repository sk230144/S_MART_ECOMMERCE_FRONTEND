import React from 'react'
import Navbar from '../features/Navbar/Navbar.js'
import ProductList from '../features/counter/ProductList.js'

const Home = () => {
  return (
    <div>
       <Navbar>
         <ProductList></ProductList>
       </Navbar>
    </div>
  )
}

export default Home
