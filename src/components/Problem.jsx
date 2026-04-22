import { motion } from 'framer-motion';

const Problem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } },
  };

  const cards = [
    {
      icon: "link_off",
      title: "Hatchery Dependency",
      description: "Waiting for external hatcheries means you lose control over your production timing and chick quality."
    },
    {
      icon: "payments",
      title: "High Initial Costs",
      description: "Most smart incubators are expensive imports. Small farmers often can't afford the tech needed for success."
    },
    {
      icon: "warning",
      title: "Loss of Control",
      description: "Small profit margins disappear when you cannot guarantee the health and timing of your own flock's birth."
    }
  ];

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-extrabold text-primary mb-4">The Challenge for Small Farmers</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg">
            Current poultry systems are built for big companies, leaving small farmers with high costs and low control.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-brand border border-outline/10 shadow-sm transition-all group"
            >
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.1, rotate: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {card.icon}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
