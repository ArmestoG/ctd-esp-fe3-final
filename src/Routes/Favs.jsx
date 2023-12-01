import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Contexts/GlobalContext";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const favsArray = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const dentist = JSON.parse(localStorage.getItem(key));
      favsArray.push(dentist);
    }
    setFavDentists(favsArray);
  }, []);

  const removeAllFavs = () => {
    localStorage.clear(); // Elimina todos los datos del localStorage
    dispatch({ type: "REMOVE_ALL_FAVORITES" });
  };

  useEffect(() => {
    const updatedFavDentists = state.favorites.map((fav) => ({
      ...fav,
      isFavorite: true,
    }));
    setFavDentists(updatedFavDentists);
  }, [state.favorites]);

  return (
    <>
      <h1>Destacados</h1>
      <div className="card-grid">
        {favDentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
      <div className="remove-all-favs">
        <button onClick={removeAllFavs}>🗑️</button>
      </div>
    </>
  );
};

export default Favs;
