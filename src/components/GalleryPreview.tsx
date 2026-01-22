import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

import gallery1 from '/assets/gallery-1.jpg';
import gallery2 from '/assets/gallery-2.jpg';
import galleryMehndi from '/assets/gallery-mehndi.jpg';
import gallerySaree from '/assets/gallery-saree.jpg';
import galleryHair from '/assets/gallery-hair.jpg';
import galleryParty from '/assets/gallery-party.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Bridal makeup transformation', category: 'Bridal' },
  { src: galleryMehndi, alt: 'Intricate bridal mehndi', category: 'Mehndi' },
  { src: gallerySaree, alt: 'Traditional saree draping', category: 'Bridal' },
  { src: gallery2, alt: 'Elegant bridal look', category: 'Bridal' },
  { src: galleryHair, alt: 'Bridal hairstyling', category: 'Hair' },
  { src: galleryParty, alt: 'Glamorous party makeup', category: 'Party' },
];

export function GalleryPreview() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Our Gallery</h2>
          <p className="section-subheading">
            Explore our portfolio of stunning transformations
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="masonry-grid"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="masonry-item group relative overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Gallery Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="group">
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
