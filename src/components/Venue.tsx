
import { motion } from 'motion/react';

export default function Venue() {
  const ceremonyMap = 'https://www.google.com/maps/search/?api=1&query=Saint+Clare+of+Assisi+150+St+Francis+Avenue+Woodbridge+ON';
  const receptionMap = 'https://www.google.com/maps/search/?api=1&query=The+Venetian+219+Romina+Drive+Concord+ON';

  return (
    <section id="venue" className="py-16 sm:py-20 px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="subtext mb-4">Wedding Details</p>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-primary tracking-tight mb-6">
          We can't wait to celebrate with you
        </h2>
        <p className="text-sm sm:text-base text-primary/70">
          Saturday, April 10, 2027
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto border-b border-primary/10 pb-16">
        {/* Mobile Burgundy Divider */}
        <div className="md:hidden w-full flex justify-center">
          <span className="w-full h-px bg-primary/50"></span>
        </div>
        {/* Ceremony */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center"
        >
          <p className="subtext mb-4">The Ceremony</p>
          <h3 className="text-3xl sm:text-4xl font-serif font-light text-primary mb-4">
            Saint Clare of Assisi
          </h3>
          <p className="text-primary/70 text-sm leading-relaxed mb-2">
            150 St. Francis Avenue<br />
            Woodbridge, Ontario
          </p>
          <p className="text-primary font-medium text-sm mb-6">
            3:00 PM
          </p>
          <motion.a
            href={ceremonyMap}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full border border-primary text-[11px] tracking-[0.25em] uppercase font-semibold text-primary hover:bg-primary hover:text-base transition-all duration-500"
          >
            View on Google Maps
          </motion.a>
        </motion.div>
                       {/* Mobile Burgundy Divider */}
        <div className="md:hidden w-full flex justify-center py-2">
          <span className="w-full h-px bg-primary/50"></span>
        </div>
        {/* Reception */}
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center flex flex-col items-center"
        >
          <p className="subtext mb-4">The Reception</p>
          <h3 className="text-3xl sm:text-4xl font-serif font-light text-primary mb-4">
            The Venetian
          </h3>
          <p className="text-primary/70 text-sm leading-relaxed mb-2">
            219 Romina Drive<br />
            Concord, Ontario
          </p>
          <p className="text-primary font-medium text-sm mb-6">
            6:00 PM
          </p>
          <motion.a
            href={receptionMap}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full border border-primary text-[11px] tracking-[0.25em] uppercase font-semibold text-primary hover:bg-primary hover:text-base transition-all duration-500"
          >
            View on Google Maps
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
