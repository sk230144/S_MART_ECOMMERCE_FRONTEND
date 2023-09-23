import React from 'react'
import ProductDetails from '../features/counter/components/ProductDetails.js'
import Navbar from "../features/Navbar/Navbar.js"
import Footer from '../features/common/Footer.js'

const ProductDetailPage = () => {
  return (
    <div>
    <Navbar>
      <ProductDetails></ProductDetails>
      </Navbar>
      <Footer></Footer>
    </div>
  )
}

export default ProductDetailPage
