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

        <div className="dropdown linkItem">
          <button className=" dropbtn">
            Vantagens
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#Listeners">Ouvintes</a>
            <a href="#Compaines">Empresas</a>
            <a href="#Artists">Artistas</a>
          </div>
        </div>
        <a className="linkItem">Parceiros</a>
      </div>
      <Link to="/login">
        <button className="button buttonLogin">Login</button>
      </Link>
      <Link to="/register">
        <button className="button buttonRegister">Cadastro</button>
      </Link>
    </div>
  );
}
