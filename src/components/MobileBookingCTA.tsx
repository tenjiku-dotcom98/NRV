import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';

export function MobileBookingCTA() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-lg border-t border-border lg:hidden"
    >
      <Button
        variant="rose"
        size="lg"
        className="w-full"
        onClick={scrollToContact}
      >
        <Calendar className="w-5 h-5 mr-2" />
        Book Bridal Trial
      </Button>
    </motion.div>
  );
}
