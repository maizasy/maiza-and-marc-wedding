import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';


export default function Footer() {
  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Our Story', href: '#venue' },
    { name: 'Stay', href: '#accommodation' }, 
    { name: 'Itinerary', href: '#timeline' },
    { name: 'Registry', href: '#registry' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="pt-32 pb-16 px-6 sm:px-12 bg-base relative overflow-hidden flex flex-col items-center border-t border-primary/5">
      
 

      {/* Outro Content */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex gap-2.5 mb-8 text-primary/30">
          <Diamond size={10} strokeWidth={1} fill="currentColor" />
          <Diamond size={10} strokeWidth={1} fill="currentColor" />
          <Diamond size={10} strokeWidth={1} fill="currentColor" />
        </div>
        
        <h2 className="text-4xl min-[375px]:text-5xl sm:text-7xl font-serif font-light tracking-tight text-primary/95 mb-6 max-w-2xl leading-[1.1]">
  With Love,<br />
  <span className="italic font-normal">Maiza & Marc</span>
</h2>

<p className="font-light text-primary/70 text-sm sm:text-base mb-10">
  We look forward to celebrating with you!
</p>

        <motion.button 
          onClick={scrollToRSVP}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="px-14 py-4 rounded-full border border-primary text-[11px] tracking-[0.35em] uppercase font-semibold text-primary bg-transparent hover:bg-primary hover:text-base hover:shadow-[0_10px_30px_rgba(44,51,41,0.06)] transition-all duration-500 cursor-pointer mb-24 relative overflow-hidden"
        >
          RSVP TODAY
        </motion.button>
      </div>

      

      {/* Footer Credits */}
      <div className="w-full text-center flex flex-col sm:flex-row items-center justify-between max-w-4xl text-primary/40 text-[10px] font-sans tracking-[0.2em] uppercase gap-4">
        <span>© 2027 MAIZA & MARC</span>
        <span>PROUDLY MADE SECURE FOR GUESTS</span>
      </div>

    </footer>
  );
}
