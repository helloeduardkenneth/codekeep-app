import { Navbar } from '@/components/layout'
import { Hero } from '@/components/(sections)'
// import { HeroSection } from './components/HeroSection'
// import { FeaturesSection } from './components/FeaturesSection'
// import { CTABanner } from './components/CTABanner'
// import { PricingSection } from './components/PricingSection'
// import { Footer } from './components/Footer'

export default function App() {
    return (
        <div className='bg-background min-h-screen'>
            <Navbar />
            <main>
                <Hero />
                {/* <FeaturesSection />
                <CTABanner />
                <PricingSection /> */}
            </main>
            {/* <Footer /> */}
        </div>
    )
}
