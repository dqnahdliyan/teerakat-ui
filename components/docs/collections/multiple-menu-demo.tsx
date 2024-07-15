'use client'

import { Button, Menu } from '@/components/ui'
import { Selection } from '@react-types/shared'
import React from 'react'

export default function MultipleMenuDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set(['status']))
    return (
        <Menu>
            <Button aria-labelledby='multiple-menu-trigger' variant='outline'>
                Open
            </Button>
            <Menu.Content
                placement='bottom'
                selectionMode='multiple'
                selectedKeys={selected}
                onSelectionChange={setSelected}
                className='w-56'
                disabledKeys={['activity']}
            >
                <Menu.Section>
                    <Menu.Header separator>Appearance</Menu.Header>
                    <Menu.CheckboxItem id='status'>Status Bar</Menu.CheckboxItem>
                    <Menu.CheckboxItem id='activity'>Activity Bar</Menu.CheckboxItem>
                    <Menu.CheckboxItem id='panel'>Panel</Menu.CheckboxItem>
                </Menu.Section>
            </Menu.Content>
        </Menu>
    )
}
