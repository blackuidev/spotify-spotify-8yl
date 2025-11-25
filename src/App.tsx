import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ShankozLandingPage from './pages/ShankozLandingPage'; // Assuming this component will be created in src/pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShankozLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
