import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Healing from './pages/Healing';
import Building from './pages/Building';
import Creating from './pages/Creating';
import Organizations from './pages/Organizations';
import Speaking from './pages/Speaking';
import About from './pages/About';
import Contact from './pages/Contact';
import BookCall from './pages/BookCall';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/healing" element={<Healing />} />
            <Route path="/building" element={<Building />} />
            <Route path="/creating" element={<Creating />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-call" element={<BookCall />} />
            <Route path="/schedule" element={<BookCall />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

