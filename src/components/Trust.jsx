import { motion } from 'framer-motion';

const Trust = () => {
  return (
    <section className="py-20 bg-surface-container-high border-y border-outline/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold text-primary mb-6">Built From Real Needs</h2>
          <blockquote className="text-xl italic text-on-surface-variant mb-8 font-medium">
            "We didn't build this in a city office. We spent months in coops, watching how power cuts and monsoon moisture affect real hatches."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">S</div>
            <div>
              <p className="font-bold text-primary">Sere Design Team</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Field-Grounded Research</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-xl shadow-lg rotate-2 origin-bottom-right"
          >
            <img 
              alt="Field Testing" 
              className="rounded-lg w-full h-72 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCupMaqKWQ3EmULHKvXiiohiZkz8o1p2q_AgqY8VCTdOLR480B4bH3NeMhXGDFtq1T04VNlg6OcGnA6thD1Dqg-uNOtvE_C66kkMC2SEh9I-1FRtxzH0lEmv_NkQNXSBrQlWkLiAbF5T0Evx5laRiyptrsO_abdm57k_5gVA3Cl5K1LoX6jup_sOqD8szdQz4luXhXC2S6HBcf4RJ1Qjfh006fq0VfoOqyo_8_p2lb9gvtC-m18IWMwpKCtOGcZsJi9R9zz3Cp3FnA"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-4 -left-4 bg-secondary p-6 rounded-lg text-on-secondary shadow-xl max-w-[200px]"
          >
            <p className="text-xl font-extrabold mb-1">Community Driven</p>
            <p className="text-xs font-bold leading-tight">Designed alongside the farmers who use our technology every day.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
