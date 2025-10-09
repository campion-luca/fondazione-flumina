import { Calendar } from "lucide-react";
import cartinaSfondo from "../assets/cartina_3.png";

const Eventi = () => {
  return (
    <div style={{
      backgroundImage: `url(${cartinaSfondo})`,
      backgroundSize: 'cover',       // scala per coprire tutto il div
      backgroundPosition: 'center',  // centra l’immagine
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}>


      <div className="max-w-4xl mx-auto px-6 py-12 text-[#1b4a54]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Eventi Passati
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">
              Concerto di Solidarietà – Rovigo
            </h2>
          </div>

          <p className="leading-relaxed mb-4">
            Si è tenuto il concerto organizzato dalla{" "}
            <span className="font-semibold">@crocerossarovigo</span> e dai{" "}
            <span className="font-semibold">#Rotary</span> della provincia di Rovigo,
            a sostegno dell’acquisto di un <span className="italic">carrello attrezzato</span> con motopompa e torre faro,
            utile nelle emergenze legate al maltempo.
          </p>

          <p className="leading-relaxed mb-4">
            La <span className="font-semibold">Fondazione Flumina</span> ha contribuito
            all’iniziativa, sottolineando il proprio impegno concreto a favore del territorio.
            L’evento ha rappresentato anche la <span className="font-semibold">prima uscita pubblica</span>{" "}
            della Presidente <span className="">Jessica Banin</span>, durante la quale ha condiviso
            l’impegno della Fondazione per valorizzare e tutelare il Polesine.
          </p>

          <div className="border-l-4 border-blue-300 pl-4 my-4">
            <p className=" italic">
              Presente anche <span className="font-semibold">Anna Momesso</span>, brand ambassador,
              per condividere con il pubblico le principali aree di interesse della Fondazione.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <p>
              Un caloroso plauso a tutti i musicisti del{" "}
              <span className="font-semibold">Gruppo Ottoni del @conservatoriorovigo</span>,
              diretti dal Maestro <span className="font-semibold">Fabiano Cudiz</span>, che hanno regalato
              al pubblico una performance coinvolgente e memorabile.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400">
          <p>Altri eventi saranno presto disponibili...</p>
        </div>
      </div>

    </div>
  );
};

export default Eventi;
