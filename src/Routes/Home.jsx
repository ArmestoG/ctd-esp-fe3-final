import React, { useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Contexts/GlobalContext'; 

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;