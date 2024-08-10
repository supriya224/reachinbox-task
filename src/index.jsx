import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/shared/Footer/Footer';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="33860727265-9gf0hncjbr38d2ncd568lqlihgu5ccp0.apps.googleusercontent.com">
  <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </Router>
  </GoogleOAuthProvider>
  </React.StrictMode>

);
// 33860727265-9gf0hncjbr38d2ncd568lqlihgu5ccp0.apps.googleusercontent.com



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
