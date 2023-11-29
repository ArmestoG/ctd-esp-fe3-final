import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const [dentist, setDentist] = useState(null);


    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
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
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <h1>Detail Dentist ID: {id}</h1>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {dentist && (
        <div>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;