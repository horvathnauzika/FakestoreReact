import { createContext, useState } from "react";

export const KosarContext = createContext();

export const KosarProvider = ({ children }) => {
    
  const [kosarLista, setKosarLista] = useState([]);

  const kosarba = (termek) => {
    setKosarLista((elozoKosarLista) => [...elozoKosarLista, termek]);
  };

  return (
    <KosarContext.Provider value={{ kosarLista, kosarba }}>
      {children}
    </KosarContext.Provider>
  );
};