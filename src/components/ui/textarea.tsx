import * as React from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  erro?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, erro, ...props }, ref) => {
    const error_class = erro ? "border-accent-error" : "border-accent";
    return (
      <textarea
        className={cn(
          `flex min-h-[80px] w-full rounded-md border ${error_class} bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
