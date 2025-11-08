import React from 'react'
import { products } from '../api/products'

const Product_list = () => {
  return (
    <div>
      <h1 className='md:text-2xl font-bold mb-4 text-center p-6'>Product List</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-8xl p-4 gap-2 items-center justify-center'>
      {products.slice(0, 8).map((product, index) => (
        <div
        key={product.id}
        className="bg-theme-card rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 text-center"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-32 object-contain mb-4"
        />
        <h2 className="font-semibold text-lg text-theme-text">{product.name}</h2>
        <p className="text-sm text-theme-muted">{product.brand}</p>
        <p className="text-sm text-theme-muted mb-2">{product.type}</p>
        <p className="font-bold text-theme-accent mb-4">{product.price}</p>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-hover/80 transition">
          BUY
        </button>
      </div>
    ))}
  </div>
</div>
  )
}

export default Product_list
