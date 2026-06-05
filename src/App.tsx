import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import About from './pages/About';

type Page = 'home' | 'solutions' | 'pricing' | 'about';

export default function App() {
  const [page, setPage] = useState<Page>('pricing');

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <Navbar currentPage={page} onNavigate={navigate} />
      <div className="flex-grow">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'solutions' && <Solutions />}
        {page === 'pricing' && <Pricing />}
        {page === 'about' && <About />}
      </div>
      <Footer />
    </div>
  );
}
