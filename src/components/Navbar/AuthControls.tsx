const AuthControls = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        href="#signin"
        className="text-sm leading-5 font-medium text-muted transition-colors hover:text-brand"
      >
        Sign In
      </a>
      <a
        href="#signup"
        className="btn h-auto min-h-0 rounded-full border-none bg-brand-button px-5 py-2.5 text-sm leading-5 font-semibold text-white shadow-none drop-shadow-[0_1px_1px_var(--color-brand-soft)] hover:bg-brand"
      >
        Sign Up
      </a>
    </div>
  );
};

export default AuthControls;
