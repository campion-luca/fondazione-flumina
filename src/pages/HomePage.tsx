import logo from "../assets/logo/test.png";
import Cookies from "../components/Cookies";
import { Calendar } from "lucide-react";
import cartinaSfondo from "../assets/background/cartina.png";
import concertoOttoni from "../assets/eventi/ottoni_1.png";
import { Link } from "react-router-dom";

const HomePage = () => {

    return (

        <div className="flex flex-col items-center justify-center min-h-screen text-[#1b4a54] px-6"
            style={{
                backgroundImage: `url(${cartinaSfondo})`,
                backgroundSize: 'cover',       // scala per coprire tutto il div
                backgroundPosition: 'center',  // centra l’immagine
                backgroundRepeat: 'no-repeat',  // non ripete l'immagine
            }}>

            {/* bg-gradient-to-b from-[#f4f9fa] to-[#e9f2f3] ---> gradiente background precedente */}


            {/* HERO SECTION */}
            <div className="grid grid-cols-3 max-w-7xl w-full mt-3">


                {/* Logo */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={logo}
                        alt="Logo Fondazione Flumina"
                        className="h-40 sm:h-55 md:h-72 lg:h-80 drop-shadow-xl md:ms-15 lg:me-25"
                    />
                </div>


                {/* Testo */}
                <div
                    className="flex flex-col justify-center items-center lg:items-start  col-span-2 text-left">
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Ascoltiamo il <br />
                        territorio <br />
                        <span className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2a7c8e] font-light">
                            per costruire valore
                        </span>
                    </h1>

                    <div className="h-1 w-45 bg-[#2a7c8e] mt-6 rounded-full mx-auto lg:mx-0"></div>
                </div>
            </div>



            {/* HERO END ---------------------------------------------------------------------------------------- */}


            {/* Paragravo introduttivo */}
            <div className="my-4 max-w-5xl mt-10 text-justify p-6 text-black md:text-lg">
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
                <div className="shadow-lg rounded-2xl p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2 text-black">Benessere collettivo</h3>
                    <p className="text-gray-600 italic">Promuoviamo iniziative che favoriscono la collaborazione e il sostegno reciproco all’interno della comunità per rafforzare la coesione sociale.</p>
                </div>
                <div className="shadow-lg rounded-2xl p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2 text-black">Innovazione sociale</h3>
                    <p className="text-gray-600 italic">Promuoviamo soluzioni e pratiche condivise per rispondere in modo efficace ai cambiamenti del territorio.</p>
                </div>
                <div className="shadow-lg rounded-2xl p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2 text-black">Valorizzazione del territorio</h3>
                    <p className="text-gray-600 italic">Ascoltiamo i bisogni locali per generare valore duraturo e opportunità di crescita per la comunità polesana.</p>
                </div>
            </div>


            {/* Testo approfondimento */}
            <div
                className="max-w-5xl mt-10 text-justify p-6">
                <p className="text-base md:text-lg leading-relaxed text-black">
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
                    <Link to="/eventi">
                        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <img src={concertoOttoni} alt="Evento 1" className="h-48 w-full object-cover" />
                            <div className="p-4">

                                <div className="flex items-center gap-3">

                                    <Calendar className="w-5 h-5 pb-1 text-gray-400 flex content-center" />
                                    <p className="text-sm text-gray-400">
                                        30 / settembre / 2025</p>
                                </div>


                                <h3 className="font-semibold text-lg">Concerto presso il tempio della rotonda</h3>
                                <p className="text-gray-700 text-sm mt-2">In collaborazione con la croce rossa italiana
                                    <br />
                                    <span className="text-blue-400">continua a leggere...</span></p>

                            </div>
                        </div>
                    </Link>
                    {/* Ripeti per altri 2 eventi */}
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
