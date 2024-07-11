import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import DataFormSink from './sink/data-form-sink'
import { Hero } from './sink/hero'
import LoginFormSink from './sink/login-form-sink'
import OptionsSink from './sink/options-sink'
import TableSink from './sink/table-sink'
import UserProfileSink from './sink/user-profile-sink'

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
}

export default function Page() {
    return (
        <>
            <Hero />
            <div className='container'>
                <div className='py-16'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
                        <LoginFormSink />
                        <DataFormSink />
                        <UserProfileSink />
                        <div className='lg:col-span-2'>
                            <TableSink />
                        </div>
                        <div className='lg:col-span-1'>
                            <OptionsSink />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
