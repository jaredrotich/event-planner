import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreateEvent from './pages/CreateEvent.jsx';
import EventPage from './pages/EventPage.jsx';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  );
}