import React from 'react'

export default function KosarSor(props) {
  return (
    <tr>
      <td>{props.obj.title}</td>
      <td>{props.obj.price}$</td>
    </tr>
  )
}
