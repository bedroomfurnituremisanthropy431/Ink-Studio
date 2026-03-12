import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioHighlights from './components/PortfolioHighlights';
import Visionaries from './components/Visionaries';
import Philosophy from './components/Philosophy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper bg-black">
      <Header />
      <Hero />
      <PortfolioHighlights />
      <Visionaries />
      <Philosophy />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
