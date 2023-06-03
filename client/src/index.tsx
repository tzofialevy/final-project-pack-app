import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import DataContext from './dataContexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <div className='bg'>
          <App />
        </div>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
