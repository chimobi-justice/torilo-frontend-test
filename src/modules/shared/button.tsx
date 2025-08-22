import { forwardRef } from 'react'

import { Button } from '~/components/ui/button'

import { cn } from '~/lib/utils'

import type { AppButtonProps } from '~/interface/app-button'

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button
        className={cn("cursor-pointer", className)}
        variant={variant}
        size={size}
        asChild={asChild}
        ref={ref}
        {...props}
      />
    );
  }
);

AppButton.displayName = 'AppButton';

export { AppButton };