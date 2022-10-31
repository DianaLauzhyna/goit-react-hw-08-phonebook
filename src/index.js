import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { App } from 'components/App';
import { persistor, store } from './redux/store';

import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<p>Loading....g</p>} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
);
