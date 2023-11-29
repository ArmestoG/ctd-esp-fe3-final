import React, { useContext, useState } from "react";
import { GlobalContext } from '../Contexts/GlobalContext';
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={state.theme}>
      <h2>Want to know more?</h2>
      <p>Send us your info and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact