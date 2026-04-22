import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="max-w-5xl mx-auto bg-primary rounded-2xl p-12 md:p-20 text-center text-on-primary relative overflow-hidden shadow-2xl"
      >
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 pointer-events-none"
        ></motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight relative z-10"
        >
          Start Hatching Your Success Today
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-primary-container mb-10 max-w-2xl mx-auto opacity-90 relative z-10"
        >
          Join farmers who have reclaimed their independence with our affordable ₹10,000 smart incubators. Get in touch for a live demo.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center relative z-10"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-on-secondary px-10 py-4 rounded-brand font-bold text-xl shadow-lg hover:shadow-xl hover:bg-secondary/90 transition-all"
          >
            Book a Live Demo
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary-container/30 hover:border-primary-container text-on-primary px-10 py-4 rounded-brand font-bold text-xl transition-all"
          >
            Enquire for Pricing
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
