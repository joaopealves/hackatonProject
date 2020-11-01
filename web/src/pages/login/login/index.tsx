import React from 'react';
import './styles/styles.css';
import Google from '../../../assets/google.png';
import Deezer from '../../../assets/deezer.png';
import Facebook from '../../../assets/facebook.png';
import Spotfy from '../../../assets/spotfy.png';
import { CgArrowLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="loginBackground">
      <div className="loginContainer">
        <div className="backIcon">
          <Link to="/">
            <CgArrowLeft color="white" size="58" />
          </Link>
        </div>
        <p className="loginTitle">Login</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="submit" value="LOGIN" />
        <div className="loginWith">
          <button className="loginItem">
            <img src={Google} />
          </button>
          <button className="loginItem">
            <img className="Deezer" src={Deezer} />
          </button>
          <button className="loginItem">
            <img className="Facebook" src={Facebook} />
          </button>
          <button className="loginItem">
            <img className="Deezer" src={Spotfy} />
          </button>
        </div>
        <a>
          <p>Esqueci minha senha</p>
        </a>
        <Link to="/register">
          <a>
            <p>Não sou cadastrado</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
