import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import FeaturesHighlights from './components/FeaturesHighlights';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <FeaturesHighlights />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
