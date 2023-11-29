import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Contexts/GlobalContext';

const Detail = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDentist(data);
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDentist();
  }, [id]); // Se ejecuta cuando cambia el id

  return (
    <main className={state.theme}>
      <h1>Detail Dentist ID: {id}</h1>
      {dentist && (
        <div>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </main>
  );
};

export default Detail;