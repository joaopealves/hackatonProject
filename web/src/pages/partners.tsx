import React from 'react';
import { Link } from 'react-router-dom';
import './styles/partners.css';

export default function Partners() {
  return (
    <div className="partnersContainer">
      <div className="partenersText">Nossos Parceiros:</div>
      <div className="partenesItensContainerOne">
        <a href="https://www.sonymusic.com.br">
          <div className="pertenesItem">
            <img src="https://scontent.fbsb12-1.fna.fbcdn.net/v/t31.0-8/23116836_10155430792037935_5003923488293996260_o.png?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHdk54WKgGBTm5TS8XvN9xvHZn0j5V5MjQdmfSPlXkyNFRp4gS0sbDFzzIgD2xa_GPzcnvrTF4AbnWg13s0K7ef&_nc_ohc=KMeVsQGrS6kAX8ymYEU&_nc_ht=scontent.fbsb12-1.fna&oh=0374651857f689de1f86bc1f05185217&oe=5FC296A1" />{' '}
            Sony Music Brasil
          </div>
        </a>
        <a href="https://www.deezer.com/br/">
          <div className="pertenesItem">
            <img src="https://static.pelando.com.br/live/merchants/avatar_web_square_94/avatar/339_2.jpg" />
            Deezer
          </div>
        </a>
      </div>
      <div className="partenesItensContainerTwo">
        <a href="https://www.spotify.com/br">
          <div className="pertenesItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" />
            Spotify
          </div>
        </a>
        <a href="https://www.youtube.com">
          <div className="pertenesItem">
            <img src="https://store-images.s-microsoft.com/image/apps.25822.13614820593571814.1b8b8d01-8690-4f11-988d-2d9835390894.a17f8399-effa-4749-aeb4-045be0489146?mode=scale&q=90&h=270&w=270&background=%230078D7" />
            Youtube
          </div>
        </a>
      </div>
    </div>
  );
}
