import React from 'react';
import App from './App';
import './app/styles/index.css';
import './app/styles/tailwind.css'
import './app/assets/css/style.min.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HashRouter>
  <App/>
</HashRouter>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
