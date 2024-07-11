'use client'

import { NextLogo } from '@/components/logo'
import { Button } from 'ui'

export default function ButtonIconDemo() {
    return (
        <Button>
            <NextLogo className='size-4' />
            Next.Js
        </Button>
    )
}