import { motion } from 'framer-motion';

const Solution = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 15 } },
  };

  return (
    <section className="py-20 overflow-hidden" id="solution">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-square bg-primary-container rounded-xl overflow-hidden shadow-sm group">
            <img 
              alt="Incubator Tech" 
              className="w-full h-full object-cover transform-gpu group-hover:scale-110 transition-transform duration-1000 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FAHXlj54McNh7EPTmcyNVCCtwNQj00j-uJqoW82h0mljV-I5V_nuPBTSe3Q3edPC_xjsLyb6E_9OgBHuIbAQ6CyhdyumFiKpmZmPa80KPAwQ0bHhrf8zfAyMHr6YCDO8TEMGeIYsxkvRxjX-RUlfPT-29fyQrYNeDG1ihWVLCda2njpoO1uhUT2c-eFf0Aqvp_A76Kl8b0XVzTGScqHU74SIL0Xm84AR2j30P5C5TZmcKr7dnjbq1lTjAEmBpWaaZpsKCZw3BcQ"
            />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="aspect-square bg-secondary-container rounded-xl flex items-center justify-center p-6 text-center shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-on-secondary-container font-extrabold text-lg leading-tight relative z-10">Technology built for the Indian farm.</p>
          </motion.div>
          <div className="col-span-2 aspect-video bg-surface-container rounded-xl overflow-hidden shadow-md group">
            <img 
              alt="Farm Environment" 
              className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-1000 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEq7_cbyR9FDLMGkPAb3w80ipP2arBiCXdlrHy41zD-QrIq19GMJ3Xvyz9ue9QURLILfd3L6OTW_AL-pNkrFGk7XpEjdfVg_Tsr-PCUkA1ggWkEkWOdRajoAipPFfjYiOVd0j2FzKWDAZFmukvJn8JwJYAJq-l0lUYXSz62rZGk-6BVHPD5zFLdzWEEqmzCbBYHGTbmxNYQ_DcubQT5EgO87AE6sTjhI6l5ZAczm6ga3TtMVYgimI_chfChyMHS3eRWpVkY7hqx-4"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Smart Hatching, Simplified.</h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Sere Innovations provides a "Digital Homestead" solution. Our incubators are built to be farmer-friendly, ensuring professional results with a system that is easy to operate.
          </p>
          <motion.ul 
            className="space-y-4"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              "Precision Temperature & Humidity control.",
              "Automatic Egg Turning system.",
              "Affordable setup starting at ₹10,000."
            ].map((text, i) => (
              <motion.li key={i} variants={itemVariants} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="font-bold text-on-surface">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
