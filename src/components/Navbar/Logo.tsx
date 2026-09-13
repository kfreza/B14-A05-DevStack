const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-lg bg-linear-45 from-[#ec4899] to-[#7c3aed] text-sm font-black tracking-[-0.5px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
        DS
      </span>
      <span className="text-xl leading-7 font-bold tracking-[-0.5px] text-heading">
        Dev <span className="font-extrabold text-brand">Stack</span>
      </span>
    </a>
  );
};

export default Logo;
