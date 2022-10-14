import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { BookProvider } from './BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BookProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BookProvider>
  // </React.StrictMode> 
);
