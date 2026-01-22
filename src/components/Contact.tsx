import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Send,
  Upload,
  Check
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../hooks/use-toast';

const services = [
  'Bridal Makeup',
  'Party Makeup',
  'Mehndi',
  'Hair Styling',
  'Skincare',
  'Saree Draping',
  'Other',
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    message: '',
    whatsappOptIn: false,
  });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
Hello, I would like to book an appointment ✨

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date || 'Not specified'}
Service: ${formData.service}

Message:
${formData.message || 'N/A'}
`;

  const whatsappNumber = '919901749330'; // ← replace with salon number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');

  toast({
    title: 'Redirecting to WhatsApp 📲',
    description: 'Send the message to confirm your booking.',
  });

  setFormData({
    name: '',
    phone: '',
    date: '',
    service: '',
    message: '',
    whatsappOptIn: false,
  });
};
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Book Your Appointment</h2>
          <p className="section-subheading">
            Let's create your perfect look together. Get in touch today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-medium text-secondary mb-6">
                Request a Booking
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <Input
                    type="date"
                    placeholder="Preferred Date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="form-input"
                    required
                  >
                    <option value="">Select Service *</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input min-h-[100px] resize-none"
                  />
                </div>

                

                {/* WhatsApp Opt-in */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="whatsapp"
                    checked={formData.whatsappOptIn}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, whatsappOptIn: checked as boolean })
                    }
                  />
                  <label htmlFor="whatsapp" className="text-sm text-muted-foreground cursor-pointer">
                    Contact me on WhatsApp for faster response
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="rose"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Booking Request
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="font-serif text-2xl font-medium text-secondary mb-6">
                Get in Touch
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us</div>
                    <div className="font-medium">+91 99017 49330</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@nrvbeauty.com"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="font-medium">info.nrventerprises@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Visit Us</div>
                    <div className="font-medium">#45/4, Kachamaranahalli, Kodathi Gate, Bengaluru – 560085</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Working Hours</div>
                    <div className="font-medium">We are open all days :)   9 AM - 9 PM</div>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/glowupbyrohireddy?utm_source=qr&igsh=ZTNod253b2k5Z3pi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Follow Us</div>
                    <div className="font-medium">@glowupbyrohireddy</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
              <div className="glass-card overflow-hidden">
                <div className="h-80 md:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.0863171124693!2d77.733031!3d12.902170999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzA3LjgiTiA3N8KwNDMnNTguOSJF!5e0!3m2!1sen!2sin!4v1769104808860!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
