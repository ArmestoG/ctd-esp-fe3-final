import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Definir el estado inicial del contexto global
const initialState = {
  theme: 'light',
  dentists: [],
};

// Reducer para manejar las acciones del contexto global
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'SET_DENTISTS':
      return {
        ...state,
        dentists: action.payload,
      };
    default:
      return state;
  }
};

// Crear el contexto global
export const GlobalContext = createContext();

// Proveedor del contexto global
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Acción para cambiar el tema
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // Acción para obtener los dentistas de la API
  const fetchDentists = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (response.status === 200) {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      } else {
        throw new Error('Failed to fetch dentists');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Cargar los dentistas al montar el componente
  useEffect(() => {
    fetchDentists();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};