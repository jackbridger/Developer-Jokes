import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './constants/theme';
const AppWithProviders = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithProviders);
