import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    // Bottone per aprire la pagina della cookie policy
    const navigate = useNavigate();

    const handleOpenCookiePolicy = () => {
        navigate("/privacy");
    };

    return (

        <div>
            {!showBanner ? null :


                <div className="fixed bottom-0 rounded-sm left-3 right-3 font-sans bg-white/40 backdrop-blur-md border pb-3 pt-5 shadow-lg flex flex-col lg:flex-row items-center justify-center z-50">

                    <p className="text-gray-800 text-sm md:text-sm lg:text-md mb-2 md:mb-0 mx-4 text-justify italic">

                        Utilizziamo solo cookie tecnici necessari al corretto funzionamento del sito.

                        Non raccogliamo dati tramite cookie di profilazione o analitici.
                    </p>

                    <button onClick={handleAcceptCookies}
                        className="btn w-5/6 rounded-sm text-white py-1 cursor-pointer lg:w-50 text-xs md:text-xs inline-flex items-center
                        justify-center overflow-hidden font-medium transition-all bg-black cursor-pointer mb-2 lg:mb-0 lg:mr-4
                        hover:bg-white hover:text-black transition duration-500 ease-in-out">
                        Accettare
                    </button>

                    <button onClick={handleOpenCookiePolicy}
                        className="btn w-5/6 rounded-sm text-black px-2 py-1 cursor-pointer lg:w-50 text-xs md:text-xs inline-flex items-center 
                        justify-center overflow-hidden font-medium transition-all bg-white cursor-pointer
                        hover:bg-black hover:text-white transition duration-500 ease-in-out">
                        Consulta la nostra Cookie Policy
                    </button>


                </div>
            }
        </div>
    )

}

export default Cookies;