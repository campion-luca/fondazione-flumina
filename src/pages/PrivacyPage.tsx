import React from 'react';
import cartinaSfondo from "../assets/background/cartina_4.png";

const PrivacyPage: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col text-[#1b4a54]'
      style={{
        backgroundImage: `url(${cartinaSfondo})`,
        backgroundSize: 'cover',       // scala per coprire tutto il div
        backgroundPosition: 'center',  // centra l’immagine
        backgroundRepeat: 'no-repeat',
      }}>

      <div className="max-w-4xl mx-auto p-6 bg-white/30 backdrop-blur-md shadow-md rounded-lg mt-10">

        <h1 className="text-3xl font-bold mb-4 mt-5">Privacy e Trattamento dei Dati Personali</h1>

        <p className="mb-4">
          La tua privacy è importante per noi. Questa pagina descrive come gestiamo i dati personali degli utenti del nostro sito.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-5">Cookie</h2>
        <p className="mb-4">
          Utilizziamo solo <strong>cookie tecnici necessari</strong> al corretto funzionamento del sito.
          Non raccogliamo dati tramite cookie di profilazione o analitici.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-5">Raccolta dei dati</h2>
        <p className="mb-4">
          Non raccogliamo alcun dato personale tramite moduli o strumenti di analisi.
          Tutte le informazioni relative al tuo utilizzo del sito restano strettamente confidenziali.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-5">Finalità</h2>
        <p className="mb-4">
          I dati tecnici necessari al funzionamento del sito vengono utilizzati esclusivamente per garantire una corretta navigazione e l’accesso ai servizi offerti.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-5">Diritti dell’utente</h2>
        <p className="mb-4">
          Non essendo raccolti dati personali, non è necessario esercitare alcun diritto legato al GDPR.
          In caso di domande relative alla privacy, puoi contattarci tramite i recapiti presenti sul sito.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Ultimo aggiornamento: 23 Ottobre 2025
        </p>
      </div>

    </div>
  );
};

export default PrivacyPage;
