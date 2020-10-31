import React from 'react';

export default function Login() {
  return (
    <div className="">
      <input type="text" placeholder="email" />
      <input type="password" placeholder="email" />
      <input type="submit" value="LOGIN" />
      <input type="submit" value="logar com Github" />
      <input type="submit" value="Logar com Google" />
      <input type="submit" value="Logar com Facebook" />
      <a>
        <p>Esqueci minha senha</p>
      </a>
    </div>
  );
}
