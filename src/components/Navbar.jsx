import {useState} from 'react';
import {motion} from 'framer-motion';

const navLinks = [
  {label: 'Home', href: '/'},
  {label: 'Projects', href: '/projects'},
  {label: 'Contact', href: 'mailto:thewilyde@gmail.com'},
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className="flex items-center justify-start">
          <ul className="flex gap-4 sm:gap-8">
            {navLinks.map((link, idx) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  className="text-sm font-medium"
                  animate={{
                    color:
                      hovered === null
                        ? 'rgb(255, 255, 255)'
                        : hovered === idx
                        ? 'rgb(255, 255, 255)'
                        : 'rgba(255, 255, 255, 0.4)',
                  }}
                  transition={{duration: 0.2, ease: 'easeInOut'}}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}>
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
