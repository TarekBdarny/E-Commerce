import React, { createContext, useContext, useState } from "react";
import useGetCreditCards from "../hooks/card/useGetCreditCards";

export const creditCardsContext = createContext();

export const useCreditCardsContext = () => {
  return useContext(creditCardsContext);
};

export const CreditCardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  return (
    <creditCardsContext.Provider value={{ cards, setCards }}>
      {children}
    </creditCardsContext.Provider>
  );
};
