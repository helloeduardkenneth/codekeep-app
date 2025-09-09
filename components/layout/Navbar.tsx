import { Button } from '@/components/ui/button'
import { Code2 } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className='border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo */}
                    <div className='flex items-center space-x-2'>
                        <Code2 className='text-primary h-8 w-8' />
                        <span className='text-xl font-semibold'>CodeKeep</span>
                    </div>

                    {/* Navigation Links */}
                    <div className='hidden md:block'>
                        <div className='flex items-center space-x-8'>
                            <a
                                href='#home'
                                className='text-foreground/80 hover:text-foreground transition-colors'
                            >
                                Home
                            </a>
                            <a
                                href='#features'
                                className='text-foreground/80 hover:text-foreground transition-colors'
                            >
                                Features
                            </a>
                            <a
                                href='#pricing'
                                className='text-foreground/80 hover:text-foreground transition-colors'
                            >
                                Pricing
                            </a>
                            <a
                                href='#about'
                                className='text-foreground/80 hover:text-foreground transition-colors'
                            >
                                About
                            </a>
                            <a
                                href='#contact'
                                className='text-foreground/80 hover:text-foreground transition-colors'
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex items-center space-x-4'>
                        <Button variant='outline'>Sign In</Button>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
