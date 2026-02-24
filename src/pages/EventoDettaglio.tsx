import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Evento {
    id: number;
    titolo: string;
    contenuto: string;
    immagine?: string;
    galleria?: string[];
    data: string;
}

const EventoDettaglio: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [evento, setEvento] = useState<Evento | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await fetch("/eventList.json");
                if (!response.ok) throw new Error("Errore nel caricamento del file JSON");
                const data: Evento[] = await response.json();

                const trovato = data.find((e) => e.id === Number(id)) || null;
                setEvento(trovato);
            } catch (error) {
                console.error("Errore nel caricamento del file JSON:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvento();
    }, [id]);

    if (loading) return <p>Caricamento in corso...</p>;
    if (!evento) return <p>Evento non trovato.</p>;


    const immagini = evento.galleria && evento.galleria.length > 0
        ? evento.galleria
        : evento.immagine ? [evento.immagine] : [];

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-[#1b4a54]">
            <h1 className="text-4xl font-bold mb-8 text-center">{evento.titolo}</h1>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {immagini.length > 0 && (
                    <div className="relative w-full md:w-2/5 shrink-0">
                        <div className="overflow-hidden shadow-md rounded-sm">
                            <img
                                src={immagini[slideIndex]}
                                alt={`${evento.titolo} - ${slideIndex + 1}`}
                                className="w-full aspect-3/4 object-cover transition-opacity duration-300"
                            />
                        </div>
                        {immagini.length > 1 && (
                            <>
                                <button
                                    onClick={() => setSlideIndex((prev) => (prev - 1 + immagini.length) % immagini.length)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1b4a54] rounded-full p-2 shadow-md transition cursor-pointer"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() => setSlideIndex((prev) => (prev + 1) % immagini.length)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1b4a54] rounded-full p-2 shadow-md transition cursor-pointer"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <div className="flex justify-center gap-2 mt-3">
                                    {immagini.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSlideIndex(i)}
                                            className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${i === slideIndex ? "bg-[#1b4a54]" : "bg-[#1b4a54]/30"}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                <div className="flex-1 min-w-0">
                    {evento.data && (
                        <p className="text-sm text-gray-500 mb-4">{evento.data}</p>
                    )}
                    <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
                        {evento.contenuto}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default EventoDettaglio;