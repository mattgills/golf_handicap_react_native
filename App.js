import React from 'react';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import ScreenContainerWithFooterNav from './components/ScreenContainerWithFooterNav';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Header/>
      <ScreenContainerWithFooterNav/>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    //accent: 'yellow'
  }
};
