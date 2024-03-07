import React from 'react';
import data from './data';
import Item from './componentes/Item';

const Home = () => {
  return (
    <div>
      <h1>Destinos Turísticos</h1>
      {data.map((lugar) => (
        <Item key={lugar.id} lugar={lugar} />
      ))}
    </div>
  );
};

export default Home;
