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

      {/* Tutta la pagina deve sempre ricoprire la grandezza dello schermo */}
      <div className="flex flex-col min-h-screen pt-safe pb-safe">

        <NavBar />

        {/* il contenuto di app prenderà sempre gli spazi "vuoti" se presenti */}
        <main className="flex-grow pt-30 md:pt-25">

          <App />

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  </StrictMode>,
)
