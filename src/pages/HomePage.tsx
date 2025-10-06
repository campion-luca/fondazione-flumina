import logo from '../assets/fondazione_flumina.png';
import { useState } from "react";
import { Link } from "react-router-dom";

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

            {/* Cookie Banner */}
            {!showBanner ? null :


                <div className="fixed bottom-0 font-sans opacity-[.95] left-0 right-0 bg-white border-t border-stone-950 p-2 pt-3 shadow-lg flex flex-col lg:flex-row items-center justify-center z-50">

                    <p className="text-gray-800 text-sm md:text-sm lg:text-md mb-2 md:mb-0 mx-4 text-justify">

                        Utilizziamo solo cookie tecnici necessari al corretto funzionamento del sito.

                        Non raccogliamo dati tramite cookie di profilazione o analitici.{" "}
                        <Link to="/privacy" className="text-blue-600 underline hover:text-blue-800">
                            Consulta la nostra Cookie Policy
                        </Link>
                        .
                    </p>

                    <button onClick={handleAcceptCookies}
                        className="btn relative self-end text-white px-3 py-1 cursor-pointer md:w-auto text-xs md:text-sm inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#1b4a54] hover:bg-white group cursor-pointer py-1.5 px-2.5">
                        <span className="
                                        w-56 h-48 bg-[#989d6e] absolute top-0 left-0 
                                        translate-y-[-100%] 
                                        transition-transform ease-out duration-300   /* uscita veloce */
                                        group-hover:translate-y-0 group-hover:duration-2000 /* entrata lenta */
                                        "></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                            Accetto
                        </span>
                    </button>


                </div>
            }
        </div>
    )
}

export default HomePage;