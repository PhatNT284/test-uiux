import axiosClient from "./axiosClient";

const getProducts = async () => {
  const respone = await axiosClient.get("/product");

  return respone.data;
};

export { getProducts };
