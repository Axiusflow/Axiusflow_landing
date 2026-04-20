import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background?: ReactNode;
  description: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 lg:auto-rows-[26rem] lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  ...props
}: BentoCardProps) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex min-h-[24rem] flex-col overflow-hidden rounded-lg bg-[#050505]",
        className,
      )}
      {...props}
    >
      {background && <div className="absolute inset-0">{background}</div>}

      <div className="relative z-10 mt-auto p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
          <span className="mr-1.5 font-semibold text-white">{name}.</span>
          {description}
        </p>
      </div>
    </div>
  );
};

export { BentoCard, BentoGrid };
