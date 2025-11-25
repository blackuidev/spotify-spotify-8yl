import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ShankozLandingPage from './pages/ShankozLandingPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout'; // Assuming the Layout component will be created here
import './App.css';

function App() {
  return (
    <Router>
      {/* Wrap the entire application content with the Layout component to apply global themes and animations */}
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<ShankozLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
