// import { Calendar } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Evento {
    id: number;
    titolo: string;
    contenuto: string;
    immagine?: string; // opzionale
    data: string;
}

const EventoDettaglio: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [evento, setEvento] = useState<Evento | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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


    return (

        <div className="max-w-4xl mx-auto px-6 py-12 text-[#1b4a54]">
            {/* <button
                onClick={() => navigate(-1)}
                className="mb-6 text-blue-600 hover:text-blue-800 transition"
            >
                ← Torna agli eventi
            </button> */}

            <h1 className="text-4xl font-bold mb-6 text-center">{evento.titolo}</h1>

            {evento.immagine && (
                <img
                    src={evento.immagine}
                    alt={evento.titolo}
                    className="w-full rounded-2xl shadow-md mb-8"
                />
            )}

            {evento.data && (
                <p className="text-sm text-gray-500 text-center mb-4">{evento.data}</p>
            )}

            <p className="text-lg leading-relaxed whitespace-pre-line">
                {evento.contenuto}
            </p>
        </div>
    )

}

export default EventoDettaglio;