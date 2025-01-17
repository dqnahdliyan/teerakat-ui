'use client'

import { Progress } from '@/components/ui'
import React from 'react'

export default function ProgressDemo() {
    const [value, setValue] = React.useState(1)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return <Progress label='Loading…' value={60} />
}
