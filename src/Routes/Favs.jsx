import React, { useContext, useEffect, useState } from 'react';
import Card from "../Components/Card";
import { GlobalContext } from '../Contexts/GlobalContext';

const Favs = () => {
  const { state } = useContext(GlobalContext);
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

  return (
      <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
      </main>
    
  );
};

export default Favs;