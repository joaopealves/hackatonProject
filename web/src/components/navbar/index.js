import React from 'react';
import './styles/styles.css';
import { Link } from 'react-router-dom';
import Routes from '../../routes';

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
        <a href="#Listeners" className="linkItem">
          Vantagens
        </a>
        <a className="linkItem">Parceiros</a>
      </div>

      <Routes>
        <Link to="/login">
          <button className="button buttonLogin">Login</button>
        </Link>

        <button className="button buttonRegister">Cadastro</button>
      </Routes>
    </div>
  );
}
