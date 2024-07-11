'use client'

import { NextLogo } from '@/components/logo'
import { Button } from 'ui'

export default function ButtonOnlyIconDemo() {
    return (
        <Button size='icon'>
            <NextLogo className='size-4' />
        </Button>
    )
}
