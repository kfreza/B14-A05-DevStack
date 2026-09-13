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
      toast.info(`${tech.name} removed from your stack`);
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

  return (
    <section id="technologies" className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pt-20 pb-32 md:px-8 lg:pt-28">
      <div className="flex flex-col gap-2">
        <h2 className="font-inter text-3xl leading-10 font-extrabold tracking-[-0.9px] text-heading sm:text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-base leading-6 text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard key={tech.id} tech={tech} selected={stack.some((t) => t.id === tech.id)} onToggle={toggleTech} />
          ))}
        </div>
        <div className="lg:col-span-3 lg:self-stretch">
          <StackSidebar stack={stack} onRemove={toggleTech} />
        </div>
      </div>
    </section>
  );
};

export default TechCatalog;
