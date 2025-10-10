import { useState } from "react";
import { Link } from "react-router-dom";

const Cookies = () => {

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

        <div>
            {!showBanner ? null :


                <div className="fixed bottom-5 font-sans opacity-[.95] left-5 right-5 bg-white/20 backdrop-blur-md border border-white/30 p-2 pt-3 shadow-lg flex flex-col lg:flex-row items-center justify-center z-50">

                    <p className="text-gray-800 text-sm md:text-sm lg:text-md mb-2 md:mb-0 mx-4 text-justify">

                        Utilizziamo solo cookie tecnici necessari al corretto funzionamento del sito.

                        Non raccogliamo dati tramite cookie di profilazione o analitici.{" "}
                        <Link to="/privacy" className="text-blue-800 underline hover:text-blue-800">
                            Consulta la nostra Cookie Policy
                        </Link>
                        .
                    </p>

                    <button onClick={handleAcceptCookies}
                        className="btn relative self-end text-white px-2 py-1 cursor-pointer md:w-auto text-xs md:text-xs inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#1b4a54] hover:bg-white group cursor-pointer">
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

export default Cookies;