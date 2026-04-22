import { motion } from 'framer-motion';

const AudienceCard = ({ icon, title, description, colSpanClass = "" }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    whileHover={{ scale: 1.02 }}
    className={`bg-surface-container-low p-8 rounded-xl flex gap-6 items-start border border-outline/5 transition-transform ${colSpanClass}`}
  >
    <div className="bg-primary text-on-primary p-3 rounded-lg shrink-0">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const TargetAudience = () => {
  const audiences = [
    {
      icon: "agriculture",
      title: "Smallholder Farmers",
      description: "Families looking to grow their flock sustainably and keep more of their earnings."
    },
    {
      icon: "home_work",
      title: "Poultry Farm Owners",
      description: "Established owners seeking to modernize their operations and improve hatch reliability."
    },
    {
      icon: "storefront",
      title: "Agri-Entrepreneurs",
      description: "Starting local hatchery businesses or focused on high-value specialized poultry breeds."
    },
    {
      icon: "person_celebrate",
      title: "Rural Youth",
      description: "Young people exploring new local income opportunities through modern farming technology."
    },
    {
      icon: "rocket_launch",
      title: "Early-Stage Agri-Tech Adopters",
      description: "Innovative farmers eager to lead their communities with the latest in practical rural technology.",
      colSpanClass: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-20" id="audience">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-primary mb-12"
        >
          Who It Is For
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
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
          {audiences.map((audience, index) => (
            <AudienceCard key={index} {...audience} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
