'use client'

import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyButton } from 'ui'
import { copyToClipboard } from 'usemods'

function Code({ lang = 'tsx', code }: { lang?: string; code: string }) {
    const [copied, setCopied] = React.useState<string>('')

    function copyImportsToClipboard(): void {
        const importRegex = /import[\s\S]+?from\s+['"][\s\S]+?['"];?\n*/g
        const _imports = code.match(importRegex) || []
        const imports = _imports.map((importStatement: string) => importStatement.trim()).join('\n')
        copyToClipboard(imports)
            .then(() => {
                setCopied('imports')
                setTimeout(() => setCopied(''), 2000)
            })
            .catch((err: Error) => console.error('Copy failed: ', err))
    }

    return (
        <div className='relative overflow-hidden rounded-lg'>
            <div className={cn('absolute bottom-auto right-4 top-3 z-20 flex gap-1.5')}>
                <CopyRawButton code={code} />
                <CopyButton initialIcon={<Info />} isCopied={copied === 'imports'} onPress={copyImportsToClipboard} />
            </div>
            <div className='not-prose [&_pre]:rounded-0 group relative max-h-96 overflow-y-scroll rounded-lg border border-zinc-800 font-mono text-sm scrollbar-thin scrollbar-track-[#0e0e10] [&_code]:!font-mono [&_pre]:!m-0 [&_pre]:!bg-[#0e0e10] [&_pre]:!p-4 [&_pre]:!font-mono [&_pre_code]:!leading-loose'>
                <SyntaxHighlighter language={lang} style={theme}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export function CopyRawButton({ code }: { className?: string; code: any }) {
    const [copied, setCopied] = React.useState<string>('')
    const copyRaw = () => {
        copyToClipboard(code)
            .then(() => {
                setCopied('raw')
                setTimeout(() => setCopied(''), 2000)
            })
            .catch((err: Error) => {
                console.error('Copy failed: ', err)
            })
    }
    return <CopyButton isCopied={copied === 'raw'} onPress={copyRaw} />
}

export { Code }
