
import { motion } from 'motion/react';

export default function Gifts() {
  return (
    <section
      id="registry"
      className="bg-dark-bg border-y border-white/5 py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden text-dark-text"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex items-center justify-center">
        <span className="font-serif text-[24vw] font-light italic text-dark-text">
          Gifts
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10"
      >
        <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-dark-text/40 mb-4">
          — GIFTS —
        </span>

        <h2 className="text-3xl min-[375px]:text-4xl sm:text-5xl font-serif font-light tracking-tight text-dark-text mb-8">
          Your Presence is Our Greatest Gift
        </h2>

       <p className="font-normal text-dark-text/80 text-sm sm:text-base leading-relaxed max-w-2xl">
  Your presence at our wedding is more than we could ever ask for. For those who wish to give, monetary gifts in lieu of traditional gifts would be sincerely appreciated.
</p>

        <div className="w-12 h-[1px] bg-white/20 my-10"></div>

        <p className="text-[10px] font-sans font-light tracking-[0.2em] text-dark-text/40 uppercase">
          Thank you for celebrating with us
        </p>
      </motion.div>
    </section>
  );
}
