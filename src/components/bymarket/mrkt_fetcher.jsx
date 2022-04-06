import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const MRKTContext = createContext();

export function MRKTContextProvider({ children }) {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {


    async function fetchCategories(){
      ////////////////////////CATEGORY
      const { data1 } = await axios.get(
        `https://api.coingecko.com/api/v3/categories`

      );
      console.log(data1);
      setCategories(data1);
    }

    fetchCategories();


    async function fetchCategory(){
      ////////////////////////CATEGORY
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=gaming&order=market_cap_desc&per_page=100&page=1&sparkline=false`

      );
      //console.log(data);
      setCategory(data);
    }
    


    fetchCategory();

  }, []);


  
  return (
    <MRKTContext.Provider
      value={{
        category
      }}
    >
      {children}
    </MRKTContext.Provider>
  );
}

export function useAPI_mrkt() {
  const context = useContext(MRKTContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}