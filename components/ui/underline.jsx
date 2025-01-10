import React from 'react';
import { cn } from '@/lib/utils';

const UnderLine = React.forwardRef(
  ({ className, children, underLineColor = 'primary' }, ref) => {
    return (
      <span className={cn('relative group', className)} ref={ref}>
        {children}
        <span
          className={`absolute left-1/2 bottom-0 h-[2px] w-0 bg-${underLineColor} transition-all duration-300 group-hover:w-full group-hover:left-0`}
        ></span>
      </span>
    );
  }
);

export default UnderLine;
