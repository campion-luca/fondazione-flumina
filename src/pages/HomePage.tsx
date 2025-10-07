import logo from '../assets/solo_logo.png';
import Carosello from '../components/Carosello';
import Cookies from '../components/Cookies';

const HomePage = () => {


    return (

        <div className="flex flex-col items-center pt-5 min-h-screen text-[#1b4a54]">

            <div className='grid grid-cols-3'>

                {/* Immagine */}
                <div className='flex justify-end'>
                    <img src={logo} alt="Logo Fondazione Flumina" className="h-50 md:h-80 lg:h-90" />
                </div>

                {/* Didascalia Logo */}
                <div className='flex justify-start items-center col-span-2'>
                    <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl'>Ascoltiamo il<br />
                        territorio,
                        <br />
                        <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'>per costruire valore</span>

                    </h1>
                </div>

            </div>


            <div>
                <p className="sm:text-base md:text-xl lg:text-xl mb-6 text-justify px-4 mx-12 mt-3 text-[#1b4a54]">
                    Fondazione Flumina nasce a sostegno del benessere collettivo, promuovendo iniziative culturali, formative e di inclusione che
                    favoriscono l’equilibrio tra impresa, persona e comunità.
                    <br />
                    Opera con l’obiettivo di sviluppare progetti innovativi di welfare
                    aziendale e per la promozione e valorizzazione territoriale.
                    <br />
                    La Fondazione Flumina pone particolare attenzione alla crescita culturale e del tessuto sociale mettendo al centro delle proprie attività
                    l’ascolto dei bisogni del territorio, trasformandoli in progettualità concrete capaci di generare valore condiviso.
                </p>
            </div>



            {/* Cookie Banner */}
            < Cookies />

            {/* Carosello foto */}
            {/* < Carosello /> */}


        </div>
    )
}

export default HomePage;