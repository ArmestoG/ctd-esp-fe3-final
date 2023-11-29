import React, { createContext, useContext, useState } from "react";

// Creamos el contexto para manejar los favoritos
export const FavsContext = createContext();

// Este componente provee el contexto a toda la app
export const FavsProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  

  // Función para agregar un dentista a favoritos
  const addFav = (dentist) => {
    const { id } = dentist;

    if (!favs[id]) {
      const newFavs = { ...favs, [id]: dentist };
      setFavs(newFavs);
      localStorage.setItem('favs', JSON.stringify(newFavs));
    } else {
      console.log(`${dentist.name} ya está en favoritos`);
    }
  };


  return (
    <FavsContext.Provider value={{ favs, addFav }}>
      {children}
    </FavsContext.Provider>
  );
};