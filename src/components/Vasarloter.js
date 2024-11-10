import React, { useContext } from 'react'
import Termek from './Termek'
import { KosarContext } from '../contexts/KosarContext';
import { ApiContext } from '../contexts/ApiContext';

export default function Vasarloter() {

  const { kosarba } = useContext(KosarContext); // kosárba rakás funkció elérése a KosarContextből
  const { termekLista } = useContext(ApiContext); 

  const kattintas = (adat) => {
    kosarba(adat); // itt rakjuk bele a kosárba a terméket
  };

  return (
    <>
    <div className='row'>
    {termekLista.map((elem, index) => {
            return <Termek obj={elem} key={index} kattintas={kattintas}/>;
        })}
    </div>
    </>
  )
}
