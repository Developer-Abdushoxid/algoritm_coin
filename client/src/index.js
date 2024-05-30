import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './helpers/context';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider>
              <App />
            </ThemeProvider>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

