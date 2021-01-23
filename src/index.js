import React from 'react';
import './index.css';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
const application =
  (<React.StrictMode>
      <App />
  </React.StrictMode>);

if (rootElement.hasChildNodes()) {
    hydrate(application, rootElement);
} else {
    render(application, rootElement);
}
