import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const ALTContext = createContext();

export function ALTContextProvider({ children }) {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const { data } = await axios.get(
        `https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json`

      );

      //console.log(data.tokens);
      setTokens(data.tokens);

    }

    fetchData();

  }, []);


  
  return (
    <ALTContext.Provider
      value={{
        tokens
      }}
    >
      {children}
    </ALTContext.Provider>
  );
}

export function useAPI_alt() {
  const context = useContext(ALTContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}