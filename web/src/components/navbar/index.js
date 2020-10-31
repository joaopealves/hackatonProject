import React from 'react';
import './styles/styles.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="link">
        <p className="linkItem">Como funciona</p>
        <p className="linkItem">Quem somos</p>
        <p className="linkItem">Parceiros</p>
        <p className="linkItem">Vantagens</p>
      </div>
      <button className="button buttonLogin">Login</button>
      <button className="button buttonRegister">Cadastro</button>
    </div>
  );
}
