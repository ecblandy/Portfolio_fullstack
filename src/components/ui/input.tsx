import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  erro?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, erro, ...props }, ref) => {
    const error_class = erro ? "border-accent-error" : "border-accent";
    return (
      <input
        type={type}
        className={cn(
          `flex h-[48px] rounded-md border  ${error_class} font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
