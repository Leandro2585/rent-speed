import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { loadFonts } from '@application/utils';
import { Home } from '@application/pages';
import theme from '@application/styles/theme'

export default function App() {
  loadFonts()
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent/>
      <Home />
    </ThemeProvider>
  );
}
