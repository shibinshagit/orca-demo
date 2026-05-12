import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ServiceCard } from '@/components/service-card'
import { WhatsAppButton } from '@/components/whatsapp-button'
import {
  Wrench,
  Truck,
  Briefcase,
  CheckCircle2,
  Award,
  Globe,
  Shield,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Orca Middle East',
  description: 'Comprehensive contracting, transportation, and heavy equipment rental services for government, private developers, and O&G sector.',
}

const mainServices = [
  {
    id: 'general-contracting',
    icon: <Wrench className="w-8 h-8" />,
    title: 'General Contracting & Civil Works',
    description: 'Comprehensive civil works and construction solutions',
    details: [
      'Infrastructure development',
      'Building construction',
      'Road and highway projects',
      'Commercial facilities',
      'Industrial projects',
      'Turnkey solutions',
    ],
  },
  {
    id: 'transportation',
    icon: <Truck className="w-8 h-8" />,
    title: 'Transportation & Logistics',
    description: 'Reliable freight transport and logistics management',
    details: [
      'Freight transportation',
      'Logistics management',
      'Material handling',
      'Specialized transport',
      'Regional coverage',
      'Real-time tracking',
    ],
  },
  {
    id: 'equipment',
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Heavy Equipment Rental',
    description: 'Wide range of quality equipment for rent',
    details: [
      'Excavators and bulldozers',
      'Cranes and lifting equipment',
      'Heavy trucks and vehicles',
      'Specialized machinery',
      'Equipment maintenance',
      'Flexible rental terms',
    ],
  },
  {
    id: 'maintenance',
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'Maintenance & Facility Services',
    description: 'Professional building maintenance and facility management',
    details: [
      'Preventive maintenance',
      'Corrective repairs',
      'Facility management',
      'Cleaning services',
      'Safety compliance',
      '24/7 support',
    ],
  },
  {
    id: 'specialized',
    icon: <Award className="w-8 h-8" />,
    title: 'Specialized Services',
    description: 'Custom solutions tailored to unique requirements',
    details: [
      'Project planning',
      'Consulting services',
      'Equipment customization',
      'Training programs',
      'Technical support',
      'Onsite expertise',
    ],
  },
  {
    id: 'regional',
    icon: <Globe className="w-8 h-8" />,
    title: 'Regional Coverage',
    description: 'Serving across the Middle East and beyond',
    details: [
      'UAE operations',
      'Saudi Arabia presence',
      'Regional partnerships',
      'Multi-country projects',
      'Cross-border logistics',
      'Local expertise',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your project requirements and goals',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Develop a comprehensive plan tailored to your needs',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Implement with professionalism and attention to detail',
  },
  {
    number: '04',
    title: 'Completion',
    description: 'Deliver outstanding results exceeding expectations',
  },
]

const whyChoose = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety First',
    description: 'Rigorous safety protocols and training for all operations',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Efficiency',
    description: 'Modern technology and best practices ensure timely delivery',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Quality',
    description: 'Certified processes and continuous quality assurance',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Expertise',
    description: 'Experienced team with proven track record',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="What We Offer"
          title="Our Comprehensive Services"
          description="Complete solutions for contracting, transportation, and equipment rental across the Middle East."
          primaryCTA={{ text: 'Request a Quote', href: '/contact' }}
        />

        {/* Main Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-sm text-foreground flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Orca Middle East
              </h2>
              <p className="text-lg text-muted-foreground">
                Benefits that set us apart from the competition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground">
                How we deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
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
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving clients across the Middle East
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['UAE', 'Saudi Arabia', 'Kuwait'].map((location, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 text-center"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {location}
                  </h3>
                  <p className="text-muted-foreground">
                    Full service coverage with local expertise and resources
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team for a personalized consultation.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
