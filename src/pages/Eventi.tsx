import cartinaSfondo from "../assets/background/cartina_3.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

const Eventi = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // TIPIZZO IN QUANTO STO UTILIZZANDO TYPESCRIPT
  interface Card {
    id: number;
    titolo: string;
    contenuto: string;
    immagine?: string; // opzionale
    data: string;
  }
  const [cards, setCards] = useState<Card[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/eventList.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Errore nel caricamento JSON:", err));
  }, []);


  return (
    <div style={{
      backgroundImage: `url(${cartinaSfondo})`,
      backgroundSize: 'cover',       // scala per coprire tutto il div
      backgroundPosition: 'center',  // centra l’immagine
      backgroundRepeat: 'no-repeat',
      minHeight: '100dvh',
    }}>



      {/* LISTA EVENTI DINAMICA */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-[#1b4a54]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {card.immagine && (
                <img
                  src={card.immagine}
                  alt={card.titolo}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5">
                <p className="text-gray-500 flex items-center"><Calendar className="w-5 h-5 me-1" />{card.data}</p>
                <h3 className="text-xl font-bold text-[#1b4a54] mb-2 group-hover:text-blue-700 transition-colors">
                  {card.titolo}
                </h3>

                <p className="text-gray-700 mb-3">
                  {card.contenuto.length > 155 ? card.contenuto.slice(0, 155) + "..." : card.contenuto}
                </p>

                <p className="text-blue-600 font-semibold group-hover:underline cursor-pointer" onClick={() => navigate(`/evento/${card.id}`)}>
                  continua la lettura
                </p>
              </div>
            </div>
          ))}


        </div>
      </div>





    </div>
  );
};

export default Eventi;
