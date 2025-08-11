import {LuLinkedin, LuGithub, LuMail} from 'react-icons/lu';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wilyde/',
      icon: <LuLinkedin className="size-5" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/TheWilyde',
      icon: <LuGithub className="size-5" />,
    },
    {
      name: 'Email',
      href: 'mailto:thewilyde@gmail.com',
      icon: <LuMail className="size-5" />,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pb-8 sm:flex-row-reverse sm:justify-between">
        <section className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              title={link.name}>
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </a>
          ))}
        </section>

        <section className="mt-8 text-center sm:mt-0 sm:text-left">
          <p className="text-xs text-white/60">
            © {currentYear}{' '}
            <a
              className="text-white/80 hover:text-white transition-colors font-medium"
              href="/">
              wilyde.com
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
