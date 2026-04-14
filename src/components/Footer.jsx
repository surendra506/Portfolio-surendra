function Footer({ socialLinks }) {
  return (
    <footer className="section-shell pb-10 pt-4">
      <div className="theme-soft-panel rounded-[28px] px-6 py-6 backdrop-blur-xl sm:px-8">
        <div className="theme-muted flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Surendra Pratap Ahirwar. Crafted with React, Tailwind, GSAP, Lenis, and Three.js.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#home" className="transition hover:text-cyan-100 light-mode:hover:text-sky-700">
              Home
            </a>
            <a href="#projects" className="transition hover:text-cyan-100 light-mode:hover:text-sky-700">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-100 light-mode:hover:text-sky-700">
              Contact
            </a>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-cyan-100 light-mode:hover:text-sky-700">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
