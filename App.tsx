/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import LoginPage from './app/pages/login';
import { theme } from './App.style';


function App(): JSX.Element {

  return (
    <PaperProvider theme={theme}>
      <LoginPage />
    </PaperProvider>
  );
}


export default App;
