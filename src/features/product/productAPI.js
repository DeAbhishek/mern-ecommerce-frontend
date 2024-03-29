import axios from "axios";

const PRODUCTS_URL = "http://localhost:8080/products";
const CATEGORIES_URL = "http://localhost:8080/categories";
const BRANDS_URL = "http://localhost:8080/brands";

export const fetchProductsByFilter = async (nwArr) => {
  let filterString = "";
  for (let obj of nwArr[0]) {
    filterString += `${Object.keys(obj)[0]}=${obj[Object.keys(obj)[0]]}&`;
  }
  let sortString = nwArr[1];
  let pageString = nwArr[2];
  const response1 = await axios.get(
    `${PRODUCTS_URL}?${pageString}&${sortString}&${filterString}`
  );
  const response2 = await axios.get(`${PRODUCTS_URL}?${filterString}`);
  return {
    products: response1.data,
    totalItems: response2.data.length,
  };
};

export const fetchCategories = async () => {
  const response = await axios.get(CATEGORIES_URL);
  return response.data;
};

export const fetchBrands = async () => {
  const response = await axios.get(BRANDS_URL);
  return response.data;
};

export const fetchProductDetailsById = async (id) => {
  const response = await axios.get(`${PRODUCTS_URL}/${id}`);
  return response.data;
};
