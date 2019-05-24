import React from 'react';
import imagen from './cryptomonedas.png'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen" className="logotipo" />
        </div>
        <div className="one-half column">
          2
        </div>
      </div>
    </div>
  );
}

export default App;
