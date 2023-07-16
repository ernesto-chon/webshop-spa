import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/jost';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';

import './index.css';

import Router from './Router';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
