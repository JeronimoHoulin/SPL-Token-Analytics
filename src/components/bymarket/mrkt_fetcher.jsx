import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const MRKTContext = createContext();

export function MRKTContextProvider({ children }) {

  const [tikkers, setTikkers] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

      );

      console.log(data);
      setTikkers(data);

    }

    fetchData();

  }, []);


  
  return (
    <MRKTContext.Provider
      value={{
        tikkers
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