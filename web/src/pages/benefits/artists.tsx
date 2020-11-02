import React from 'react';
import '../styles/benefits.css';
import Service from '../../assets/Music-amico.png';

export default function Artists() {
  return (
    <div className="benefitsContainer">
      {/* <img src={Service} id="artistImg" /> */}
      <p id="artistText" className="benefitsTextCompaines">
        <h2>Para Artistas </h2>
        Ampliamos o alcance de artistas pequenos e médios, incentivando maior
        número de streams para artistas brasileiros através do modelo de
        recompensas. Ao incentivar ouvintes a saírem da “zona de conforto
        musical”, ajudarmos artistas a ampliar suas bases de ouvintes e fãs.
        Além disso, oferecemos a oportunidade de integrar a venda de
        merchandising e ingressos de shows ao sistema de cashback.
      </p>
    </div>
  );
}
