import {motion} from 'framer-motion';
import {useState} from 'react';
import ProfileImage from '../assets/ProfilePhoto.webp';
import {
  LuArrowDownRight,
  LuFileDown,
  LuLinkedin,
  LuGithub,
  LuMail,
} from 'react-icons/lu';

const Hero = () => {
  return (
    <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
      <img
        alt="Photo of Muhammad Abdul Rehman Khan"
        width="175"
        height="175"
        fetchPriority="high"
        className="rounded-lg"
        src={ProfileImage}
      />
      <div className="flex max-w-[320px] flex-col sm:max-w-full">
        <h1 className="text-balance text-4xl sm:text-5xl font-bold text-white ">
          I'm Abdul Rehman
        </h1>
        <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base text-white/90">
          Software Engineer from Pakistan 🇵🇰
        </p>
        <p className="mt-4 max-w-sm text-balance text-sm sm:text-base text-white/90">
          Full-stack developer passionate about creating innovative solutions
          and beautiful user experiences.
        </p>
        <div>
          <p className="text-balance text-sm font-semibold sm:text-base text-white inline-flex items-center gap-1 mt-6 ">
            Let's connect and build something amazing
          </p>
          <LuArrowDownRight className="hidden sm:inline text-white text-xl" />
        </div>

        <SocialLinks />
      </div>
    </section>
  );
};

const SocialLinks = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wilyde/',
      icon: <LuLinkedin className="text-xl" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/TheWilyde',
      icon: <LuGithub className="text-xl" />,
    },
    {
      name: 'Email',
      href: 'mailto:thewilyde@gmail.com',
      icon: <LuMail className="text-xl" />,
    },
  ];

  return (
    <section className="mt-6 flex flex-wrap items-center gap-6 min">
      <motion.a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center gap-2 rounded-md border border-[#a2f778] bg-[#a2f778] px-4 py-2 text-sm font-medium text-black overflow-hidden"
        whileHover="hover"
        initial="initial"
        variants={{
          initial: {},
          hover: {},
        }}>
        <motion.div
          className="absolute inset-0 bg-white"
          variants={{
            initial: {x: '-100%'},
            hover: {x: '0%'},
          }}
          transition={{duration: 0.3, ease: 'easeInOut'}}
        />
        <span className="relative z-10">Resume</span>
        <LuFileDown className="text-lg relative z-10" />
      </motion.a>

      <div className="flex min-w-24 justify-between">
        {socialLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              hovered === null
                ? 'text-white'
                : hovered === idx
                  ? 'text-white'
                  : 'text-white/40'
            }`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            title={link.name}>
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
