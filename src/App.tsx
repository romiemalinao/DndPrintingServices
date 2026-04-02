import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, FloatingCTA } from './components/Layout';
import { Home } from './pages/Home';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main><Home /></main>
            <Footer />
            <FloatingCTA />
          </div>
        } />
        <Route path="*" element={
          <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main><Home /></main>
            <Footer />
            <FloatingCTA />
          </div>
        } />
      </Routes>
    </Router>
  );
}
