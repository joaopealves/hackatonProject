import React from 'react';
import './styles/styles.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="link">
        <a href="#HowWork" className="linkItem">
          Como funciona
        </a>
        <a href="#AboutUs" className="linkItem">
          Quem somos
        </a>
        <a className="linkItem">Parceiros</a>
        <a href="#Listeners" className="linkItem">
          Vantagens
        </a>
      </div>
      <button className="button buttonLogin">Login</button>
      <button className="button buttonRegister">Cadastro</button>
    </div>
  );
}
