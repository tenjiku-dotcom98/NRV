import { motion } from 'framer-motion';
import { MessageCircle, Palette, Heart, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    description: 'Share your vision and discuss your wedding details with our experts',
  },
  {
    icon: Palette,
    title: 'Trial Session',
    description: 'Experience your bridal look and perfect every detail before the big day',
  },
  {
    icon: Heart,
    title: 'Wedding Day',
    description: 'Relax and enjoy as we transform you into the stunning bride you dreamed of',
  },
  {
    icon: Sparkles,
    title: 'Aftercare',
    description: 'Receive personalized skincare tips and maintenance guidance',
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">How We Work</h2>
          <p className="section-subheading">
            A seamless journey from consultation to your perfect wedding day look
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Horizontal Layout */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex-1 flex flex-col items-center text-center px-4"
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="stepper-dot w-16 h-16 text-lg">
                      {index + 1}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-blush flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-medium text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-8 left-[12%] right-[12%] flex items-center -z-10">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 stepper-line" />
              ))}
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Step Indicator */}
                <div className="relative flex-shrink-0">
                  <div className="stepper-dot text-base">{index + 1}</div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-14 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gradient-to-b from-primary to-primary/30" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-xl font-medium text-secondary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
