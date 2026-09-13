const AuthControls = () => {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap lg:gap-5">
      <a
        href="#signin"
        className="font-inter text-[11px] leading-4 font-bold text-[#4b5563] transition-colors hover:text-brand lg:font-sans lg:text-sm lg:leading-5 lg:font-medium lg:text-muted"
      >
        Sign In
      </a>
      <a
        href="#signup"
        className="btn h-auto min-h-0 rounded-full border-none bg-brand-gradient px-3 py-1 text-[11px] leading-4 font-semibold text-white shadow-none drop-shadow-[0_1px_1px_var(--color-brand-soft)] hover:brightness-105 lg:px-5 lg:py-2.5 lg:text-sm lg:leading-5"
      >
        Sign Up
      </a>
    </div>
  );
};

export default AuthControls;
