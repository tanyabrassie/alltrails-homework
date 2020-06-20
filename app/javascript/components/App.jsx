import React from 'react';
import Routes from '../routes/Index';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {Routes}
    </ThemeProvider>
  );
}

export default App;