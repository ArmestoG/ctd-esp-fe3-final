import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Contexts/GlobalContext'; 

const Navbar = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  return (
    <nav className={state.theme}>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contacto</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;