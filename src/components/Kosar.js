import React from 'react'
import KosarSor from './KosarSor'

export default function Kosar(props) {

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
          {props.kosarLista.map((elem, index)=>{
            return <KosarSor obj={elem} key={index}/>
          })}
        </tbody>
      </table>
    </div>
  )
}
