import Logo from "../Navbar/Logo";

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-3 md:pr-4">
            <Logo size="sm" />
            <p className="max-w-sm text-xs leading-[19.5px] text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 pt-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs leading-4 font-semibold text-body transition-colors hover:text-brand"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map(({ title, links }) => (
            <nav key={title} className="flex flex-col gap-4">
              <h4 className="text-xs leading-4 font-bold tracking-[0.6px] text-heading uppercase">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-xs leading-4 text-slate-500 transition-colors hover:text-brand">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 text-xs leading-4 text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition-colors hover:text-brand">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-brand">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
