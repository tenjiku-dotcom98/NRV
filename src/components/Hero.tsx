import { motion } from 'framer-motion';
import { Award, Sparkles, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import heroBridal from '/assets/hero-bridal.jpg';

const trustItems = [
  { icon: Award, text: 'Experienced Artists' },
  { icon: Sparkles, text: 'Premium Products' },
  { icon: MapPin, text: 'On-site & Studio Services' },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBridal}
          alt="Luxury bridal makeup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground mb-4 tracking-wide"
          >
            <span className="text-stroke">NRV</span>
            <span className="mx-4">—</span>
            <span>House of Beauty</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-light tracking-widest mb-10"
          >
            Bridal • Party • Skincare • Hair • Mehndi
            <span className="block mt-2 text-base md:text-lg tracking-normal opacity-80">
              Signature transformations, handcrafted for you
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="rose"
              size="xl"
              onClick={() => scrollToSection('#contact')}
            >
              Book Bridal Trial
            </Button>
            <Button
              variant="heroGhost"
              size="xl"
              onClick={() => scrollToSection('#gallery')}
            >
              View Gallery
            </Button>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground/80 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
