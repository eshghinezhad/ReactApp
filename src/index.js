import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProfileProvider} from './context/ProfileContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
</React.StrictMode>
);
reportWebVitals();
