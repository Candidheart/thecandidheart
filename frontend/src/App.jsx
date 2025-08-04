import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
import SoulfulStrategyBook from './pages/SoulfulStrategyBook';
import Coaching from './pages/Coaching';
import SayItBrave from './pages/SayItBrave';
import CandidHeartProject from './pages/CandidHeartProject';
import CandidHeartInterest from './pages/CandidHeartInterest';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <HelmetProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <header role="banner">
            <Navigation />
          </header>
          <main role="main">
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
              <Route path="/soulful-strategy-book" element={<SoulfulStrategyBook />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/say-it-brave" element={<SayItBrave />} />
              <Route path="/candid-heart-project" element={<CandidHeartProject />} />
              <Route path="/candid-heart-interest" element={<CandidHeartInterest />} />
            </Routes>
          </main>
          <footer role="contentinfo">
            <Footer />
          </footer>
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;

