import React , { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from '../Contexts/GlobalContext';


const Card = ({ name, username, id }) => {
  
  const { state, dispatch } = useContext(GlobalContext);


  const addFav = () => {
    const favDentist = { name, username, id };

    const existingFav = state.favorites.find(fav => fav.id === id);

    if (!existingFav) {
      dispatch({ type: 'ADD_FAVORITE', payload: favDentist });
      alert(`Se agregó al Dr/a ${name} a favoritos`);
    } else {
      alert(`${name} Ya está en favoritos`);
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
        <Link to={`/dentist/${id}`} className="detailLink">
          Ver detalle
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
    </div>
  );
};

export default Card; 