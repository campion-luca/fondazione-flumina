import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

    <NavBar />
      <App />
    <Footer />

    </BrowserRouter>
  </StrictMode>,
)
