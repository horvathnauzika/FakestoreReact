import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

export default function Termek(props) {

  return (
    <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className="card">
            <img className="card-img-top" src={props.obj.image} alt="Card image"></img>
            <div className="card-body">
                <h4 className="card-title">{props.obj.title}</h4>
                <p className="card-text">{props.obj.description}</p>
                <p className="card-text">{props.obj.price} $</p>
                <button type="button" className="btn btn-primary" >Kosárba</button>
            </div>
        </div>
    </div>
  )
}
