import { Button } from '@/components/ui/button'
import { ImageWithFallback } from '@/components/shared'

export default function Hero() {
    return (
        <section className='from-background to-muted/20 bg-gradient-to-b py-20 lg:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid items-center gap-12 lg:grid-cols-2'>
                    {/* Content */}
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <h1 className='text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl'>
                                Keep your code snippets{' '}
                                <span className='text-primary'>
                                    safe, organized,
                                </span>{' '}
                                and accessible.
                            </h1>
                            <p className='text-muted-foreground max-w-2xl text-xl'>
                                CodeKeep helps developers save, search, and
                                share snippets with ease. Never lose that
                                perfect piece of code again.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4 sm:flex-row'>
                            <Button size='lg' className='px-8 py-6 text-lg'>
                                Get Started Free
                            </Button>
                            <Button
                                variant='outline'
                                size='lg'
                                className='px-8 py-6 text-lg'
                            >
                                View Pricing
                            </Button>
                        </div>

                        <div className='text-muted-foreground flex items-center space-x-6 text-sm'>
                            <span>✓ Free forever plan</span>
                            <span>✓ No credit card required</span>
                            <span>✓ 2 minute setup</span>
                        </div>
                    </div>

                    {/* App Mockup */}
                    <div className='relative'>
                        <div className='border-border/40 bg-card overflow-hidden rounded-xl border shadow-2xl'>
                            <div className='bg-muted/50 border-border/40 border-b px-4 py-3'>
                                <div className='flex items-center space-x-2'>
                                    <div className='h-3 w-3 rounded-full bg-red-500'></div>
                                    <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                    <span className='text-muted-foreground ml-4 text-sm'>
                                        snippet-editor.js
                                    </span>
                                </div>
                            </div>
                            <div className='p-0'>
                                <ImageWithFallback
                                    src='https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwZGFyayUyMHRoZW1lJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU3NDI4MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                                    alt='CodeKeep snippet editor interface'
                                    className='h-64 w-full object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
