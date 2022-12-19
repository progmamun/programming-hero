import React from "react";

import { useProducts } from "../context/ProductProvider";
import ProductCard from '../components/ProductCard';

const TopRated = () => {
  const { state: { products, loading, error }, } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products.filter((product) => product.rating >= 4).map((product) => (
      <ProductCard key={product._id} product={product} />
    ))
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
