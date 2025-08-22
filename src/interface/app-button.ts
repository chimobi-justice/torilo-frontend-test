import type { ComponentPropsWithoutRef } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { buttonVariants } from '~/components/ui/button'

export interface AppButtonProps
  extends ComponentPropsWithoutRef<'button'>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
