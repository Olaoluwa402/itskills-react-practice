import React from 'react'
import Cart from '../components/Cart/Cart'
import Details from '../components/Details/Details'
import Layout from '../components/Layout/Layout'
import NotFound from '../components/NotFound/NotFound'
import Product from '../components/Product/Product'
import ProductList from '../components/ProductList/ProductList'
import NavBar from '../components/NavBar/NavBar'
import Advert from '../components/advert/Advert'
import Spinner from '../components/Spinner/Spinner'

 
function HomeScreen() {
  return (
    <div>
        <h1>HomeScreen</h1>
        <Advert />
        {/* <Spinner /> */}
        <Cart />
        <Details />
        <Layout />
        <Product />
        <ProductList />
        <NotFound />
        <NavBar />
    </div>
  )
}

export default HomeScreen