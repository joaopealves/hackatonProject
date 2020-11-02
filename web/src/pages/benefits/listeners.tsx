import React from 'react';
import '../styles/benefits.css';
import MusicRafiki from '../../assets/Music-rafiki.png';

export default function Listeners() {
  return (
    <div className="benefitsContainer">
      <img src={MusicRafiki} />
      <p className="benefitsTextListeners">
        <h2>Vantagens para fãs</h2>
        Descoberta de artistas com gamificação e navegação amigável. Integração
        fácil com Spotify (MVP), Youtube e Deezer.
      </p>
    </div>
  );
}
