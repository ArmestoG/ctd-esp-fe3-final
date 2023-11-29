import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = () => {
    const favDentist = { name, username, id };
    const favKey = `${id}`; // Generar una clave única para cada dentista
  
    const existingFav = localStorage.getItem(favKey);
  
    if (!existingFav) {
      // Si no existe, guardar el favorito en localStorage
      localStorage.setItem(favKey, JSON.stringify(favDentist)); // Usar la clave única para almacenar el dentista
            console.log(`Se agregó al Dr/a ${name} a favoritos`);
    } else {
      // Si ya existe, mostrar un mensaje
      console.log(`${name} Ya está en favoritos`);
    }
  };
 
  
 
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card-content">
        <h3>{name}</h3>
        <p>{username}</p>               
    </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${id}`} className="detailLink">Ver detalle</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card; 