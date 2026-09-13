export const navItems = [
  { label: "Home", href: "#" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

type NavLinksProps = {
  active?: string;
  className?: string;
};

const NavLinks = ({ active = "Home", className = "" }: NavLinksProps) => {
  return (
    <ul className={className}>
      {navItems.map(({ label, href }) => {
        const isActive = label === active;
        return (
          <li key={label}>
            <a
              href={href}
              className={`text-sm leading-5 transition-colors hover:text-brand ${
                isActive ? "font-semibold text-brand" : "font-medium text-body"
              }`}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
