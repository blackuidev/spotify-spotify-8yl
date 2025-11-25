import * as React from "react";
import { cn } from "@/components/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassContainer = React.forwardRef<HTMLDivElement, GlassContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassContainer.displayName = "GlassContainer";

export { GlassContainer };
