// Accordion component based on AlignUI Accordion v0.0.0

'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Add01Icon, Remove01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';

import { cn } from '@/lib/utils';
import type { PolymorphicComponentProps } from '@/lib/polymorphic';

const ACCORDION_ITEM_NAME = 'AccordionItem';
const ACCORDION_ICON_NAME = 'AccordionIcon';
const ACCORDION_ARROW_NAME = 'AccordionArrow';
const ACCORDION_TRIGGER_NAME = 'AccordionTrigger';
const ACCORDION_CONTENT_NAME = 'AccordionContent';

const AccordionRoot = AccordionPrimitive.Root;
const AccordionHeader = AccordionPrimitive.Header;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Item
      ref={forwardedRef}
      className={cn(
        // base
        'group/accordion',
        'rounded-xl af-surface-bg p-4 ring-1 ring-inset ring-border',
        'transition duration-200 ease-out',
        // hover
        'hover:af-surface-muted-bg hover:ring-transparent',
        // has-focus-visible
        'has-[:focus-visible]:af-surface-muted-bg has-[:focus-visible]:ring-transparent',
        // open
        'data-[state=open]:af-surface-muted-bg data-[state=open]:ring-transparent',
        className,
      )}
      {...rest}
    />
  );
});
AccordionItem.displayName = ACCORDION_ITEM_NAME;

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Trigger
      ref={forwardedRef}
      className={cn(
        // base
        'w-full text-left text-[15px] font-medium af-text-primary',
        'flex items-center justify-between gap-3',
        'outline-none cursor-pointer',
        // focus
        'focus:outline-none',
        className,
      )}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Trigger>
  );
});
AccordionTrigger.displayName = ACCORDION_TRIGGER_NAME;

function AccordionIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || 'div';

  return (
    <Component
      className={cn('size-5 af-text-secondary', className)}
      {...rest}
    />
  );
}
AccordionIcon.displayName = ACCORDION_ICON_NAME;

type AccordionArrowProps = Omit<
  React.ComponentPropsWithoutRef<typeof HugeiconsIcon>,
  'icon' | 'altIcon'
> & {
  openIcon?: IconSvgElement;
  closeIcon?: IconSvgElement;
};

// open/close
function AccordionArrow({
  className,
  openIcon: OpenIcon = Add01Icon,
  closeIcon: CloseIcon = Remove01Icon,
  ...rest
}: AccordionArrowProps) {
  return (
    <>
      <HugeiconsIcon
        icon={OpenIcon}
        className={cn(
          'size-5 af-text-secondary',
          'transition duration-200 ease-out',
          // hover
          'group-hover/accordion:af-text-primary',
          // open
          'group-data-[state=open]/accordion:hidden',
          className,
        )}
        {...rest}
      />
      <HugeiconsIcon
        icon={CloseIcon}
        className={cn(
          'size-5 af-text-primary',
          // close
          'hidden group-data-[state=open]/accordion:block',
          className,
        )}
        {...rest}
      />
    </>
  );
}
AccordionArrow.displayName = ACCORDION_ARROW_NAME;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Content
      ref={forwardedRef}
      className='overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      {...rest}
    >
      <div
        className={cn('pt-3 text-[14px] leading-relaxed af-text-secondary', className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = ACCORDION_CONTENT_NAME;

export {
  AccordionRoot as Root,
  AccordionHeader as Header,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionIcon as Icon,
  AccordionArrow as Arrow,
  AccordionContent as Content,
};
