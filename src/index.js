import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles';


render(
  <React.StrictMode>
    <>
      <GlobalStyle/>
        <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

