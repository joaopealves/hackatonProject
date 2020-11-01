import React from 'react';
import './styles/footer.css';

import { BiBeenHere } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi';
import { GoMail } from 'react-icons/go';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineFacebook } from 'react-icons/ai';
import LogoSony from '../assets/login-sony.png';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footerContainer">
          <div className="logoContainer">Logo</div>
          <div className="commonItens">
            <div className="item localItem">
              <span className="commomItem">
                <BiBeenHere size="30px" />
              </span>
              <span className="textIcon">Brasília, DF</span>
            </div>
            <div className="item phoneItem">
              <span className="commomItem">
                <HiPhone size="30px" />
              </span>
              <span className="textIcon">4002 8922</span>
            </div>
            <div className="item mailItem">
              <span className="commomItem">
                <GoMail size="30px" />
              </span>
              <span className="textIcon">suporte@gamusic.com</span>
            </div>
          </div>
          <div className="aboutCompany">
            <h2>Sobre Empresa</h2>
            <p>
              Acreditamos que podemos transformar a forma como as pessoas se
              relacionam com a música. Apesar do catálogo infinito das
              plataformas de música, estudos mostram que ouvintes tendem a parar
              de ouvir novos artistas com o passar dos anos.
            </p>
            <div className="socialIconsContainer">
              <div className="socialIcons">
                <VscGithub size="30px" />
              </div>
              <div className="socialIcons">
                <AiOutlineFacebook size="30" />
              </div>

              <div className="socialIcons">
                <img src={LogoSony} />
              </div>
              <div className="socialIcons">Df</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
