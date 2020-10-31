import React from 'react';

import './global.css';
import AboutUs from './pages/aboutUs';
import HowWork from './pages/howWork';
import Landing from './pages/landing';

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
    </>
  );
}

export default App;
