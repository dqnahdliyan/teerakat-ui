'use client'

import { OptionPreview } from '@/components/docs/outside/option-preview'
import React from 'react'
import { Note, Select } from 'ui'

const notes = ['info', 'primary', 'secondary', 'warning', 'danger', 'success', 'outline'].map((n) => ({
    name: n
}))
export default function NoteDemo() {
    const [selected, setSelected] = React.useState<any>('secondary')
    return (
        <>
            <OptionPreview>
                <Select
                    aria-labelledby='Variant'
                    className='[&_button]:h-9'
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    placeholder='Choose an variant'
                    items={notes}
                >
                    {(item) => (
                        <Select.Item id={item.name} textValue={item.name}>
                            {item.name}
                        </Select.Item>
                    )}
                </Select>
            </OptionPreview>
            <Note variant={selected as any}>
                <Note.Title>Note Title</Note.Title>
                <Note.Description>Note Description</Note.Description>
            </Note>
        </>
    )
}
