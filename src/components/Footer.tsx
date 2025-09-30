    import { MdOutlineEmail } from "react-icons/md";
    import { BsTelephone } from "react-icons/bs";
    import { SiGooglemaps } from "react-icons/si";
    import { FaInstagram } from "react-icons/fa6";
    import { FaLinkedin } from "react-icons/fa6";

    const Footer = () => {

        return (
            <footer className="bg-[#1b4a54] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

                    {/* Divisione colonne */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">

                        {/* Contatti */}
                        <div className="mt-2 text-end text-sm text-gray-300 flex items-center justify-center flex-col order-1 sm:order-1 lg:order-1">
                            <ol className="list-none">

                                <li className="pb-2 gap-1 flex items-center"><a href="mailto:segreteria@fondazioneflumina.it" className="hover:underline flex items-center gap-1">
                                    <MdOutlineEmail />segreteria@fondazioneflumina.it</a></li>

                                <li className="pb-2 gap-1 flex items-center"><a href="https://www.google.com/maps/place/Via+Nino+Bedendo,+22/B,+45100+Rovigo+RO" target="_blank" className="hover:underline flex items-center gap-1">
                                <SiGooglemaps />Via Nino Bedendo, 22/B, 45100 Rovigo RO</a></li>

                                <li className="pb-2 gap-1 flex items-center"><a href="tel:0425460577" className="hover:underline flex items-center gap-1">
                                    <BsTelephone />Tel. 0425 460577</a></li>
                            </ol>
                        </div>

                        {/* Copyright */}
                        <div className="text-xs text-gray-400 flex items-end justify-center order-3 sm:order-3 lg:order-2">
                            &copy; {new Date().getFullYear()} Fondazione Flumina. Tutti i diritti riservati.
                        </div>


                        {/* Social */}
                        <div className="mt-2 text-sm text-gray-300 flex justify-center order-2 sm:order-2 lg:order-3">
                            <ol className="flex lg:flex-col gap-4 sm:gap-4 lg:gap-1">

                                <li className="pb-2 gap-1 flex items-center cursor-pointer"><a href="https://www.instagram.com/fondazione_flumina/" target="_blank" className="flex items-center gap-1">
                                <FaInstagram />Instagram</a></li>

                                <li className="pb-2 gap-1 flex items-center text-gray-400 opacity-50 cursor-not-allowed"><FaLinkedin />Linkedin</li>
                            </ol>
                        </div>


                    </div>
                </div>
            </footer>
        )
    }


    export default Footer;