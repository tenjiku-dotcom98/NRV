import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

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
    description: 'Perfect for the bride who wants a natural, elegant look. Our Essence package delivers timeless beauty with premium HD makeup that photographs beautifully.',
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
    description: 'Our most popular package, Luxe offers the complete bridal experience. From trial sessions to the wedding day, we ensure you look stunning at every event.',
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
    description: 'The ultimate bridal experience. Royale covers every aspect of your wedding beauty needs, from pre-wedding skincare to your honeymoon glow.',
  },
];

export default function Packages() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blush">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading mb-4"
          >
            The NRV Experince
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subheading"
          >
            Choose the perfect package for your special day. Each crafted with love and expertise.
          </motion.p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`package-card ${pkg.featured ? 'featured' : ''} relative`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute -top-4 left-8">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Package Info */}
                  <div>
                    <h2 className="font-serif text-4xl font-medium text-secondary mb-2">
                      {pkg.name}
                    </h2>
                    <p className="text-primary font-medium mb-4">{pkg.tagline}</p>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="font-serif text-3xl font-semibold text-secondary">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {pkg.priceNote}
                      </div>
                    </div>

                    <Button
                      variant={pkg.featured ? 'rose' : 'outline'}
                      size="lg"
                      onClick={scrollToContact}
                    >
                      Request Quote
                    </Button>
                  </div>

                  {/* Right: Features */}
                  <div>
                    <h3 className="font-medium text-secondary mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-12 glass-card max-w-2xl mx-auto"
          >
            <h3 className="font-serif text-2xl font-medium text-secondary mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6">
              We understand every bride is unique. Contact us to create a personalized package tailored to your specific needs.
            </p>
            <Button variant="rose" size="lg" onClick={scrollToContact}>
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
