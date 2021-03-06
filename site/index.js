import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Root from './src/pages';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF5A60'
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  );
}

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.dispose(() => {
    // module is about to be replaced
  });

  module.hot.accept(() => {
    // module or one of its dependencies was just updated
  });
}
