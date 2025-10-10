import logo from "../assets/solo_logo.png";
import Cookies from "../components/Cookies";
// import Carosello from "../components/Carosello";
import cartinaSfondo from "../assets/cartina.png";
import concertoOttoni from "../assets/ottoni_1.png";
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
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl w-full">


                {/* Logo */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={logo}
                        alt="Logo Fondazione Flumina"
                        className="h-48 md:h-72 lg:h-80 drop-shadow-xl"
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

                    <div className="h-1 w-24 bg-[#2a7c8e] mt-6 rounded-full mx-auto lg:mx-0"></div>
                </div>
            </div>
            {/* HERO END ---------------------------------------------------------------------------------------- */}


            {/* Tre cards introduttive */}

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                <div className="shadow-lg rounded-2xl p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2 text-black">Benessere collettivo</h3>
                    <p className="text-gray-600">Promuoviamo iniziative che migliorano la qualità della vita e l’inclusione.</p>
                </div>
                <div className="shadow-lg rounded-2xl p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2 text-black">Innovazione sociale</h3>
                    <p className="text-gray-600">Sosteniamo progetti di welfare aziendale e innovazione territoriale.</p>
                </div>
                <div className="shadow-lg rounded-2xl p-6 hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2 text-black">Valorizzazione del territorio</h3>
                    <p className="text-gray-600">Trasformiamo i bisogni in progettualità concrete che generano valore condiviso.</p>
                </div>
            </div>


            {/* Testo principale */}
            <div
                className="max-w-5xl mt-10 text-justify p-6 rounded-3xl">
                <p className="text-base md:text-lg leading-relaxed text-black">
                    <strong>Fondazione Flumina</strong> nasce a sostegno del benessere collettivo,
                    promuovendo iniziative culturali, formative e di inclusione che favoriscono
                    l’equilibrio tra impresa, persona e comunità.
                    <br /><br />
                    Opera con l’obiettivo di sviluppare progetti innovativi di welfare aziendale e per
                    la promozione e valorizzazione territoriale.
                    <br /><br />
                    La Fondazione pone particolare attenzione alla crescita culturale e del tessuto
                    sociale mettendo al centro delle proprie attività l’ascolto dei bisogni del
                    territorio, trasformandoli in progettualità concrete capaci di generare valore
                    condiviso.
                </p>
            </div>


            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-10 text-[#1a3a3f]">Ultimi eventi in tendenza</h2>


                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/eventi">
                        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <img src={concertoOttoni} alt="Evento 1" className="h-48 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">Concerto presso il tempio della rotonda</h3>
                                <p className="text-gray-600 text-sm mt-2">In collaborazione con la croce rossa italiana</p>
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
