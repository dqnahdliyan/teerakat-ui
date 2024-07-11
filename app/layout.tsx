import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import React from 'react'

const fontSans = localFont({ src: './fonts/GTWalsheimProRegular.woff2', variable: '--font-sans' })
const fontMono = localFont({ src: './fonts/JetBrainsMono-Regular.woff2', variable: '--font-mono' })

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ]
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={cn(
                    'mx-auto min-h-svh scroll-smooth bg-background font-sans antialiased [max-width:1850px]',
                    fontSans.variable,
                    fontMono.variable
                )}
            >
                <Providers>
                    <div className='relative flex min-h-dvh flex-col bg-background'>
                        <Navbar />
                        <main className='flex-1'>{children}</main>
                        <Footer />
                    </div>
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}
