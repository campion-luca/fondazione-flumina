import logo from '../assets/fondazione_flumina.png';


const HomePage = () => {

    return (

        <div className="flex flex-col items-center min-h-screen text-[#1b4a54]">

            {/* Immagine */}
            <img src={logo} alt="Logo Fondazione Flumina" className="h-80 w-80 mb-4 mt-3" />

            {/* Sottotitolo */}
            <p className="text-lg mb-6 text-justify px-4 mx-12 mt-3 text-[#1b4a54]">
                Fondazione Flumina nasce a sostegno del benessere collettivo, promuovendo iniziative culturali, formative e di inclusione che
                favoriscono l’equilibrio tra impresa, persona e comunità.
                <br />
                Opera con l’obiettivo di sviluppare progetti innovativi di welfare
                aziendale e per la promozione e valorizzazione territoriale.
                <br />
                La Fondazione Flumina pone particolare attenzione alla crescita culturale e del tessuto sociale mettendo al centro delle proprie attività
                l’ascolto dei bisogni del territorio, trasformandoli in progettualità concrete capaci di generare valore condiviso.
            </p>

            {/* Work in progress */}
            <h2 className="text-3xl font-semibold text-white-500 mb-4 mt-5">
                SITO IN LAVORAZIONE
            </h2>

        </div>
    )
}

export default HomePage;
