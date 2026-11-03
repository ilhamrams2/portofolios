import React from 'react';
import { DesignSectionTip } from '../data/portfolioData';

export function SixStripesMotif({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="block w-[6px] h-[14px] bg-[#D9D9D9] rounded-[1px]"
        />
      ))}
    </div>
  );
}

export function FiveDotsMotif({
  activeIndex = 0,
  onSelect,
  className = '',
}: {
  activeIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Section decorative dots">
      {Array.from({ length: 5 }).map((_, i) => {
        const isActive = onSelect !== undefined && activeIndex === i;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className={`w-[22px] h-[22px] rounded-full transition-all duration-200 ${
              onSelect ? 'cursor-pointer hover:bg-[#BDBDBD]' : 'cursor-default'
            } ${isActive ? 'bg-[#2B2B2B] scale-105' : 'bg-[#D9D9D9]'}`}
            aria-label={`Slide indicator ${i + 1}`}
          />
        );
      })}
    </div>
  );
}

export function SectionEyebrow({
  label,
  title,
  subtitle,
  rightSlot,
}: {
  label: string;
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <div className="inline-flex items-center gap-2.5 mb-2">
          <span className="w-4 h-[4px] rounded-full bg-[#2B2B2B]" />
          <span className="text-xs font-semibold tracking-wide text-[#555555]">
            {label}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight text-[#232323] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2.5 text-sm text-[#6E6E6E] max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
}

export function FigmaBlueprintNote({
  tip,
  visible,
}: {
  tip: DesignSectionTip;
  visible: boolean;
}) {
  if (!visible) return null;

  const isNew = tip.status === 'Rekomendasi Section Baru';

  return (
    <div className="mb-7 rounded-2xl border border-dashed border-[#232323]/25 bg-[#F8F8F8] px-4 py-3.5 sm:px-5 sm:py-4 transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#232323] text-white">
            {tip.order}
          </span>
          <span className="text-xs font-bold text-[#232323]">{tip.name}</span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
            isNew
              ? 'bg-[#232323] text-white'
              : 'bg-[#E5E5E5] text-[#333333]'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isNew ? 'bg-emerald-400' : 'bg-[#555555]'
            }`}
          />
          {tip.status}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-[#555555] leading-relaxed mt-2">
        <div className="bg-white rounded-xl p-2.5 border border-[#ECECEC]">
          <span className="font-semibold text-[#232323] block mb-0.5">
            Kenapa Section Ini Penting:
          </span>
          {tip.whyNeeded}
        </div>
        <div className="bg-white rounded-xl p-2.5 border border-[#ECECEC]">
          <span className="font-semibold text-[#232323] block mb-0.5">
            Tips Desain di Figma:
          </span>
          {tip.figmaTip}
        </div>
      </div>
    </div>
  );
}
