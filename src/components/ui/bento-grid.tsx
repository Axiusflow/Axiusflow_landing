import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full gap-5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  description,
  className,
  children,
  ...props
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-[#F5F5F5] dark:bg-white/5",
        className
      )}
      {...props}
    >
      {/* Visual Content Area */}
      <div className="relative flex-1 min-h-[280px] flex items-center justify-center p-6 overflow-hidden">
        {children}
      </div>

      {/* Text Content */}
      <div className="p-5 pt-0">
        <h3 className="text-lg font-semibold tracking-tight af-text-primary">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed af-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export { BentoCard, BentoGrid };
