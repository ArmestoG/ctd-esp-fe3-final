import React, { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalContext'; 

const Footer = () => {
  const { state } = useContext(GlobalContext);
  return (
    <footer className={state.theme} >
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
