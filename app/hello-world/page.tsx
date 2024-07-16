'use client'

import { Button } from 'ui'

export default function ButtonVariantDemo() {
    return (
        <>
            <div className='flex flex-col gap-2 md:flex-row md:flex-wrap h-40 w-full items-center justify-center'>
                <Button className='bg-gradient-primary'>Primary</Button>
                <Button>Primary</Button>
                <Button variant='success' className='bg-gradient-success'>
                    Success
                </Button>
                <Button variant='success'>Success</Button>
                <Button variant='danger' className='bg-gradient-danger'>
                    Danger
                </Button>
                <Button variant='danger'>Danger</Button>
                <Button variant='info' className='bg-gradient-info'>
                    Info
                </Button>
                <Button variant='info'>Info</Button>
                <Button variant='warning' className='bg-gradient-warning'>
                    Warning
                </Button>
                <Button variant='warning'>Warning</Button>
            </div>
        </>
    )
}
