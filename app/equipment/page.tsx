import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Zap, Shield, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Equipment Rental | Orca Middle East',
  description: 'Heavy equipment rental services including excavators, bulldozers, cranes, and specialized machinery.',
}

const equipmentCategories = [
  {
    name: 'Excavators',
    description: 'High-capacity excavators for various earthmoving tasks',
    units: '45+',
    specs: ['20-60 ton capacity', 'Modern hydraulic systems', 'Operator certified'],
  },
  {
    name: 'Bulldozers',
    description: 'Powerful bulldozers for site preparation and grading',
    units: '30+',
    specs: ['Heavy-duty construction', 'Precision grading', 'Fuel efficient'],
  },
  {
    name: 'Cranes & Lifting',
    description: 'Mobile cranes for heavy lifting operations',
    units: '25+',
    specs: ['Up to 500 ton capacity', 'Safety certified', 'Precision lifting'],
  },
  {
    name: 'Trucks & Vehicles',
    description: 'Heavy-duty trucks for material transport',
    units: '80+',
    specs: ['20-40 ton capacity', 'GPS tracking', 'Regular maintenance'],
  },
  {
    name: 'Compactors',
    description: 'Road and soil compacting equipment',
    units: '20+',
    specs: ['Modern compaction', 'Efficient operation', 'Well maintained'],
  },
  {
    name: 'Specialized Equipment',
    description: 'Custom equipment for unique project needs',
    units: '50+',
    specs: ['Project specific', 'Expert support', 'Rental flexibility'],
  },
]

const rentalBenefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Cost Efficient',
    description: 'Avoid expensive equipment purchases. Rent only what you need.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Well Maintained',
    description: 'All equipment regularly serviced and safety inspected.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Flexible Terms',
    description: 'Daily, weekly, or monthly rentals tailored to your project.',
  },
]

const howItWorks = [
  {
    number: '1',
    title: 'Request Equipment',
    description: 'Tell us what equipment you need and project timeline',
  },
  {
    number: '2',
    title: 'Get Quote',
    description: 'Receive competitive pricing and flexible rental terms',
  },
  {
    number: '3',
    title: 'Equipment Delivery',
    description: 'We deliver and set up equipment at your site',
  },
  {
    number: '4',
    title: 'Project Support',
    description: 'On-site support and maintenance throughout rental period',
  },
]

export default function Equipment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Equipment Fleet"
          title="Heavy Equipment Rental Solutions"
          description="Modern, well-maintained equipment available for rent across the Middle East. From excavators to specialized machinery."
          primaryCTA={{ text: 'Request Equipment', href: '/contact' }}
          backgroundImage="/equipment-fleet.jpg"
        />

        {/* Equipment Categories */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Equipment Fleet
              </h2>
              <p className="text-lg text-muted-foreground">
                Over 500 units of modern equipment ready for your projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipmentCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                      {category.units}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {category.specs.map((spec, idx) => (
                      <div key={idx} className="text-sm text-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Image */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/equipment-fleet.jpg"
                alt="Equipment fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Rental Benefits */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Rent From Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Benefits of choosing Orca Middle East for your equipment needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rentalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 text-center"
                >
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Equipment Rental Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple process to get the equipment you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-lg p-6 text-center h-full">
                    <div className="text-4xl font-bold text-accent mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Equipment Standards
              </h2>
              <p className="text-lg text-muted-foreground">
                Quality assurance and maintenance protocols
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Safety & Compliance
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Regular safety inspections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Certified operators available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Full insurance coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Maintenance logs available
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Availability & Support
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    24/7 equipment support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Quick delivery nationwide
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    On-site maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Emergency breakdown service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Equipment for Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free quote on the equipment you need today.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
