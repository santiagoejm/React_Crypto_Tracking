import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const ContextCrypto = ({ children }) => {
  const [currency, setCurrency] = useState("EUR");
  const [symbol, setSymbol] = useState("€");

  useEffect(() => {
    if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default ContextCrypto;

export const CryptoState = () => {
  return useContext(Crypto);
};
