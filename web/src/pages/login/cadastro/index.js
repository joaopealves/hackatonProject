import React from 'react';
import { CgArrowLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <div className="loginBackground">
        <div className="loginContainer">
          <div className="backIcon">
            <Link to="/">
              <CgArrowLeft color="white" size="58" />
            </Link>
          </div>
          <p class="loginTitle">Cadastro</p>
          <input type="text" placeholder="Nome Completo" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <input type="submit" value="CADASTRO" />
          <div className="loginWith"></div>
        </div>
      </div>
    </div>
  );
}
