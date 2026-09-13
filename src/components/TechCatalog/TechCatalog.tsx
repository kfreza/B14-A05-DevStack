import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../../types/technology";
import StackSidebar from "./StackSidebar";
import TechCard from "./TechCard";

const TechCatalog = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data: Technology[]) => setTechnologies(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const addTech = (tech: Technology) => {
    if (stack.some((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const removeTech = (tech: Technology) => {
    setStack(stack.filter((t) => t.id !== tech.id));
    toast.error(`${tech.name} removed from your stack`);
  };

  const clearStack = () => {
    setStack([]);
    toast.error(`All technologies removed from your stack`);
  };

  return (
    <section
      id="technologies"
      className="mx-auto flex max-w-md scroll-mt-14 flex-col gap-5 px-4 pb-28 sm:max-w-7xl sm:gap-10 sm:pt-20 sm:pb-32 md:px-8 lg:scroll-mt-0 lg:pt-28"
    >
      <div className="flex flex-col gap-1 text-center sm:gap-2 sm:text-left">
        <h2 className="font-inter text-2xl leading-8 font-bold tracking-[-0.6px] text-[#111827] sm:text-4xl sm:leading-10 sm:font-extrabold sm:tracking-[-0.9px] sm:text-heading">
          Explore the{" "}
          <span className="text-brand-gradient">
            Technologies
          </span>
        </h2>
        <p className="text-xs leading-4 text-[#6b7280] sm:text-base sm:leading-6 sm:text-slate-500">
          Add the technologies you need to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 sm:gap-8 lg:grid-cols-12">
        <div className="lg:col-span-9">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-24 text-sm text-slate-500">
              <span className="loading loading-spinner loading-lg text-brand" />
              Loading technologies...
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-dashed border-red-200 bg-red-50 p-10 text-center text-sm text-red-600">
              Couldn't load technologies. Please refresh the page.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard key={tech.id} tech={tech} selected={stack.some((t) => t.id === tech.id)} onAdd={addTech} />
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-3 lg:self-stretch">
          <StackSidebar stack={stack} onRemove={removeTech} onClear={clearStack} />
        </div>
      </div>
    </section>
  );
};

export default TechCatalog;
