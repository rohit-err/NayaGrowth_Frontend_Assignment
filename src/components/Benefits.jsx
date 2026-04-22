import { motion } from 'framer-motion';

const BenefitItem = ({ title, description }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
    }}
    whileHover={{ x: 5 }}
    className="space-y-4 group"
  >
    <motion.div 
      className="w-12 h-1.5 bg-secondary rounded-full transform origin-left"
      whileHover={{ scaleX: 1.5 }}
      transition={{ type: "spring", stiffness: 300 }}
    ></motion.div>
    <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{title}</h3>
    <p className="text-on-surface-variant leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Benefits = () => {
  const benefits = [
    {
      title: "Full Control",
      description: "Directly manage the health, quality, and quantity of your chicks without outside interference."
    },
    {
      title: "Independence",
      description: "Eliminate dependency on external hatchery schedules and supply chain delays."
    },
    {
      title: "Cost Efficiency",
      description: "Drastically lower the price per chick by bringing the hatching process in-house."
    },
    {
      title: "Simpler Operations",
      description: "Automated features handle the technical work so you can focus on bird health."
    },
    {
      title: "Confidence & Income",
      description: "Grow your business with the potential to sell surplus chicks to neighboring farms."
    }
  ];

  return (
    <section className="py-24 bg-surface" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-primary mb-16 text-center"
        >
          Benefits of Owning Your Hatchery
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
