import React from 'react';
import './styles/howWork.css';
import '../global.css';
import lofi from '../assets/lofipng.png';
import { Link } from 'react-router-dom';

export default function HowWork() {
  return (
    <div>
      <div className="container">
        <div className="textContainer">
          <p class="howWork">
            <h1>Como funciona?</h1>
            <br />
            Somos a primeira plataforma de cashback que recompensa ouvintes por
            escutarem seus artistas preferidos e descobrirem novas músicas.
            Quanto mais você ouve músicas com a nossa extensão, mais pontos
            acumula para ganhar cashback em produtos e serviços variados. Quanto
            mais artistas novos e independentes ouvir, maior a pontuação. <br />
            <br />
            Com o poder do machine learning, mapeamos os hábitos do ouvinte para
            sugerir músicas de artistas que você pode gostar. Que tal descobrir
            novas músicas, apoiar novos artistas e ganhar descontos em suas
            lojas preferidas?
          </p>
          <div>
            <img src={lofi} className="lofiImg" />
            <Link to="/register">
              <button className="button tryButton">
                Experimente agora mesmo!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
