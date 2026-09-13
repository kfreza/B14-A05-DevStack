import star from "../../assets/star.svg";
import type { BadgeTone, Technology } from "../../data/technologies";

// Mobile: solid tint, no border. sm+: lighter tint with border.
const badgeTones: Record<BadgeTone, string> = {
  sky: "bg-[#e0f2fe] text-[#0369a1] sm:bg-[#f0f9ff] sm:border-[#e0f2fe] sm:text-[#0284c7]",
  emerald: "bg-[#d1fae5] text-[#047857] sm:bg-[#ecfdf5] sm:border-[#d1fae5] sm:text-[#059669]",
  orange: "bg-[#ffedd5] text-[#c2410c] sm:bg-[#fff7ed] sm:border-[#ffedd5] sm:text-[#ea580c]",
  blue: "bg-[#dbeafe] text-[#1d4ed8] sm:bg-[#eff6ff] sm:border-[#dbeafe] sm:text-[#2563eb]",
  red: "bg-[#fee2e2] text-[#b91c1c] sm:bg-[#fef2f2] sm:border-[#fee2e2] sm:text-[#dc2626]",
  amber: "bg-[#fef3c7] text-[#b45309] sm:bg-[#fffbeb] sm:border-[#fef3c7] sm:text-[#d97706]",
  cyan: "bg-[#cffafe] text-[#155e75] sm:bg-[#ecfeff] sm:border-[#cffafe] sm:text-[#0891b2]",
};

type TechCardProps = {
  tech: Technology;
  selected: boolean;
  onToggle: (tech: Technology) => void;
};

const TechCard = ({ tech, selected, onToggle }: TechCardProps) => {
  const { name, logo, logoInset, logoBg, description, badge, category, level, rating } = tech;

  return (
    <article
      className={`group card flex h-full flex-col justify-between gap-[9.3px] rounded-xl border bg-white p-[17px] font-inter shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(219,39,119,0.25)] sm:gap-0 sm:rounded-2xl sm:p-5 sm:font-sans sm:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] ${
        selected ? "border-brand" : "border-[#f3f4f6] hover:border-brand-soft sm:border-slate-100"
      }`}
    >
      <div className="flex flex-col gap-[9.3px] sm:gap-1.5 sm:pb-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <div
            className="col-start-1 row-start-1 flex size-10 items-center justify-center rounded-lg sm:bg-transparent!"
            style={{ backgroundColor: logoBg }}
          >
            <div className="flex size-6 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:size-7">
              <img
                src={logo}
                alt={`${name} logo`}
                style={{ width: logoInset?.width ?? "100%", height: logoInset?.height ?? "100%" }}
              />
            </div>
          </div>
          <h3 className="col-start-2 row-start-1 text-base leading-5 font-bold text-[#111827] transition-colors group-hover:text-brand sm:col-span-2 sm:col-start-1 sm:row-start-2 sm:pt-3 sm:text-lg sm:leading-7 sm:text-heading">
            {name}
          </h3>
          {badge && (
            <span
              className={`col-start-3 row-start-1 self-start justify-self-end rounded-full px-2 py-0.5 text-[10.4px] leading-[15.6px] font-bold tracking-[0.208px] sm:col-start-2 sm:border sm:px-[11.4px] sm:py-[3px] sm:text-[11.5px] sm:leading-[17.28px] sm:font-semibold sm:tracking-normal ${badgeTones[badge.tone]}`}
            >
              {badge.label}
            </span>
          )}
        </div>
        <p className="text-xs leading-[19.5px] text-[#4b5563] sm:text-slate-500">{description}</p>
      </div>

      <div className="flex flex-col gap-[9.3px] sm:gap-4">
        <div className="flex items-center justify-between border-t border-[#f9fafb] pt-[13.7px] text-[11px] leading-[16.5px] sm:border-slate-50 sm:pt-2.25 sm:font-medium">
          <span className="rounded bg-[#f3f4f6] px-2 py-0.5 text-[#4b5563] sm:bg-slate-100/80 sm:text-body">{category}</span>
          <span className="text-[#6b7280] sm:text-slate-500">{level}</span>
          <span className="flex items-center gap-1 text-[#f59e0b] sm:gap-1.25 sm:font-semibold sm:text-muted">
            <span className="sm:hidden">★</span>
            <img src={star} alt="" className="hidden h-[9px] w-[9.285px] sm:block" />
            {rating}
          </span>
        </div>
        <button
          onClick={() => onToggle(tech)}
          className={`btn h-auto min-h-0 w-full rounded-lg border-none py-2.5 text-xs leading-4 font-normal text-white shadow-none sm:font-medium ${
            selected ? "bg-brand hover:bg-brand-button" : "bg-[#111827] hover:bg-slate-800 sm:bg-[#0a0f1d]"
          }`}
        >
          {selected ? "Remove from Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechCard;
