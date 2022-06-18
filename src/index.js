import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SplashScreenProvider } from './components/SplashScreen/SplashScreen';
const { PUBLIC_URL } = process.env;


ReactDOM.render(
  <SplashScreenProvider>
    <BrowserRouter>
    <App basename={PUBLIC_URL} />
    </BrowserRouter>
  </SplashScreenProvider>,
  document.getElementById('root')
);
