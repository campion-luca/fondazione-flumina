import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Festivo {
    id: number;
    titolo: string;
    contenuto: string;
    immagine?: string;
    galleria?: string[];
    data: string;
}

const FestivoDettaglio: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [festivo, setFestivo] = useState<Festivo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const fetchFestivo = async () => {
            try {
                const response = await fetch("/festivoList.json");
                if (!response.ok) throw new Error("Errore nel caricamento del file JSON");
                const data: Festivo[] = await response.json();

                const trovato = data.find((e) => e.id === Number(id)) || null;
                setFestivo(trovato);
            } catch (error) {
                console.error("Errore nel caricamento del file JSON:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFestivo();
    }, [id]);

    if (loading) return <p>Caricamento in corso...</p>;
    if (!festivo) return <p>Contenuto non trovato.</p>;

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-[#1b4a54]">
            <h1 className="text-4xl font-bold mb-6 text-center">{festivo.titolo}</h1>

            {(() => {
                const immagini =
                    festivo.galleria && festivo.galleria.length > 0
                        ? festivo.galleria
                        : festivo.immagine
                        ? [festivo.immagine]
                        : [];
                if (immagini.length === 0) return null;
                return (
                    <div className="relative w-full max-w-2xl mx-auto mb-8">
                        <div className="overflow-hidden shadow-md">
                            <img
                                src={immagini[slideIndex]}
                                alt={`${festivo.titolo} - ${slideIndex + 1}`}
                                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover transition-opacity duration-300"
                            />
                        </div>
                        {immagini.length > 1 && (
                            <>
                                <button
                                    onClick={() =>
                                        setSlideIndex((prev) => (prev - 1 + immagini.length) % immagini.length)
                                    }
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1b4a54] rounded-full p-2 shadow-md transition cursor-pointer"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() =>
                                        setSlideIndex((prev) => (prev + 1) % immagini.length)
                                    }
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1b4a54] rounded-full p-2 shadow-md transition cursor-pointer"
                                >
                                    <ChevronRight size={24} />
                                </button>
                                <div className="flex justify-center gap-2 mt-3">
                                    {immagini.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSlideIndex(i)}
                                            className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${
                                                i === slideIndex ? "bg-[#1b4a54]" : "bg-[#1b4a54]/30"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                );
            })()}

            {festivo.data && (
                <p className="text-sm text-gray-500 text-center mb-4">{festivo.data}</p>
            )}

            <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
                {festivo.contenuto}
            </p>
        </div>
    );
};

export default FestivoDettaglio;
