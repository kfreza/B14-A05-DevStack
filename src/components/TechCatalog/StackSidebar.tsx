import { HiXMark } from "react-icons/hi2";
import type { Technology } from "../../data/technologies";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (tech: Technology) => void;
  onClear: () => void;
};

const StackSidebar = ({ stack, onRemove, onClear }: StackSidebarProps) => {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
        <h3 className="text-base leading-6 font-bold text-heading">Your Stack</h3>
        <p className="pb-3 text-xs leading-4 text-slate-400">
          {stack.length ? `${stack.length} technolog${stack.length === 1 ? "y" : "ies"} selected.` : "No technologies selected yet."}
        </p>

        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs leading-4 text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {stack.map((tech) => (
              <li key={tech.id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-2">
                <div className="flex size-6 items-center justify-center">
                  <img src={tech.logo} alt="" className="max-h-6 max-w-6 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-5 font-semibold text-heading">{tech.name}</p>
                  <p className="text-[11px] leading-4 text-slate-500">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech)}
                  className="btn btn-ghost btn-xs btn-square text-slate-400 hover:text-brand"
                  aria-label={`Remove ${tech.name}`}
                >
                  <HiXMark className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {stack.length > 0 && (
          <button
            onClick={onClear}
            className="btn mt-8 h-auto min-h-0 w-full rounded-lg border border-[#fecaca] bg-white py-2.5 text-sm leading-5 font-bold text-[#dc2626] shadow-none hover:border-[#fca5a5] hover:bg-[#fef2f2]"
          >
            Remove All
          </button>
        )}
      </div>
    </aside>
  );
};

export default StackSidebar;
