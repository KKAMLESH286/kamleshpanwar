import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SplashScreenProvider } from './components/SplashScreen/SplashScreen';
const { PUBLIC_URL } = process.env;


ReactDOM.render(
  <SplashScreenProvider>
    <App basename={PUBLIC_URL} />
  </SplashScreenProvider>,
  document.getElementById('root')
);
