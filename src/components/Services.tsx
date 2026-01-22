import { motion } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Flower2,
  Scissors,
  Hand,
  Moon,
  Droplets,
  Eye,
  Star,
  Palette,
  Crown,
} from 'lucide-react';

const serviceGroups = [
  {
    title: 'Bridal & Occasion Beauty',
    subtitle: 'Looks crafted for your most special moments',
    services: [
      { icon: Crown, name: 'Bridal Makeup', benefit: 'Your perfect wedding-day look' },
      { icon: Sparkles, name: 'Party Makeup', benefit: 'Stand out at every celebration' },
      { icon: Heart, name: 'Saree Draping', benefit: 'Elegance in every fold' },
      { icon: Palette, name: 'Mehndi', benefit: 'Intricate traditional designs' },
    ],
  },
  {
    title: 'Skin & Hair Care',
    subtitle: 'Nourishing treatments for radiant beauty',
    services: [
      { icon: Flower2, name: 'Facial Treatment', benefit: 'Rejuvenate your natural glow' },
      { icon: Star, name: 'Skincare', benefit: 'Personalized skin solutions' },
      { icon: Scissors, name: 'Hair Treatment', benefit: 'Healthy, stunning hair' },
    ],
  },
  {
    title: 'Hands & Feet Care',
    subtitle: 'Luxury care for a polished finish',
    services: [
      { icon: Hand, name: 'Manicure', benefit: 'Elegant, polished nails' },
      { icon: Moon, name: 'Pedicure', benefit: 'Complete nail luxury' },
    ],
  },
  {
    title: 'Grooming Essentials',
    subtitle: 'Smooth, precise & hygienic grooming',
    services: [
      { icon: Droplets, name: 'Waxing', benefit: 'Smooth, flawless skin' },
      { icon: Eye, name: 'Threading', benefit: 'Perfectly shaped brows' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {serviceGroups.map((group, gIndex) => (
          <section key={gIndex} className="mb-24">

            {/* Group Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="font-serif text-3xl text-secondary mb-3">
                {group.title}
              </h3>
              <p className="text-muted-foreground">
                {group.subtitle}
              </p>
            </motion.div>

           {/* Services Grid */}
           <div className="mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-6 justify-items-center [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
            >
              


              {group.services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="service-card group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blush flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-secondary mb-1">
                        {service.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {service.benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            </div>

          </section>
        ))}

        {/* Quick Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#packages"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
          >
            <span>See Bridal Packages</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
