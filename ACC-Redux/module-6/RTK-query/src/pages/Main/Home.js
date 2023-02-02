import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";
import { getProducts } from "../../features/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );
  const products = data?.data;

  const activeClass = "text-white  bg-indigo-500 border-white";
  let content;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggleBrands("amd"))}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggleBrands("intel"))}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
