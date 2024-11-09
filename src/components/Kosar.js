import React, { useContext } from 'react'
import KosarSor from './KosarSor'
import { KosarContext } from '../contexts/KosarContext';

export default function Kosar() {
  
  const { kosarLista } = useContext(KosarContext);

  return (
    <div>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Termék</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          {kosarLista.map((elem, index)=>{
            return <KosarSor obj={elem} key={index}/>
          })}
        </tbody>
      </table>
    </div>
  )
}
