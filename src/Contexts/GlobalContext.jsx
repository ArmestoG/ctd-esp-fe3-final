import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

// Definir el estado inicial del contexto global
const initialState = {
  theme: "light",
  dentists: [],
  favorites: [], // Estado para almacenar los favoritos
};

// Reducer para manejar las acciones del contexto global
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "SET_DENTISTS":
      return {
        ...state,
        dentists: action.payload,
      };
    case "ADD_FAVORITE":
      const newFavDentist = action.payload;
      const existingFav = state.favorites.find(
        (fav) => fav.id === newFavDentist.id
      );

      if (!existingFav) {
        const updatedFavList = [...state.favorites, newFavDentist];
        localStorage.setItem(newFavDentist.id, JSON.stringify(newFavDentist));
        return {
          ...state,
          favorites: updatedFavList,
        };
      }
      return state;
    case "REMOVE_FAVORITE":
      const updatedFavList = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      localStorage.removeItem(action.payload);
      return {
        ...state,
        favorites: updatedFavList,
      };
    case "LOAD_FAVORITES_FROM_LOCAL_STORAGE":
      // Acción para cargar favoritos desde localStorage al estado global
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      if (storedFavorites) {
        return {
          ...state,
          favorites: storedFavorites,
        };
      }
      return state;
    case "REMOVE_ALL_FAVORITES":
      localStorage.clear(); // Elimina todos los datos del localStorage
      return {
        ...state,
        favorites: [], // Vacía la lista de favoritos en el estado
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
    dispatch({ type: "TOGGLE_THEME" });
  };

  // Acción para obtener los dentistas de la API
  const fetchDentists = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status === 200) {
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      } else {
        throw new Error("Failed to fetch dentists");
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
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
