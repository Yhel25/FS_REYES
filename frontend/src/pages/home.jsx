import React from 'react';
import Hero from "../components/hero.jsx";
import ProductGuide from '../components/ProductGuide.jsx';
import Product_list from '../components/Product_list.jsx';
const home = () => {
  return (
    <div>
      <Hero/>
      <ProductGuide/>
      <Product_list/>
    </div>
  )
}

export default home
