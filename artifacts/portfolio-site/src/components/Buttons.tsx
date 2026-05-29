import * as React from "react";

export function PrimaryButton({
  children,
  onClick,
  className,
  type,
  "data-testid": testId,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  "data-testid"?: string;
}) {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      data-testid={testId}
      className={`btn-capsule btn-3d-primary ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  className,
  type,
  "data-testid": testId,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  "data-testid"?: string;
}) {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      data-testid={testId}
      className={`btn-capsule btn-3d-secondary ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

/** Named alias used by ContactSection */
export const PillButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    size?: "md" | "lg";
    asChild?: boolean;
  }
>(({ variant = "primary", className, children, ...props }, ref) => {
  const cls =
    variant === "primary"
      ? `btn-capsule btn-3d-primary ${className ?? ""}`
      : `btn-capsule btn-3d-secondary ${className ?? ""}`;
  return (
    <button ref={ref} className={cls} {...props}>
      {children}
    </button>
  );
});
PillButton.displayName = "PillButton";
