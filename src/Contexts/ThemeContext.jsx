import React, { createContext, useReducer } from 'react';

// Definir el estado inicial del tema
const initialState = {
  theme: 'light',
};

// Definir acciones para cambiar el tema
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', // Cambiar entre 'light' y 'dark'
      };
    default:
      return state;
  }
};

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del contexto que envuelve la aplicación
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Acción para cambiar el tema
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};