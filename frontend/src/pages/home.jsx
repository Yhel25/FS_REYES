import React from 'react';
import Header from '../components/header.jsx';
import Hero from "../components/hero.jsx";
import ProductGuide from '../components/ProductGuide.jsx';
import Product_list from '../components/Product_list.jsx';
const home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ProductGuide/>
      <Product_list/>
    </div>
  )
}

export default home
