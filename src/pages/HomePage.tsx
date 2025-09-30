import logo from '../assets/fondazione_flumina.png';

const HomePage = () => {

    return (

        <div className="flex flex-col items-center min-h-screen text-[#1b4a54]">

            {/* Titolo principale */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#1b4a54] mb-4 mt-10 text-center">
                FONDAZIONE FLUMINA
            </h1>

            {/* Immagine */}
            <img src={logo} alt="Logo Fondazione Flumina" className="h-50 w-50 mb-4 mt-3" />

            {/* Sottotitolo */}
            
            <p className="text-lg mb-6 text-center px-4 mx-15 mt-3 text-[#1b4a54]">
                Fondazione Flumina nasce a sostegno del benessere collettivo, promuovendo iniziative culturali, formative e di inclusione che
                favoriscono l’equilibrio tra impresa, persona e comunità. Opera con l’obiettivo di sviluppare progetti innovativi di welfare
                aziendale e per la promozione e valorizzazione territoriale.
                <br />

                La Fondazione Flumina pone particolare attenzione alla crescita culturale e del tessuto sociale mettendo al centro delle proprie attività
                l’ascolto dei bisogni del territorio, trasformandoli in progettualità concrete capaci di generare valore condiviso.
            </p>

            {/* Work in progress */}
            <h2 className="text-3xl font-semibold text-white-500 mb-4 mt-3">
                SITO IN LAVORAZIONE
            </h2>

        </div>
    )
}

export default HomePage;
