import heroStack from "../../assets/hero-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-16 md:px-8 lg:grid-cols-12 lg:pt-24">
      <div className="lg:col-span-7 lg:pr-8">
        <h1 className="pb-6 font-inter text-4xl leading-tight font-extrabold tracking-[-1.5px] text-heading sm:text-6xl sm:leading-15">
          Build Your Ideal
          <span className="block bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="max-w-xl pb-10 text-lg leading-[29.25px] text-body">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put
          together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#technologies"
            className="btn h-auto min-h-0 w-42 rounded-lg border-none bg-linear-to-r from-[#f97316] to-[#ec4899] px-4 py-3 font-inter text-sm leading-4 font-semibold text-white shadow-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] hover:brightness-105"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="btn h-auto min-h-0 w-42.5 rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 font-inter text-sm leading-4 font-normal text-[#374151] shadow-none hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex h-105 items-center justify-center lg:col-span-5">
        <div className="relative flex size-87.5 items-center justify-center">
          <div className="absolute -top-6 -left-6 size-56 rounded-full bg-white/25 blur-[32px]" />
          <div className="absolute -right-6 -bottom-6 size-56 rounded-full bg-white/25 blur-[32px]" />
          <img src={heroStack} alt="Stylized multi-layered 3D tech stack illustration" className="relative h-80 w-87.5 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
