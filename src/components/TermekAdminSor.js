import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

export default function TermekAdminSor(props) {

    const { deleteAdat } = useContext(ApiContext); 

    const torles = () => {
        deleteAdat('/products', props.obj.id); 
    }

  return (
    <tr>
        <td>{props.obj.title}</td>
        <td><img src={props.obj.image} alt="termek" style={{ width: '100%' }}></img></td>
        <td>{props.obj.description}</td>
        <td>{props.obj.title}</td>
        <td><button type="button" className="btn btn-success" >Szerkeszt</button></td>
        <td><button type="button" className="btn btn-danger" onClick={torles}>Töröl</button></td>
    </tr>
  )
}
