import { createContext, useContext, useState } from "react";

export const creditCardsContext = createContext();

export const useCreditCardsContext = () => {
  return useContext(creditCardsContext);
};

export const CreditCardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  return (
    <creditCardsContext.Provider value={{ cards, setCards }}>
      {children}
    </creditCardsContext.Provider>
  );
};
