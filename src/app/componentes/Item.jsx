import React from 'react';

const Item = ({ lugar }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '20px',
    display: 'flex',
  };

  const detailsStyle = {
    flex: '2',
    paddingRight: '20px',  
  };

  const imageStyle = {
    flex: '1',
    borderRadius: '8px',
  };

  return (
    <div style={cardStyle}>
      <div style={detailsStyle}>
        <h2>{lugar.nombre}</h2>
        <br />
        <h4><strong>País:</strong> {lugar.pais}</h4>
        <br />
        <br />
        <h4><strong>Descripcion</strong></h4>
        <p>{lugar.descripcion}</p>
        <br />
        <p><strong>Atracciones:</strong></p>
        <ul>
          {lugar.atracciones.map((atraccion, index) => (
            <li key={index}>{atraccion}</li>
          ))}
        </ul>
      </div>
      <div style={imageStyle}>
        <img src={lugar.imagen} alt={lugar.nombre} style={{ width: '100%', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default Item;




