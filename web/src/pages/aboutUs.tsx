import React from 'react';
import './styles/aboutUs.css';

export default function aboutUs() {
  return (
    <div className="container">
      <div className="aboutUsDiv">
        <div className="aboutUsContainer">
          <div className="logoImg">
            <div className="logoGamusicContainer">
              GA<span>MUSIC</span>
            </div>
          </div>
          <div className="aboutUsText">
            <h2>Quem somos?</h2>
            <p>
              Somos uma plataforma de recompensas com machine learning, que
              premia ouvintes por escutarem artistas e músicas nacionais que não
              conhecem. Queremos ajudar o Filtr Game a automatizar recomendações
              de artistas nacionais de acordo com seus gêneros de interesse e
              personalidade. Nossa extensão web com gamificação e IA, integrada
              às principais plataformas de streaming, mapeia o comportamento dos
              usuários e é capaz classificar usuários de acordo com 16
              arquétipos de personalidade. Quanto mais artistas diferentes o
              usuário ouvir, mais pontos pode ganhar para trocar por benefícios
              diversos. Além disso, os insights gerados pelo Gamusic podem
              ajudar a Sony a realizar projetos de marketing, desenvolvimento
              artístico e parcerias comerciais de forma mais assertiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
