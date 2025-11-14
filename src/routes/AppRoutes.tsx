import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PrivacyPage from '../pages/PrivacyPage';
import Presidente from '../pages/Presidente';
import Eventi from '../pages/Eventi';
import ChiSiamo from '../pages/ChiSiamo';
import EventoDettaglio from '../pages/EventoDettaglio';
import Contatti from '../pages/Contatti';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/presidente" element={<Presidente />} />
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/evento/:id" element={<EventoDettaglio />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path='/contatti' element={<Contatti />} />
    </Routes>
)
export default AppRoutes;