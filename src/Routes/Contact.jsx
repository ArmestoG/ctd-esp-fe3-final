import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <>
      <h1>Contacto</h1>
      <h2>¿Quieres saber más?</h2>
      <p>¡Completa tus datos y nos contacteremos contigo!</p>
      <Form />
    </>
  );
};

export default Contact;
