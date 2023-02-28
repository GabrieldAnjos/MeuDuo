import React from 'react';
//Styles
import GlobalStyle from './styles/global';

//import Login from './pages/Login'
import DatasProvider from './context/DataLogin';

import AppRoutes from './routes';

function App() {
  return (

    <DatasProvider>
      <GlobalStyle />
      <AppRoutes />
    </DatasProvider>
  );
}

export default App;
