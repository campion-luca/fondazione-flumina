import logo from "../assets/logo/logo_nuovo.png";
import Cookies from "../components/Cookies";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {

    // TIPIZZO IN QUANTO STO UTILIZZANDO TYPESCRIPT
    interface Card {
        id: number;
        titolo: string;
        contenuto: string;
        immagine?: string; // opzionale
        data: string;
    }

    const [cards, setCards] = useState<Card[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/eventList.json")
            .then((res) => res.json())
            .then((data) => setCards(data))
            .catch((err) => console.error("Errore nel caricamento JSON:", err));
    }, []);

    // Prendo solo le ultime 3 card
    const ultimeCard = cards.slice(-3).reverse();

    return (

        <div className="flex flex-col items-center justify-center min-h-screen text-[#1b4a54] px-6">

            {/* bg-gradient-to-b from-[#f4f9fa] to-[#e9f2f3] ---> gradiente background precedente */}


            {/* HERO SECTION */}
            <div className="grid grid-cols-3 max-w-7xl w-full mt-3">


                {/* Logo */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={logo}
                        alt="Logo Fondazione Flumina"
                        className="h-40 sm:h-55 md:h-72 lg:h-80 drop-shadow-xl md:ms-15 lg:me-25 lg:mt-5"
                    />
                </div>


                {/* Testo */}
                <div
                    className="flex flex-col justify-center items-center lg:items-start  col-span-2 text-left">
                    <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Ascoltiamo il <br />
                        territorio <br />
                        <span className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2a7c8e] font-light">
                            per costruire valore
                        </span>
                    </h1>


                    <div className="h-1 w-45 bg-[#1b4a54] mt-6 rounded-full mx-auto lg:mx-0"></div>
                </div>
            </div>
            {/* HERO END ---------------------------------------------------------------------------------------- */}


            {/* Paragravo introduttivo */}
            <div className="my-4 max-w-5xl mt-10 text-justify p-6 text-black md:text-md">
                <p>
                    La <span className="font-semibold">Fondazione Flumina</span> nasce con l’obiettivo di promuovere il
                    benessere collettivo e valorizzare il territorio del Polesine attraverso progetti culturali,
                    formativi e di inclusione.
                    <br /> <br />
                    Opera per favorire l’equilibrio tra persona, comunità e impresa, sviluppando iniziative capaci di trasformare i bisogni
                    reali in opportunità di crescita condivisa.
                </p>
            </div>


            {/* Tre cards introduttive */}

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                <div className="shadow-xl rounded-sm p-5 hover:scale-105 cursor-pointer transition bg-white/10 backdrop-blur-md">
                    <h3 className="text-xl font-semibold mb-2 text-black">Benessere collettivo</h3>
                    <p className="text-gray-600 italic text-sm">Promuoviamo iniziative che favoriscono la collaborazione e il sostegno reciproco all’interno della comunità per rafforzare la coesione sociale.</p>
                </div>
                <div className="shadow-xl rounded-sm p-5 hover:scale-105 cursor-pointer transition bg-white/10 backdrop-blur-md">
                    <h3 className="text-xl font-semibold mb-2 text-black">Innovazione sociale</h3>
                    <p className="text-gray-600 italic text-sm">Promuoviamo soluzioni e pratiche condivise per rispondere in modo efficace ai cambiamenti del territorio.</p>
                </div>
                <div className="shadow-xl rounded-sm p-5 hover:scale-105 cursor-pointer transition bg-white/10 backdrop-blur-md">
                    <h3 className="text-xl font-semibold mb-2 text-black">Valorizzazione del territorio</h3>
                    <p className="text-gray-600 italic text-sm">Ascoltiamo i bisogni locali per generare valore duraturo e opportunità di crescita per la comunità polesana.</p>
                </div>
            </div>


            {/* Testo approfondimento */}
            <div
                className="max-w-5xl mt-10 text-justify p-6">
                <p className="text-base md:text-md leading-relaxed text-black">
                    Ogni progetto della Fondazione nasce dall’ascolto e dal dialogo
                    con il territorio, per generare valore autentico e duraturo.<br />
                    Le azioni promosse spaziano da iniziative sociali e culturali, spesso realizzate in collaborazione con enti e associazioni
                    locali, con l’obiettivo di rispondere in modo concreto ed efficace alle esigenze della comunità.
                    <br /><br />
                    Il vero contributo della Fondazione non si esaurisce nei singoli progetti: risiede nella capacità di costruire relazioni,
                    rafforzare il senso di appartenenza e stimolare l’espressione del potenziale di ciascuno.
                    Con uno sguardo rivolto al futuro, Fondazione Flumina investe nella crescita di un Polesine più forte, vitale e capace di
                    evolvere insieme.
                </p>
            </div>


            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-10 text-[#1a3a3f]">Ultimi eventi in tendenza</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {ultimeCard.map((card) => (
                        <div
                            key={card.id}
                            className="shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                            onClick={() => navigate(`/evento/${card.id}`)}
                        >
                            {card.immagine && (
                                <img src={card.immagine} alt={card.titolo} className="h-48 w-full object-cover" />
                            )}
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 pb-1 text-gray-400 flex content-center" />
                                    <p className="text-xs text-gray-400">{card.data}</p>
                                </div>

                                <h3 className="font-semibold text-lg">{card.titolo}</h3>
                                <p className="text-gray-700 text-sm mt-2">
                                    {card.contenuto.length > 100 ? card.contenuto.slice(0, 100) + "..." : card.contenuto}
                                    <br />
                                    <span className="text-blue-400">continua a leggere...</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            {/* BLOCCO DECORATIVO O FUTURO CAROSELLO */}
            {/* <Carosello /> */}

            {/* COOKIE BANNER */}
            <div className="mt-16">
                <Cookies />
            </div>



        </div>
    );
};

export default HomePage;
