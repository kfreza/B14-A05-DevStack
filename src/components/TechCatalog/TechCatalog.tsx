import { useState } from "react";
import { toast } from "react-toastify";
import { technologies, type Technology } from "../../data/technologies";
import StackSidebar from "./StackSidebar";
import TechCard from "./TechCard";

const TechCatalog = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  // One technology per category: adding replaces any existing pick in the same category.
  const toggleTech = (tech: Technology) => {
    if (stack.some((t) => t.id === tech.id)) {
      setStack(stack.filter((t) => t.id !== tech.id));
      toast.error(`${tech.name} removed from your stack`);
      return;
    }

    const replaced = stack.find((t) => t.category === tech.category);
    setStack([...stack.filter((t) => t.category !== tech.category), tech]);
    if (replaced) {
      toast.warning(`${replaced.name} replaced with ${tech.name} (${tech.category})`);
    } else {
      toast.success(`${tech.name} added to your stack`);
    }
  };

  const clearStack = () => {
    setStack([]);
    toast.error(`All technologies removed from your stack`);
  };

  return (
    <section
      id="technologies"
      className="mx-auto flex max-w-md scroll-mt-14 flex-col gap-5 px-4 lg:scroll-mt-0 pb-28 sm:max-w-7xl sm:gap-10 sm:pt-20 sm:pb-32 md:px-8 lg:pt-28"
    >
      <div className="flex flex-col gap-1 text-center sm:gap-2 sm:text-left">
        <h2 className="font-inter text-2xl leading-8 font-bold tracking-[-0.6px] text-[#111827] sm:text-4xl sm:leading-10 sm:font-extrabold sm:tracking-[-0.9px] sm:text-heading">
          Explore the{" "}
          <span className="bg-linear-to-br from-[#ff5722] from-15% via-[#e91e63] via-55% to-[#9c27b0] to-90% bg-clip-text text-transparent sm:bg-linear-to-r sm:from-[#ec4899] sm:from-0% sm:via-[#be5bf0] sm:via-50% sm:to-[#8b5cf6] sm:to-100%">
            Technologies
          </span>
        </h2>
        <p className="text-xs leading-4 text-[#6b7280] sm:text-base sm:leading-6 sm:text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 sm:gap-8 lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:col-span-9 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard key={tech.id} tech={tech} selected={stack.some((t) => t.id === tech.id)} onToggle={toggleTech} />
          ))}
        </div>
        <div className="lg:col-span-3 lg:self-stretch">
          <StackSidebar stack={stack} onRemove={toggleTech} onClear={clearStack} />
        </div>
      </div>
    </section>
  );
};

export default TechCatalog;
