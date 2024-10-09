import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { cn } from '@utils/index';

interface AccordionContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AccordionRoot: React.FC<AccordionProps> = ({
  children,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className={` ${cn('space-y-2', className)}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  index,
  className,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionItem must be used within an Accordion');

  const { activeIndex } = context;
  const isActive = index === activeIndex;

  return (
    <div className={`${cn('border rounded-md', className)}`} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (
            typeof child.type === 'function' ||
            typeof child.type === 'string'
          ) {
            return React.cloneElement(child, {
              isActive,
              index,
            } as React.ComponentProps<typeof child.type | any>);
          }
        }
        return child;
      })}
    </div>
  );
};

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  index?: number;
  triggerOpen?: React.ReactNode;
  triggerClose?: React.ReactNode;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  isActive,
  index,
  className,
  triggerOpen,
  triggerClose,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionTrigger must be used within an Accordion');

  const { setActiveIndex } = context;

  const handleClick = () => {
    if (typeof index === 'number') {
      setActiveIndex(isActive ? null : index);
    }
  };

  return (
    <button
      className={`${cn('flex justify-between items-center w-full px-4 text-left', className)}`}
      onClick={handleClick}
      {...props}
    >
      <span>{children}</span>
      <motion.span
        animate={{ rotate: isActive ? 0 : -90 }}
        transition={{ duration: 0.3 }}
      >
        {isActive ? triggerClose : triggerOpen}
      </motion.span>
    </button>
  );
};

interface AccordionContentProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  isActive?: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isActive,
  className,
  ...props
}) => {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`${cn('text-gray-700', className)} `}
          {...props}
        >
          <div className={`p-4 pr-8 `}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;
