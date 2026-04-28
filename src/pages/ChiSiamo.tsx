import logo from "../assets/logo/logo_nuovo.png";
import Cookies from "../components/Cookies";
import cartinaSfondo from "../assets/background/cartina_4.png";
import { usePageMeta } from "../hooks/usePageMeta";

const ChiSiamo = () => {
    usePageMeta({
        title: 'Chi Siamo',
        description: 'Fondazione Flumina è una costituenda fondazione che promuove il benessere collettivo e valorizza il Polesine attraverso progetti culturali, formativi e di inclusione.',
        path: '/chisiamo',
    });

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-[#1b4a54] px-6"
            style={{
                backgroundImage: `url(${cartinaSfondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >

            {/* HERO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl w-full mt-10">

                {/* Logo */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={logo}
                        alt="Logo Fondazione Flumina"
                        className="h-48 md:h-72 lg:h-80 drop-shadow-xl lg:me-25 lg:mt-5"
                    />
                </div>

                {/* Testo principale */}
                <div className="flex flex-col justify-center items-center lg:items-start col-span-2 text-left">
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Chi siamo
                    </h1>

                    <div className="h-1 w-24 bg-[#2a7c8e] mt-6 rounded-full mx-auto lg:mx-0"></div>
                </div>
            </div>

            {/* TESTO CHI SIAMO */}
            <div className="max-w-5xl mt-10 text-justify p-6 rounded-3xl bg-white/70 backdrop-blur-sm">
                <p className="text-base md:text-lg leading-relaxed">
                    <h1 className="font-bold">Fondazione Flumina</h1>
                    <br /><br />
                    Fondazione Flumina è una <strong>costituenda fondazione</strong>, attualmente in via di
                    costituzione, che nasce con l’obiettivo di promuovere il benessere collettivo e valorizzare
                    il territorio del Polesine attraverso progetti culturali, formativi e di inclusione.
                    <br /><br />
                    Il nome Flumina deriva dal latino <em>flumen</em>, "fiume", ed è un omaggio
                    all’identità del Polesine, la terra tra due grandi corsi d’acqua, l’Adige e il Po,
                    attraversata da una fitta rete di canali che da secoli plasmano il paesaggio, la cultura
                    e la vita delle comunità. È un territorio di acque in movimento, in cui la presenza umana
                    e quella naturale si intrecciano in un equilibrio continuo.
                    <br /><br />
                    Come i fiumi che scorrono e si incontrano, Fondazione Flumina si propone come un flusso
                    vitale di connessioni e opportunità, racchiudendo la pluralità dei fiumi e, metaforicamente,
                    la pluralità delle direzioni della propria azione sul territorio.
                    <br /><br />
                    Già nelle fasi che precedono la sua piena costituzione, la Fondazione si muove per
                    sviluppare progetti innovativi di welfare aziendale e di promozione e valorizzazione
                    territoriale, con particolare attenzione alla crescita culturale e al tessuto sociale.
                    Al centro di ogni iniziativa c’è l’ascolto dei bisogni del territorio, da trasformare
                    in progettualità concrete capaci di generare valore condiviso.
                </p>
            </div>

            {/* COOKIE BANNER */}
            <div className="mt-16">
                <Cookies />
            </div>

        </div>
    );
};

export default ChiSiamo;
