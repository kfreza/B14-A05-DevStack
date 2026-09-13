type LogoProps = {
  size?: "md" | "sm";
};

const sizes = {
  md: { badge: "size-8 rounded-lg text-sm tracking-[-0.5px]", text: "text-xl leading-7 tracking-[-0.5px]" },
  sm: { badge: "size-6 rounded-md text-xs leading-4", text: "text-lg leading-7" },
};

const Logo = ({ size = "md" }: LogoProps) => {
  const s = sizes[size];

  return (
    <a href="#" className="flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center bg-linear-45 from-[#ec4899] to-[#7c3aed] font-black text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] ${s.badge}`}
      >
        DS
      </span>
      <span className={`font-bold text-heading ${s.text}`}>
        Dev <span className="font-extrabold text-brand">Stack</span>
      </span>
    </a>
  );
};

export default Logo;
