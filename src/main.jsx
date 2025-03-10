import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Make sure you import your App component
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
// Create the root and render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <CssBaseline /> {/* Include CssBaseline here */}
   
    <div onContextMenu={e=>e.preventDefault()}>
    <App />
    </div>
    </HelmetProvider>
  </StrictMode>
  
);
