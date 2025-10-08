import { motion } from "framer-motion";
import logo from "../assets/solo_logo.png";
import Cookies from "../components/Cookies";
// import Carosello from "../components/Carosello";
import cartinaSfondo from "../assets/cartina.png";

const HomePage = () => {

    return (

        <div className="flex flex-col items-center justify-center min-h-screen text-[#1b4a54] px-6"
            style={{
                backgroundImage: `url(${cartinaSfondo})`,
                backgroundSize: 'cover',       // scala per coprire tutto il div
                backgroundPosition: 'center',  // centra l’immagine
                backgroundRepeat: 'no-repeat',
            }}>

            {/* bg-gradient-to-b from-[#f4f9fa] to-[#e9f2f3] ---> gradiente background precedente */}


            {/* HERO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full">

                {/* Logo */}
                <motion.div
                    className="flex justify-center lg:justify-end"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={logo}
                        alt="Logo Fondazione Flumina"
                        className="h-48 md:h-72 lg:h-80 drop-shadow-xl"
                    />
                </motion.div>

                {/* Testo principale */}
                <motion.div
                    className="flex flex-col justify-center items-center lg:col-span-2 lg:text-left"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Ascoltiamo il <br />
                        territorio, <br />
                        <span className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2a7c8e] font-light">
                            per costruire valore
                        </span>
                    </h1>

                    <div className="h-1 w-24 bg-[#2a7c8e] mt-6 rounded-full mx-auto lg:mx-0"></div>
                </motion.div>
            </div>


            {/* PARAGRAFO INTRODUTTIVO */}
            <motion.div
                className="max-w-5xl mt-10 text-justify bg-opacity-80 p-6 rounded-3xl shadow-md backdrop-blur-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <p className="text-base md:text-lg leading-relaxed">
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
            </motion.div>

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
