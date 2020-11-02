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
          <p className="howWork">
            <h1>Como funciona?</h1>
            <br />
            Como funciona? O usuário se cadastra no site Gamusic, conecta nossa
            extensão ao Spotify e acumula pontos automaticamente de acordo com
            os artistas que ouve. Os pontos podem então ser resgatados pelo
            Filtr Game na forma de cashback em lojas online, descontos em
            serviços de música, ingressos e prêmios relâmpago como ingressos
            para eventos e interações com artistas. Nosso algoritmo de machine
            learning obtém informações de navegação dos ouvintes pelo spotify.
            Os dados são então cruzados a uma biblioteca externa para
            classificar os usuários em diferentes arquétipos de personalidade de
            acordo com os gêneros musicais que escutam. Por fim, fazemos uma
            sugestão personalizada de artista ou música nacional da sony de
            acordo com o perfil do ouvinte.
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
