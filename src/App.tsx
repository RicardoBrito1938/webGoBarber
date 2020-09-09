import React from 'react';

import SignIn from './Pages/SignIn';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignIn />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
