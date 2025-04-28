import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { EventProvider } from './context/EventContext.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './styles/main.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <EventProvider>
            <App />
          </EventProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);