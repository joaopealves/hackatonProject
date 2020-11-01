import React from 'react';
import { CgArrowLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function alertCadastro() {
  alert('Cadastro feito com sucesso! :D');
}

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
          <Link to="/login">
            <input type="submit" onClick={alertCadastro} value="CADASTRO" />
          </Link>
        </div>
      </div>
    </div>
  );
}
