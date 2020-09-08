import React from 'react';
//Styles
import GlobalStyle from './styles/global';

//import Login from './pages/Login'
import DatasProvider from './context/DataLogin';

import Routes from './routes';

function App() {
  return (

    <DatasProvider>
      <GlobalStyle />
      <Routes />
    </DatasProvider>
  );
}

export default App;
