import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import { AuthProvider } from './components/context/AuthContext';
import GlobalLoader from './components/GlobalLoader';
import { LoaderProvider } from './components/context/LoaderContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <BrowserRouter>
          <GlobalLoader/>
          <App />
        </BrowserRouter>
      </LoaderProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
