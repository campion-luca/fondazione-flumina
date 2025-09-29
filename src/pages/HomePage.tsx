import logo from '../assets/fondazione_flumina.png';

const HomePage = () => {

    return (

        <div style={{ backgroundColor: "#989d6e" }} className="flex flex-col items-center bg-gray-100 min-h-screen">

            {/* Titolo principale */}
            <h1 className="text-5xl font-bold text-white-500 mb-4 mt-10">
                FONDAZIONE FLUMINIA
            </h1>

            {/* Immagine */}
            <img src={logo} alt="Logo Fondazione Flumina" className="h-45 w-45 mb-4 mt-3" />


            {/* Sottotitolo */}
            <p className="text-gray-800 text-lg mb-6 text-center px-4 mx-10 mt-3">
                Fondazione dedicata alla promozione di progetti di welfare aziendale, benessere organizzativo e sviluppo sostenibile delle comunità. 
                La Fondazione Flumina si impegna a creare valore condiviso, contribuendo al miglioramento della qualità della vita delle persone e 
                al rafforzamento del tessuto sociale e territoriale.
                <br /><br />
                Fondazione Flumina nasce con l’obiettivo di sviluppare progetti innovativi di welfare aziendale e territoriale, 
                mettendo al centro il benessere dei singoli e delle comunità in cui operano le imprese. La fondazione opera come una vera 
                e propria piattaforma di sostegno al benessere collettivo, promuovendo iniziative culturali, formative, sociali e ambientali che favoriscono 
                l’equilibrio tra impresa, persona e comunità.
                <br /><br />
                Attraverso la collaborazione con aziende, enti locali, associazioni e istituzioni, Fondazione Flumina sviluppa percorsi di crescita sostenibile, 
                capaci di coniugare efficienza organizzativa e responsabilità sociale. L’attenzione al capitale umano, alla valorizzazione delle competenze e alla 
                qualità della vita lavorativa rappresenta un elemento centrale della missione della fondazione, così come la volontà di creare comunità più coese, 
                resilienti e attente al futuro.
            </p>

            {/* Work in progress */}
            <h2 className="text-3xl font-semibold text-white-500 mb-4 mt-3">
                SITO IN LAVORAZIONE
            </h2>

        </div>
    )
}

export default HomePage;
