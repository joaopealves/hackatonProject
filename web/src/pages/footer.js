import React from 'react';
import './styles/footer.css';
import { BiBeenHere } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi';
import { GoMail } from 'react-icons/go';
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
            <p>fdfdsf</p>
            <div className="socialIconsContainer">
              <div className="socialIcons"></div>
              <div className="socialIcons">Df</div>
              <div className="socialIcons">Df</div>
              <div className="socialIcons">Df</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
