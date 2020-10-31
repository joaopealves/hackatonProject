import React from 'react';
import { Router } from 'react-router-dom';
import './global.css';
import AboutUs from './pages/aboutUs';
import Compaines from './pages/benefits/companies';
import Listeners from './pages/benefits/listeners';
import HowWork from './pages/howWork';
import Landing from './pages/landing';
import Artists from './pages/benefits/artists';
import Routes from './routes';

function App() {
  return (
    <>
      <div className="body">
        <Landing />
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
    </>
  );
}

export default App;
