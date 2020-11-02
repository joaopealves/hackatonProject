import React from 'react';
import '../styles/benefits.css';
import Businnes from '../../assets/Business deal-cuate.png';

export default function Compaines() {
  return (
    <div className="benefitsContainer">
      <img src={Businnes} />
      <p className="benefitsTextCompaines">
        <h2>Vantagens para sony e seus artistas</h2>
        Ampliação de base de ouvintes e alcance para artistas novos ou de nicho.
        Rentabilização de insights de audiência junto a marcas e players de
        música. Venda de merchandising e ingressos vinculados ao sistema de
        pontuação. Para as marcas parceiras: Aproximação com comunidades
        engajadas de fãs. Oportunidade de vendas via cashback e descontos.
        Conexão emocional e não intrusiva com consumidores
      </p>
    </div>
  );
}
