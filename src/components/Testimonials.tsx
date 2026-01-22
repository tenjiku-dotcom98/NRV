import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

import testimonial1 from '/assets/testimonial-1.jpg';
import testimonial2 from '/assets/testimonial-2.jpg';
import testimonial3 from '/assets/testimonial-3.jpg';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride, December 2024',
    image: testimonial1,
    quote: 'NRV made my wedding day absolutely magical. The team understood exactly what I wanted and executed it flawlessly. I felt like the most beautiful bride!',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    role: 'Bride, November 2024',
    image: testimonial2,
    quote: 'From the trial to the wedding day, every experience with NRV was exceptional. The attention to detail and personalized care made all the difference.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    role: 'Bride, October 2024',
    image: testimonial3,
    quote: 'I cannot thank NRV enough for making me feel so special. The bridal package was worth every penny. My photos look stunning!',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-blush overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Real Brides. Real Transformations.</h2>
          <p className="section-subheading">
            Hear from our beautiful brides about their experience with NRV
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Quote className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-serif text-xl font-medium text-secondary">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
