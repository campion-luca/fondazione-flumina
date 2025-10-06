import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PrivacyPage from '../pages/PrivacyPage';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
)
export default AppRoutes;