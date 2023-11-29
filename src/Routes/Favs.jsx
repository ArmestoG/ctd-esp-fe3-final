import React, { useEffect, useState } from 'react';
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage; // Obtener todos los items del Local Storage
    const favsArray = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const dentist = JSON.parse(localStorage.getItem(key));
        favsArray.push(dentist);
      }
    setFavDentists(favsArray);
  }, []);
 
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favDentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
