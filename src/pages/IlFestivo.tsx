import cartinaSfondo from "../assets/background/cartina_3.png";
import { useState, useEffect } from "react";
import { Newspaper, Download, Calendar } from "lucide-react";

interface Inserto {
    id: number;
    numero: number;
    titolo: string;
    descrizione: string;
    data: string;
    immagine: string;
    pdf: string;
}

const IlFestivo = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [inserti, setInserti] = useState<Inserto[]>([]);

    useEffect(() => {
        fetch("/festivoList.json")
            .then((res) => res.json())
            .then((data) => setInserti(data))
            .catch((err) => console.error("Errore nel caricamento JSON:", err));
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${cartinaSfondo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100dvh",
            }}
        >
            <div className="max-w-4xl mx-auto px-6 py-12 text-[#1b4a54]">

                {/* Intestazione */}
                <div className="flex items-center gap-3 mb-2">
                    <Newspaper className="w-8 h-8" />
                    <h1 className="text-4xl font-bold">Il Festivo</h1>
                </div>
                <p className="text-gray-500 text-sm mb-2 ms-11">Inserto culturale</p>
                <div className="h-px bg-[#1b4a54]/30 mb-8"></div>

                {/* Griglia inserti */}
                {inserti.length === 0 ? (
                    <p className="text-center text-gray-500 mt-16">Nessun numero disponibile al momento.</p>
                ) : (
                    <div className="flex flex-wrap justify-center gap-6">
                        {inserti.map((inserto) => (
                            <div
                                key={inserto.id}
                                className="w-64 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden
                                           flex flex-col bg-white/70 backdrop-blur-sm"
                            >
                                {/* Linguetta data */}
                                <div className="flex items-center gap-1.5 bg-[#1b4a54] text-white text-xs font-semibold px-3 py-1.5">
                                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                                    {inserto.data}
                                </div>

                                {/* Copertina + bottone overlay */}
                                <div className="relative">
                                    <img
                                        src={inserto.immagine}
                                        alt={`Copertina ${inserto.titolo}`}
                                        className="w-full h-[285px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                    <a
                                        href={inserto.pdf}
                                        download
                                        className="absolute pt-1 bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 bg-[#1b4a54] text-white text-[10px] font-semibold px-4 py-2 hover:bg-[#2a6676] transition-colors duration-200 shadow whitespace-nowrap"
                                    >
                                        <Download className="w-3.5 h-3.5" />
                                        Scarica PDF
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IlFestivo;
