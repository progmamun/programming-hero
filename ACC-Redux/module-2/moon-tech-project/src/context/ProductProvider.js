import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const value = {
    data,
  }
  return <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>;
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
}

export default ProductProvider;