import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider=({children})=>{

    const [termekLista, setTermekLista]=useState([]);
    const [katLista, setKatLista]=useState([]);

    const getAdat= async(vegpont, callbackFv)=>{
        try{
            const response = await myAxios.get(vegpont);
            console.log(response)
            callbackFv(response.data)
        }catch(err){
            console.log("Hiba történt az adatok lekérdezésekor")
        }finally{

        }
    }

    const postAdat= async(vegpont, adat)=>{
        try{
            const response = await myAxios.post(vegpont, adat);
            console.log(response)
            setTermekLista(response.data)
        }catch(err){
            console.log("Hiba történt az adatok küldésekor")
        }finally{

        }
    }

    const deleteAdat= async(vegpont, id)=>{
        try{
            const response = await myAxios.delete(`${vegpont}/${id}`);
            console.log(response)
            setTermekLista(elozoLista => elozoLista.filter(termek => termek.id !== id))
        }catch(err){
            console.log("Hiba történt az adat törlésekor")
        }finally{

        }
    }

    useEffect(()=>{
        getAdat('/products', setTermekLista);
        getAdat('/products/categories', setKatLista);
        // Ide nem kell a post
    },[])

    return(
        <ApiContext.Provider value={{termekLista, postAdat, deleteAdat}}>
            {children}
        </ApiContext.Provider>
    )
}