import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setDentist(data);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDentist();
  }, [id]); // Se ejecuta cuando cambia el id

  return (
    <>
      <h1>Detalle Dentista ID {id}</h1>
      {dentist && (
        <div className="detail-container">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{dentist.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Detail;
