import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const MRKTContext = createContext();

export function MRKTContextProvider({ children }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/categories'
      );
      //console.log(data);
      setCategories(data);
    }

    fetchData();



  }, []);


  
  return (
    <MRKTContext.Provider
      value={{
        categories
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