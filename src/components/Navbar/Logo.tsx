type LogoProps = {
  size?: "md" | "sm" | "xs";
};

const sizes = {
  md: { gap: "gap-2.5", badge: "size-8 rounded-lg text-sm tracking-[-0.5px]", text: "text-xl leading-7 tracking-[-0.5px]" },
  sm: { gap: "gap-2.5", badge: "size-6 rounded-md text-xs leading-4", text: "text-lg leading-7" },
  xs: { gap: "gap-2", badge: "size-6 rounded-[5px] text-[10px] tracking-[-0.5px]", text: "font-inter text-[13px] leading-7 tracking-[-0.45px] whitespace-nowrap" },
};

const Logo = ({ size = "md" }: LogoProps) => {
  const s = sizes[size];

  return (
    <a href="#" className={`flex items-center ${s.gap}`}>
      <span
        className={`flex items-center justify-center bg-brand-gradient font-black text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] ${s.badge}`}
      >
        DS
      </span>
      <span className={`font-bold text-heading ${s.text}`}>
        Dev <span className="text-brand-gradient font-extrabold">Stack</span>
      </span>
    </a>
  );
};

export default Logo;
