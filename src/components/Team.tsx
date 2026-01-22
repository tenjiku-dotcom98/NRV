import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

import team1 from '/assets/team-1.jpg';
import team2 from '/assets/team-2.jpg';
import team3 from '/assets/team-3.jpg';

const teamMembers = [
  {
    name: 'Nisha Verma',
    role: 'Founder & Lead Bridal Artist',
    specialty: 'Bridal Makeup & Styling',
    experience: '12+ years',
    image: team1,
  },
  {
    name: 'Riya Kapoor',
    role: 'Senior Hair Stylist',
    specialty: 'Hair Styling & Treatment',
    experience: '8+ years',
    image: team2,
  },
  {
    name: 'Vandana Singh',
    role: 'Mehndi Artist',
    specialty: 'Traditional & Modern Mehndi',
    experience: '10+ years',
    image: team3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Team() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Meet Our Artists</h2>
          <p className="section-subheading">
            Talented professionals dedicated to making you look and feel your best
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-medium text-secondary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {member.specialty}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Book with {member.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
