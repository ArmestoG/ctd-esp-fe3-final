import React from 'react'; 
import { Link } from 'react-router-dom' ;

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact' >Contacto</Link>
      <button >Change theme</button>
    </nav>
  )
}

export default Navbar