import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Contexts/GlobalContext";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const isFavorite = state.favorites.some((fav) => fav.id === id);

  const addOrRemoveFavorite = () => {
    const isFavorited = state.favorites.some((fav) => fav.id === id);

    if (!isFavorited) {
      dispatch({ type: "ADD_FAVORITE", payload: { name, username, id } });
    } else {
      dispatch({ type: "REMOVE_FAVORITE", payload: id });
    }
  };

  return (
    <div className={`card ${state.theme}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className="card-content">
        <img src="/images/doctor.jpg" alt="Doctor" className="card-image" />
        <h3>{name}</h3>
        <p>{username}</p>
      </div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentist/${id}`} className="detailLink">
        Ver detalle
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={addOrRemoveFavorite}
        className={`favButton ${isFavorite ? "favorite" : "not-favorite"}`}
      >
        {isFavorite ? (
          <span role="img" aria-label="favorite">
            ⭐
          </span>
        ) : (
          <span role="img" aria-label="not-favorite">
            ☆
          </span>
        )}
      </button>
    </div>
  );
};

export default Card;
