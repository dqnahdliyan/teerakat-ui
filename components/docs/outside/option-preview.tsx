'use client'

import { cn } from '@/lib/utils'
import React from 'react'

export function OptionPreview({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('absolute left-4 top-4 inline-flex min-w-32 flex-col gap-1', className)} {...props} />
}
