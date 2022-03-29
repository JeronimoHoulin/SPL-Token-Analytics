import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    async function fetchData() {

      const { data } = await axios.get(
        `https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json`
      );

      console.log(data.tokens);
      setTokens(data.tokens);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider value={{tokens}}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
