import star from "../../assets/star.svg";
import type { BadgeTone, Technology } from "../../data/technologies";

const badgeTones: Record<BadgeTone, string> = {
  sky: "bg-[#f0f9ff] border-[#e0f2fe] text-[#0284c7]",
  emerald: "bg-[#ecfdf5] border-[#d1fae5] text-[#059669]",
  orange: "bg-[#fff7ed] border-[#ffedd5] text-[#ea580c]",
  blue: "bg-[#eff6ff] border-[#dbeafe] text-[#2563eb]",
  red: "bg-[#fef2f2] border-[#fee2e2] text-[#dc2626]",
  amber: "bg-[#fffbeb] border-[#fef3c7] text-[#d97706]",
  cyan: "bg-[#ecfeff] border-[#cffafe] text-[#0891b2]",
};

type TechCardProps = {
  tech: Technology;
  selected: boolean;
  onToggle: (tech: Technology) => void;
};

const TechCard = ({ tech, selected, onToggle }: TechCardProps) => {
  const { name, logo, logoSize = { width: 28, height: 28 }, description, badge, category, level, rating } = tech;

  return (
    <article
      className={`group card flex h-full flex-col justify-between rounded-2xl border bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(219,39,119,0.25)] ${
        selected ? "border-brand" : "border-slate-100 hover:border-brand-soft"
      }`}
    >
      <div className="flex flex-col gap-1.5 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center">
            <div className="flex size-7 items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img src={logo} alt={`${name} logo`} width={logoSize.width} height={logoSize.height} style={logoSize} />
            </div>
          </div>
          {badge && (
            <span className={`rounded-full border px-[11.4px] py-[3px] text-[11.5px] leading-[17.28px] font-semibold ${badgeTones[badge.tone]}`}>
              {badge.label}
            </span>
          )}
        </div>
        <h3 className="pt-1.5 text-lg leading-7 font-bold text-heading transition-colors group-hover:text-brand">{name}</h3>
        <p className="text-xs leading-[19.5px] text-slate-500">{description}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-t border-slate-50 pt-2.25 text-[11px] leading-[16.5px] font-medium">
          <span className="rounded bg-slate-100/80 px-2 py-0.5 text-body">{category}</span>
          <span className="text-slate-500">{level}</span>
          <span className="flex items-center gap-1.25 font-semibold text-muted">
            <img src={star} alt="" className="h-[9px] w-[9.285px]" />
            {rating}
          </span>
        </div>
        <button
          onClick={() => onToggle(tech)}
          className={`btn h-auto min-h-0 w-full rounded-lg border-none py-2.5 text-xs leading-4 font-medium text-white shadow-none ${
            selected ? "bg-brand hover:bg-brand-button" : "bg-[#0a0f1d] hover:bg-slate-800"
          }`}
        >
          {selected ? "Remove from Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechCard;
