import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PrivacyPage from '../pages/PrivacyPage';
import Presidente from '../pages/Presidente';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/presidente" element={<Presidente />} />
    </Routes>
)
export default AppRoutes;