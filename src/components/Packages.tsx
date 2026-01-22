import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const packages = [
  {
    name: 'Essence',
    tagline: 'For the minimalist bride',
    price: '₹15,000',
    priceNote: 'starting from',
    features: [
      'Bridal makeup (HD finish)',
      'Hair styling',
      'Pre-wedding consultation',
      'False lashes included',
      'Makeup touch-up kit',
    ],
    featured: false,
  },
  {
    name: 'Luxe',
    tagline: 'Our signature experience',
    price: '₹35,000',
    priceNote: 'starting from',
    features: [
      'Everything in Essence',
      'Airbrush makeup technique',
      'Engagement & reception look',
      'Mehendi for bride',
      'Saree draping',
      'Bridal trial session',
      'On-location services',
    ],
    featured: true,
  },
  {
    name: 'Royale',
    tagline: 'The complete transformation',
    price: '₹65,000',
    priceNote: 'starting from',
    features: [
      'Everything in Luxe',
      'All wedding events covered',
      'Bridal skincare package',
      'Family makeup (4 members)',
      'Dedicated artist for the day',
      'Premium product selection',
      'Post-wedding care kit',
      'Complimentary video shoot look',
    ],
    featured: false,
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

export function Packages() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-blush">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Bridal Packages</h2>
          <p className="section-subheading">
            Choose the perfect package for your special day. Each crafted with love and expertise.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`package-card ${pkg.featured ? 'featured' : ''} relative`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Package Content */}
              <div className="text-center mb-6">
                <h3 className="font-serif text-3xl font-medium text-secondary mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.tagline}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="font-serif text-4xl font-semibold text-secondary">
                  {pkg.price}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {pkg.priceNote}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.featured ? 'rose' : 'outline'}
                size="lg"
                className="w-full"
                onClick={scrollToContact}
              >
                Request Quote
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
