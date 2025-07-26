import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Contact from './components/ContactMe';
import MyWork from './components/MyWork';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mywork" element={<MyWork />} />
    </Routes>
  );
}

export default App;
