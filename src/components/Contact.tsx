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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Booking Request Sent! ✨",
      description: "Thanks! We'll confirm your booking within 24 hours.",
    });

    setFormData({
      name: '',
      phone: '',
      date: '',
      service: '',
      message: '',
      whatsappOptIn: false,
    });
    setIsSubmitting(false);
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

                {/* File Upload */}
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Upload reference photos (optional)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG up to 5MB
                  </p>
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
                    <div className="font-medium">+91 98765 43210</div>
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
                    <div className="font-medium">hello@nrvbeauty.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Visit Us</div>
                    <div className="font-medium">123 Beauty Lane, Mumbai 400001</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Working Hours</div>
                    <div className="font-medium">Tue - Sun: 10 AM - 8 PM</div>
                  </div>
                </div>

                <a
                  href="https://instagram.com/nrvbeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Follow Us</div>
                    <div className="font-medium">@nrvbeauty</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map will be displayed here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Beauty Lane, Mumbai 400001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
