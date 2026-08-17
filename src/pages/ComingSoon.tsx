import logo from "../assets/logo/logo_costituenda.png";
import { usePageMeta } from "../hooks/usePageMeta";

const ComingSoon = () => {
    usePageMeta({
        title: 'Sito in costruzione',
        description: 'Fondazione Flumina — il sito è in costruzione. Torna presto a trovarci.',
        path: '/',
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-black bg-[#FFFFFF] px-6">

            {/* Logo */}
            <img
                src={logo}
                alt="Logo Fondazione Flumina"
                className="h-44 sm:h-56 md:h-72 lg:h-80 w-auto"
            />

            {/* Linea decorativa */}
            <div className="h-px w-32 sm:w-44 bg-black mt-8"></div>

            {/* Sottotitolo */}
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-normal">
                Sito in costruzione
            </p>

        </div>
    );
};

export default ComingSoon;
