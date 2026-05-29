import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

type PillButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  asChild?: boolean;
};

export const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-bold tracking-tight",
          "transition-[transform,box-shadow,filter] duration-200 ease-out",
          "active:translate-y-px active:scale-[0.985]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          size === "md" ? "h-12 px-7 text-sm" : "h-14 px-10 text-base",
          variant === "primary" && [
            "text-white focus-visible:ring-blue-500/60",
            "bg-[radial-gradient(120%_140%_at_50%_22%,#5a96f5_0%,#3f80ef_42%,#2c66e0_78%,#2257cf_100%)]",
            "shadow-[0_6px_10px_-6px_rgba(255,255,255,0.35)_inset,0_-12px_16px_-8px_rgba(15,45,115,0.55)_inset,0_0_26px_1px_rgba(59,125,242,0.32),0_14px_26px_-10px_rgba(37,102,232,0.5),0_30px_55px_-20px_rgba(20,60,150,0.45)]",
            "hover:-translate-y-0.5 hover:shadow-[0_6px_10px_-6px_rgba(255,255,255,0.4)_inset,0_-12px_16px_-8px_rgba(15,45,115,0.55)_inset,0_0_36px_3px_rgba(59,125,242,0.42),0_20px_34px_-12px_rgba(37,102,232,0.6),0_42px_70px_-22px_rgba(20,60,150,0.5)]",
          ],
          variant === "secondary" && [
            "text-slate-800 focus-visible:ring-slate-400/60",
            "bg-[radial-gradient(120%_140%_at_50%_22%,#ffffff_0%,#f4f8fe_55%,#e6eef9_100%)]",
            "shadow-[0_6px_10px_-6px_rgba(255,255,255,0.9)_inset,0_-12px_16px_-8px_rgba(120,140,180,0.32)_inset,0_12px_24px_-12px_rgba(80,100,140,0.32),0_30px_55px_-22px_rgba(70,90,130,0.35)]",
            "hover:-translate-y-0.5 hover:shadow-[0_6px_10px_-6px_rgba(255,255,255,0.9)_inset,0_-12px_16px_-8px_rgba(120,140,180,0.32)_inset,0_18px_32px_-14px_rgba(80,100,140,0.4),0_40px_66px_-24px_rgba(70,90,130,0.4)]",
          ],
          className,
        )}
        {...props}
      />
    );
  },
);
PillButton.displayName = "PillButton";

export function PrimaryButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <PillButton variant="primary" size="lg" onClick={onClick} className={className}>
      {children}
    </PillButton>
  );
}

export function SecondaryButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <PillButton variant="secondary" size="lg" onClick={onClick} className={className}>
      {children}
    </PillButton>
  );
}
