import { createContext, useState } from "react";

export const KosarContext = createContext();

export const KosarProvider = ({ children }) => {
    
  const [kosarLista, setKosarLista] = useState([]); // ez lesz a kosár tartalma (termékek listája)

  const kosarba = (termek) => {
    setKosarLista((elozoKosarLista) => [...elozoKosarLista, termek]); // itt adjuk hozzá az új terméket a kosárhoz
  };

  return (
    <KosarContext.Provider value={{ kosarLista, kosarba }}>
      {children}
    </KosarContext.Provider>
  );
};