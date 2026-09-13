import { Fragment } from "react";
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
    <footer className="border-t border-[#f3f4f6] bg-white pt-8.25 pb-12 md:border-slate-100 md:pt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-[11.3px] px-6 md:gap-14 md:px-8">
        <div className="flex flex-col items-center gap-[11.3px] text-center md:grid md:grid-cols-5 md:items-start md:gap-10 md:text-left">
          <div className="flex flex-col items-center gap-[11.3px] md:col-span-2 md:items-start md:gap-3 md:pr-4">
            <Logo size="sm" />
            <p className="max-w-xs font-inter text-xs leading-[19.5px] text-[#6b7280] md:max-w-sm md:font-sans md:text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 pt-1 pb-3 md:pt-3 md:pb-0">
              {socialLinks.map(({ label, href }, i) => (
                <Fragment key={label}>
                  {i > 0 && (
                    <span aria-hidden className="font-inter text-xs leading-4 text-[#4b5563] md:hidden">
                      •
                    </span>
                  )}
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-inter text-xs leading-4 text-[#4b5563] transition-colors hover:text-brand md:font-sans md:font-semibold md:text-body"
                  >
                    {label}
                  </a>
                </Fragment>
              ))}
            </div>
          </div>

          {linkGroups.map(({ title, links }) => (
            <nav key={title} className="hidden flex-col gap-4 md:flex">
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

        <div className="flex items-center justify-between gap-3 border-t border-[#f3f4f6] pt-4 font-inter text-[11px] leading-[16.5px] text-[#9ca3af] md:border-slate-100 md:pt-8 md:font-sans md:text-xs md:leading-4 md:text-slate-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-2 md:gap-6">
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
