import heroStack from "../../assets/hero-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto grid max-w-md grid-cols-1 items-center gap-[11.3px] px-5 pt-8 pb-10 text-center sm:max-w-7xl sm:gap-8 sm:px-4 sm:pt-16 sm:pb-0 md:px-8 lg:grid-cols-12 lg:pt-24 lg:text-left">
      <div className="flex flex-col items-center gap-[11.3px] sm:gap-0 lg:col-span-7 lg:items-start lg:pr-8">
        <h1 className="font-inter text-3xl leading-[37.5px] font-bold tracking-[-0.75px] text-[#030712] sm:pb-6 sm:text-6xl sm:leading-15 sm:font-extrabold sm:tracking-[-1.5px] sm:text-heading">
          Build Your Ideal
          <span className="block bg-linear-to-br from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90% bg-clip-text text-transparent sm:bg-linear-to-r sm:from-[#ff5722] sm:from-0% sm:via-[#d81b7e] sm:via-50% sm:to-[#7c3aed] sm:to-100%">
            Development Stack
          </span>
        </h1>
        <p className="max-w-sm font-inter text-sm leading-[22.75px] text-[#4b5563] sm:max-w-xl sm:pb-10 sm:font-sans sm:text-lg sm:leading-[29.25px] sm:text-body">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put
          together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3 sm:pt-0 lg:justify-start">
          <a
            href="#technologies"
            className="btn h-auto min-h-0 min-w-42 rounded-lg border-none bg-linear-to-r from-[#f97316] to-[#ec4899] px-4 py-3 font-inter text-xs leading-4 font-normal whitespace-nowrap text-white shadow-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] hover:brightness-105 sm:text-sm sm:font-semibold"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="btn h-auto min-h-0 min-w-42.5 rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 font-inter text-xs leading-4 font-normal whitespace-nowrap text-[#374151] shadow-none hover:bg-slate-50 sm:text-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex h-74 items-center justify-center pt-5 sm:h-105 sm:pt-0 lg:col-span-5">
        <div className="relative flex size-66 items-center justify-center sm:size-87.5">
          {/* Mobile: soft pink/purple glow. sm+: white ambient glows. */}
          <div className="absolute inset-0 rounded-full bg-linear-45 from-[#f472b6]/20 to-[#c084fc]/20 blur-[20px] sm:hidden" />
          <div className="absolute -top-6 -left-6 hidden size-56 rounded-full bg-white/25 blur-[32px] sm:block" />
          <div className="absolute -right-6 -bottom-6 hidden size-56 rounded-full bg-white/25 blur-[32px] sm:block" />
          <img
            src={heroStack}
            alt="Stylized multi-layered 3D tech stack illustration"
            className="relative h-74.75 w-81.75 max-w-none object-cover sm:h-80 sm:w-87.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
