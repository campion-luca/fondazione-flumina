import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {

    return (
        <footer className="bg-[#1b4a54] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">


                {/* Copyright */}
                <div className="mt-2 text-center text-sm text-gray-300 flex items-center justify-center flex-col">
                        <ol className="list-none pb-2">

                        <li className="pb-2 gap-1 flex items-center"><MdOutlineEmail />segreteria@fondazioneflumina.it</li>
                        <li className="pb-2 gap-1 flex items-center"><SiGooglemaps />Via Nino Bedendo, 22/B, 45100 Rovigo RO</li>
                        <li className="pb-2 gap-1 flex items-center"><BsTelephone />Tel. 0425 460577</li>
                    </ol>

                    &copy; {new Date().getFullYear()} Fondazione Flumina. Tutti i diritti riservati.

                </div>
            </div>
        </footer>
    )
}


export default Footer;