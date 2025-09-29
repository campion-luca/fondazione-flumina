const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Titolo principale */}
            <h1 className="text-5xl font-bold text-rose-500 mb-4">
                SITO IN LAVORAZIONE
            </h1>

            {/* Sottotitolo */}
            <p className="text-gray-600 text-lg mb-6 text-center px-4">
                Stiamo lavorando per offrirti la migliore esperienza. Torna a trovarci presto!
            </p>

            {/* Pulsante o link facoltativo */}
            <a 
                href="#"
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
                Contattaci
            </a>
        </div>
    )
}

export default Home;
