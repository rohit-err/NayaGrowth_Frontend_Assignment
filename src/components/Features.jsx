import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, scale: 0.9, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
    }}
    whileHover={{ 
      y: -8, 
      backgroundColor: 'rgba(255,255,255,0.12)',
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
    }}
    className="bg-white/5 p-8 rounded-xl border border-white/10 transition-all duration-300 relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <motion.span 
      className="material-symbols-outlined text-secondary-container text-4xl mb-4 relative z-10 block"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
    </motion.span>
    <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
    <p className="text-primary-container text-sm leading-relaxed relative z-10">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: "touch_app",
      title: "Easy to Use",
      description: "Simplified interface that requires no technical expertise to operate daily."
    },
    {
      icon: "thermostat",
      title: "Temperature Control",
      description: "Precision heating elements maintain the exact environment needed for development."
    },
    {
      icon: "humidity_mid",
      title: "Humidity Control",
      description: "Integrated sensors and management to prevent egg dehydration or moisture issues."
    },
    {
      icon: "autorenew",
      title: "Automatic Egg Turning",
      description: "Mechanical turning mimics natural nesting cycles without manual intervention."
    },
    {
      icon: "payments",
      title: "Affordable Setup",
      description: "A professional-grade solution available for a low entry price of ₹10,000."
    },
    {
      icon: "agriculture",
      title: "Farmer-Friendly Design",
      description: "Rugged build quality meant to withstand the dust and conditions of a working coop."
    }
  ];

  return (
    <section className="py-20 bg-primary text-on-primary" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-4">Full-Feature Smart Incubation</h2>
          <p className="text-primary-container max-w-xl mx-auto opacity-90">
            Every feature is designed for reliability and ease of use in real farm environments.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
