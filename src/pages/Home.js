import React from 'react'
import Navbar from '../features/Navbar/Navbar.js'
import ProductList from '../features/counter/components/ProductList.js'
import { Link } from 'react-router-dom'
import Footer from '../features/common/Footer.js'

const Home = () => {
  return (
    <div>
       <Navbar>
         <ProductList></ProductList>
       </Navbar>
       <Footer></Footer>
    </div>
  )
}

export default Home
