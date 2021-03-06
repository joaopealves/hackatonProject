import React from 'react';
import './styles/styles.css';
import { Link } from 'react-router-dom';
import Routes from '../../routes';
import { FiChevronUp } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
export default function Navbar() {
  return (
    <div>
      <div id="navbar" className="navbar">
        <div className="logoContainer">
          GA<span>MUSIC</span>
        </div>
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
              <FiChevronDown size="12px" />
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#Listeners">Ouvintes</a>
              <a href="#Compaines">Empresas</a>
              <a href="#Artists">Artistas</a>
            </div>
          </div>
          <a href="#Partners" className="linkItem">
            Parceiros
          </a>
          <a href="#Devs" className="linkItem">
            Devs
          </a>
        </div>
        <div className="btn">
          <Link to="/login">
            <button className="button buttonLogin">Login</button>
          </Link>
          <Link to="/register">
            <button className="button buttonRegister">Cadastro</button>
          </Link>
        </div>
        <div className="topButton">
          <a href="#navbar" id="topButton">
            <FiChevronUp color="white" size="50px" />
          </a>
        </div>
      </div>
    </div>
  );
}
