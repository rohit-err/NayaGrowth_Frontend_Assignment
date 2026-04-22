import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    },
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden pt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="inline-block text-secondary font-bold tracking-widest text-xs uppercase mb-4">
            Start your own hatchery for just ₹10,000
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-6">
            Helping farmers hatch their own future.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8 max-w-lg">
            Take full control of your poultry farm with professional-grade smart incubators. Engineered for independence, starting at just ₹10,000.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-on-primary px-8 py-4 rounded-brand font-bold text-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Request Demo
              <motion.span 
                className="material-symbols-outlined"
                aria-hidden="true"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                arrow_forward
              </motion.span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "var(--color-surface-container)", y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-brand font-bold text-lg transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Models
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block relative mt-8 md:mt-0"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-8 border-white relative group">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            <motion.img 
              alt="Farmer with poultry" 
              className="w-full h-full object-cover transform-gpu" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4tYXf5dp9MVvFvOGpK7ksehO0NjWkyvqBR7b3bnHLCrAjM7QwRYVN_w9h_bnzBCkWk8p86XOmswt0Erk7pJ7Fftf_6FOVDDY2W94ISvki-fWcwx2XHMrOc1geAREFOzr8Iqqn3nI1WBroEbEpOOuAaxueksxg6e2vjZWjJev2Q7ZbGrR3sm6Ds7DxqDYmgoYM-QV0rOYRgGpi7EiDK2_c2TJzXm5zO0QOZYD2ukshRrPu9LBMMxvPftUiIpFeqlu0i4XjyKv1UOY"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          {/* Tactile Overlay Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-secondary z-20"
          >
            <p className="text-primary font-extrabold text-2xl mb-1">Reliable Results</p>
            <p className="text-on-surface-variant text-sm leading-snug font-medium">
              Engineered to maintain stable conditions despite rural power fluctuations and varying local weather.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
