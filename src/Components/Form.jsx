import React, { useContext, useState } from "react";
import { GlobalContext } from '../Contexts/GlobalContext';

const Form = () => {
  const { state } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Expresión regular para validar el correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.fullName.length <= 5 || !emailPattern.test(formData.email)) {
      setFormError("Por favor, verifica tu información nuevamente");
      return;
    }

    alert(`Gracias ${formData.fullName}, te contactaremos pronto vía email.`);
    setFormData({ fullName: "", email: "" }); // Reiniciar el formulario
    setFormError(""); // Limpiar mensaje de error
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={state.theme}>
        <div>
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {formError && <p style={{ color: "red" }}>{formError}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;