import React from 'react';

import './global.css';
import AboutUs from './pages/aboutUs';
import Compaines from './pages/benefits/companies';
import Listeners from './pages/benefits/listeners';
import HowWork from './pages/howWork';
import Landing from './pages/landing';
import Artists from './pages/benefits/artists';

function App() {
  return (
    <>
      <div className="body">
        <Landing />
      </div>
      <div className="body">
        <HowWork />
      </div>
      <div className="body">
        <AboutUs />
      </div>
      <div className="body">
        <Listeners />
      </div>
      <div className="body">
        <Compaines />
      </div>
      <div className="body">
        <Artists />
      </div>
    </>
  );
}

export default App;
