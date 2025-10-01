import logo from '../assets/fondazione_flumina.png';
import { useState } from "react";

const HomePage = () => {

    // Recupera lo stato dal localStorage
    const [showBanner, setShowBanner] = useState(() => {
        return !sessionStorage.getItem("cookieAccepted");
    });

    // Aggiorna il localStorage quando l'utente clicca "Ho capito"
    const handleAcceptCookies = () => {
        sessionStorage.setItem("cookieAccepted", "true");
        setShowBanner(false);
    };

    return (

        <div className="flex flex-col items-center min-h-screen text-[#1b4a54]">

            {/* Immagine */}
            <img src={logo} alt="Logo Fondazione Flumina" className="h-80 w-80 mb-4 mt-3" />

            {/* Sottotitolo */}
            <p className="text-lg mb-6 text-justify px-4 mx-12 mt-3 text-[#1b4a54]">
                Fondazione Flumina nasce a sostegno del benessere collettivo, promuovendo iniziative culturali, formative e di inclusione che
                favoriscono l’equilibrio tra impresa, persona e comunità.
                <br />
                Opera con l’obiettivo di sviluppare progetti innovativi di welfare
                aziendale e per la promozione e valorizzazione territoriale.
                <br />
                La Fondazione Flumina pone particolare attenzione alla crescita culturale e del tessuto sociale mettendo al centro delle proprie attività
                l’ascolto dei bisogni del territorio, trasformandoli in progettualità concrete capaci di generare valore condiviso.
            </p>

            {/* Work in progress */}
            <h2 className="text-3xl font-semibold text-white-500 mb-4 mt-5">
                SITO IN LAVORAZIONE
            </h2>

            {/* Cookie Banner */}
            {!showBanner ? null :
                <div className="fixed bottom-8 font-sans opacity-[.95] left-15 right-15 bg-white border border-gray-600 rounded-lg p-2 shadow-lg flex flex-col md:flex-row items-center justify-between z-50">

                    <p className="text-gray-800 text-sm md:text-sm mb-2 md:mb-0 mx-4 text-justify">

                        Utilizziamo solo cookie tecnici necessari al corretto funzionamento del sito.
                        <br />
                        Non raccogliamo dati tramite cookie di profilazione o analitici.{" "}
                        <a href="/cookie.html" className="text-blue-600 underline hover:text-blue-800">
                            Consulta la nostra Cookie Policy
                        </a>
                        .
                    </p>
                    <button
                        onClick={handleAcceptCookies}
                        className="bg-[#1b4a54] text-white px-3 py-1 cursor-pointer rounded md:w-auto text-xs md:text-sm"
                    >
                        Accetto
                    </button>
                </div>
            }
        </div>
    )
}

export default HomePage;
