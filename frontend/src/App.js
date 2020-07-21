import React from 'react';  
import './App.css';

//import Login from './pages/Login'
import DatesProvider from './context/DataLogin';

import Routes from './routes';

function App() {
  return (
    <DatesProvider>
      <Routes />
    </DatesProvider>
  );
}

export default App;
