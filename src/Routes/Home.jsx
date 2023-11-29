import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Llamada a la API usando Axios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setDentists(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Renderizar las cards */}
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home