'use client'

import { GridList } from 'ui'

const frameworks = [
    { id: 'react', name: 'React' },
    { id: 'next', name: 'Next' },
    { id: 'astro', name: 'Astro' },
    { id: 'nuxt', name: 'Nuxt' },
    { id: 'svelte', name: 'Svelte' },
    { id: 'laravel', name: 'Laravel' },
    { id: 'ci', name: 'Codeigniter' }
]
export default function GridListDemo() {
    return (
        <GridList items={frameworks} aria-label='Frameworks' selectionMode='multiple' className='min-w-64'>
            {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
        </GridList>
    )
}
