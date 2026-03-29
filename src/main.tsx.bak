import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Schedule from './pages/Schedule';
import Portfolio from './pages/Portfolio';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Guitar from './pages/Guitar';
import Game from './pages/Game';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/guitar' element={<Guitar />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
