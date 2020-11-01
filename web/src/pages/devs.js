import React from 'react';
import './styles/devs.css';
export default function Devs() {
  return (
    <div className="partnersContainer">
      <div className="devText">Desenvolvedores</div>
      <div className="devItensContainerOne">
        <a href="https://www.sonymusic.com.br">
          <div className="devItem">
            <img src="https://avatars0.githubusercontent.com/u/56173070?s=400&u=5ade7c0c2272d94089c411ccc8082ad9308e95eb&v=4" />{' '}
            João Pedro Alves<h6>React FrontEnd Developer</h6>
          </div>
        </a>
        <a href="https://www.deezer.com/br/">
          <div className="devItem">
            <img src="https://static.pelando.com.br/live/merchants/avatar_web_square_94/avatar/339_2.jpg" />
            Deezer
          </div>
        </a>
      </div>
      <div className="devItensContainerTwo">
        <a href="https://www.spotify.com/br">
          <div className="devItem">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFWfWAPkcVAuA/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=i_0fQF1vPQ3jgz_wwTHHZEIBmR6pJeXl9cYUquKoPoM" />
            Willian Caetano<h6>Python BackEnd Developer</h6>
          </div>
        </a>
        <a href="https://www.youtube.com">
          <div className="devItem">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHDca3qA14sAQ/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=OTvao6DhnHYmncr7tc0ZOeUPvpKmGM3uxAg9Sk6Jq6w" />
            Karina Balan Julio<h6>Content Strategist & Producer</h6>
          </div>
        </a>
      </div>
    </div>
  );
}
