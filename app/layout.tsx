import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// Font setup
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

// SEO & Metadata
export const metadata: Metadata = {
    title: 'CodeKeep – Keep Your Snippets Safe',
    description:
        'CodeKeep is a SaaS app for developers to store, organize, and access code snippets anytime. Save up to 20 snippets free, or go Pro for unlimited snippets and team sharing.',
    keywords: [
        'CodeKeep',
        'code snippets',
        'snippet manager',
        'developer tools',
        'SaaS',
        'Next.js',
        'syntax highlighting',
    ],
    authors: [{ name: 'CodeKeep Team' }],
    creator: 'CodeKeep',
    openGraph: {
        title: 'CodeKeep – Keep Your Snippets Safe',
        description:
            'A powerful code snippet manager built for developers. Save, organize, and share snippets with ease.',
        url: 'https://codekeep.app',
        siteName: 'CodeKeep',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'CodeKeep – Your Snippet Manager',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CodeKeep – Keep Your Snippets Safe',
        description:
            'A SaaS app to save, organize, and share code snippets. Free tier available!',
        // creator: '@yourtwitterhandle',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
