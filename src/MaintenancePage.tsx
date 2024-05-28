import React from 'react';
import './MaintenancePage.css';
import logo from './logo.png';

const MaintenancePage: React.FC = () => {
  return (
    <div className="maintenance-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Estamos em Manutenção</h1>
      <p>Desculpe pelo transtorno, estamos trabalhando para melhorar nosso site. Por favor, volte mais tarde.</p>
    </div>
  );
};

export default MaintenancePage;