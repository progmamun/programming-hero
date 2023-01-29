import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/products");
  return data.data.data;
};

export const postProduct = async (productData) => {
  await axios.post("/product", productData);
};
export const deleteProduct = async (id) => {
  await axios.delete(`/product/${id}`);
};
