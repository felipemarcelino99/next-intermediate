import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

function Input({ className, type, icon, ref, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        className={cn(
          "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          icon && "pl-10",
          className,
        )}
        {...props}
      />
      {icon && (
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
          {icon}
        </span>
      )}
    </div>
  );
}

Input.displayName = "Input";

export { Input };
