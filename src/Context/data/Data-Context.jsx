import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/api/products");
      const responseData = [...response.data.products];
      setData((previous) => (previous = responseData));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ProductDataContext.Provider value={{ data }}>
      {children}
    </ProductDataContext.Provider>
  );
};

const useProduct = () => useContext(ProductDataContext);

export { useProduct, ProductDataProvider };
