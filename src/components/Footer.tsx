import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Heart } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const footerLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/nrvbeauty', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/nrvbeauty', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/nrvbeauty', label: 'YouTube' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-semibold tracking-widest text-primary-foreground">
                NRV
              </span>
              <span className="block text-xs text-primary-foreground/60 tracking-[0.3em] uppercase mt-1">
                House of Beauty
              </span>
            </Link>
            <p className="text-secondary-foreground/70 max-w-md mb-6">
              Premium bridal makeup, party makeup, hair, skincare, mehndi, and saree draping. 
              Creating signature transformations for your most special moments.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-primary-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-medium text-primary-foreground mb-4">
              Stay Updated
            </h4>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              Subscribe for beauty tips, offers & updates
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button variant="rose" size="sm" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © 2024 NRV - House of Beauty. All rights reserved.
            </p>
            <p className="text-secondary-foreground/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-current" /> in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
