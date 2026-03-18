import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

