import React from 'react';

import './global.css';
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
    </>
  );
}

export default App;
