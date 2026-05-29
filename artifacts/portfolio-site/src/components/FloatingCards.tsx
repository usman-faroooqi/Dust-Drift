import { cn } from "@/lib/utils";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";

const softShadow =
  "shadow-[0_10px_25px_-8px_rgba(20,30,60,0.12),0_30px_60px_-18px_rgba(20,30,60,0.18)]";

type FloatProps = { px?: number; py?: number };

export function FloatingCards({ px = 0, py = 0 }: FloatProps) {
  return (
    <div className="pointer-events-none relative hidden h-[460px] w-[34rem] max-w-full md:block">
      {/* Back card — revenue */}
      <FloatCard depth={6} px={px} py={py} rot={-7} float={-12} delay={120} className="left-0 top-16 w-64">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
              <TrendingUp className="size-4" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Revenue</p>
              <p className="text-sm font-semibold text-slate-800">$48,920</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
            +12.4%
          </span>
        </div>
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-200 to-blue-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </FloatCard>

      {/* Front / hero card — performance */}
      <FloatCard depth={16} px={px} py={py} rot={4} float={-18} delay={0} className="right-0 top-0 w-72">
        <div className="flex items-center justify-between">
          <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white shadow-[0_6px_14px_-4px_rgba(31,99,230,0.6)]">
            <Zap className="size-4" />
          </span>
          <ArrowUpRight className="size-4 text-slate-300" />
        </div>
        <p className="mt-4 text-sm font-semibold text-slate-800">Performance score</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">98.2</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <span className="block h-full w-[92%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
        </div>
      </FloatCard>

      {/* Small chip — members */}
      <FloatCard depth={24} px={px} py={py} rot={-3} float={-22} delay={240} className="bottom-0 left-16 w-52">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-slate-900 text-white">
            <Users className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-800">2,481</p>
            <p className="text-xs text-slate-400">Active members</p>
          </div>
        </div>
      </FloatCard>
    </div>
  );
}

function FloatCard({
  children,
  className,
  depth,
  px = 0,
  py = 0,
  rot,
  float: floatY,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  depth: number;
  px?: number;
  py?: number;
  rot: number;
  float: number;
  delay: number;
}) {
  return (
    <div
      className={cn("absolute", className)}
      style={{
        translate: `${px * depth}px ${py * depth}px`,
        transition: "translate 700ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div
        data-float-card
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/60 bg-white/55 p-5 backdrop-blur-xl backdrop-saturate-150",
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent",
          softShadow,
        )}
        style={
          {
            animation: `cardRise 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both, cardFloat 9s ease-in-out ${delay + 900}ms infinite`,
            "--c-rot": `${rot}deg`,
            "--c-float": `${floatY}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
