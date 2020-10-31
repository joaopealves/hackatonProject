import React from 'react';
import './styles/aboutUs.css';

export default function aboutUs() {
  return (
    <div className="container">
      <div className="aboutUsDiv">
        <div className="aboutUsContainer">
          <div className="logoImg">Opa</div>
          <div className="aboutUsText">
            <h2>Quem somos?</h2>
            <p>
              Acreditamos que podemos transformar a forma como as pessoas se
              relacionam com a música. Apesar do catálogo infinito das
              plataformas de música, estudos mostram que ouvintes tendem a parar
              de ouvir novos artistas com o passar dos anos. O propósito da
              Gamusic é ajudar na construção de repertório dos usuários para
              além das músicas do topo das paradas. Nosso machine learning é
              orientado a dar visibilidade para artistas nacionais e
              independentes, usando o cashback como mecanismo de incentivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
