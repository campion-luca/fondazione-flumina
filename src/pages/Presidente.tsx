import fotoPresidente from "../assets/presidente/presidente.jpeg";
import cartinaSfondo from "../assets/background/cartina_3.png";

const Presidente = () => {
    return (
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black py-20 px-6 md:px-16 lg:px-32 text-base md:text-lg leading-relaxed min-h-screen"
            style={{
                backgroundImage: `url(${cartinaSfondo})`,
                backgroundSize: 'cover',       // scala per coprire tutto il div
                backgroundPosition: 'center',  // centra l’immagine
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                {/* Immagine */}
                <div
                    className="flex justify-center md:justify-end"
                >
                    <img
                        src={fotoPresidente}
                        alt="Foto profilo Presidente"
                        className="w-70 h-95 lg:w-72 lg:h-96 md:h-80 md:w-70 object-cover rounded-xl shadow-xl border-3 border-b border-r border-[#1b4a54]"
                    />
                </div>

                {/* Testo */}
                <div className="md:col-span-2 space-y-6">
                    <h2 className="font-bold mb-4">
                        <span className="text-6xl">J</span>essica Banin
                    </h2>
                    <p>
                        <strong>Avvocato</strong>, laureata in Giurisprudenza presso
                        l’Università di Padova, ha maturato la propria esperienza in un
                        prestigioso studio legale di Rovigo, dove ha appreso che dedizione e
                        impegno sono i pilastri di una professione basata su rigore e
                        responsabilità.
                    </p>
                    <p>
                        Sposata e madre di una bambina, oggi mette le proprie competenze al
                        servizio della <strong>Rete d’Imprese</strong> presieduta dal Dott.
                        Roberto Cavazzana, guidando con autorevolezza e precisione la
                        divisione legale e la gestione patrimoniale.
                    </p>
                    <p>
                        Come <strong>Presidente della Fondazione Flumina</strong>, affronta
                        il suo primo incarico di interesse pubblico con l’obiettivo di
                        sostenere lo sviluppo del territorio. In questa veste, l’Avvocato
                        Banin ha dichiarato:
                    </p>

                    {/* Citazione */}
                    <blockquote className="border-l-4 border-[#989d6e] pl-6 italic text-gray-800">
                        “Lo scopo della Fondazione non può essere individuato nel mero
                        aspetto negativo dell’assenza di lucro, ma deve essere identificato
                        in positivo nel perseguimento di uno scopo di pubblica utilità.”
                    </blockquote>

                    <p>
                        In un contesto complesso e segnato dall’incertezza, l’Avvocato Banin
                        lavora per valorizzare il Polesine e le sue potenzialità, promuovendo
                        progetti e investimenti in grado di generare crescita e opportunità
                        per il territorio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Presidente;
