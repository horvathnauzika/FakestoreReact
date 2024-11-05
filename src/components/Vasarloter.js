import React from 'react'
import Termek from './Termek'

export default function Vasarloter(props) {

  return (
    <>
    <div className='row'>
    {props.termekLista.map((elem, index) => {
            return <Termek obj={elem} key={index}/>;
        })}
    </div>
    </>
  )
}
