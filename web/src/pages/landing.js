import React from 'react';
import Navbar from '../components/navbar/index';
import '../global.css';
import AboutUs from './aboutUs';
import Compaines from './benefits/companies';
import Listeners from './benefits/listeners';
import HowWork from './howWork';
import Artists from './benefits/artists';
import Partnes from './partners';

export default function Landing() {
  return (
    <>
      <div className="body">
        <div className="landingBody">
          <Navbar />
        </div>
      </div>
      <div className="body" id="HowWork">
        <HowWork />
      </div>
      <div className="body" id="AboutUs">
        <AboutUs />
      </div>
      <div className="body" id="Listeners">
        <Listeners />
      </div>
      <div className="body" id="Compaines">
        <Compaines />
      </div>
      <div className="body" id="Artists">
        <Artists />
      </div>
      <div className="body" id="Partnes">
        <Partnes />
      </div>
    </>
  );
}
