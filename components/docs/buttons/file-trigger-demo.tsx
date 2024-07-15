'use client'

import { Description, FileTrigger } from '@/components/ui'
import React from 'react'

export default function FileTriggerDemo() {
    const [file, setFile] = React.useState<string[] | null>(null)
    return (
        <>
            <FileTrigger
                onSelect={(e) => {
                    const files = Array.from(e ?? [])
                    const filenames = files.map((file) => file.name)
                    setFile(filenames)
                }}
            />
            {file && <Description>{file}</Description>}
        </>
    )
}
