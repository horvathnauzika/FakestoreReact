import { createContext, useState } from "react";

export const KosarContext = createContext("");
export const KosarProvider=({children})=>{
    
    return(
        <KosarContext.Provider value={{kosarLista, kosarba}}>
            {children}
        </KosarContext.Provider>
    )
}