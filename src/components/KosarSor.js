import React from 'react'

export default function KosarSor(props) {
  return (
    <tr>
      <td>{props.obj.title}</td>
      <td>{props.obj.price}$</td>
      <button type="button" class="btn btn-dark">Töröl</button>
    </tr>
  )
}
