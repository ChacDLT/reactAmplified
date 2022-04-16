import React from 'react';
import { createRoot } from 'react-dom/client';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import App from './App';
import './assets/main.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);
