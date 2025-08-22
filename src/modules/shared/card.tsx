import type { FunctionComponent } from 'react'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter
} from '~/components/ui/card'

import { cn } from '~/lib/utils'

import type { AppCardProps } from '~/interface/app-card'

export const AppCard: FunctionComponent<AppCardProps> = ({
  title,
  subTitle,
  children,
  className,
  headerClassName,
  footerContent,
  footerClassName,
}) => {
  return (
    <Card className={cn(
      "p-2 gap-0 shadow",
      className
    )}>
      {title && (
        <CardHeader className={cn(
          "p-2",
          headerClassName
        )
        }>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}

      {subTitle && (
        <div>{subTitle}</div>
      )}

      <CardContent className={cn(
        "p-2",
        headerClassName
      )
      }>
        {children}
      </CardContent>

      {footerContent && (
        <CardFooter className={cn(
          "flex-col gap-2",
          footerClassName
        )
        }>
          {footerContent}
        </CardFooter>
      )}
    </Card>
  )
}
