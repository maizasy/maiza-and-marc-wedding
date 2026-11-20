
import Header from './components/Header';
import Hero from './components/Hero';
import Venue from './components/Venue';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-base relative selection:bg-dark-bg selection:text-base">
      <Header />
      <Hero />
      <Venue />
      <Gifts />
      <RSVP />
      <Footer />
    </main>
  );
}
