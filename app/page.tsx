import { HeroSection } from '@/components/hero-section'
import { ServiceCard } from '@/components/service-card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  Wrench,
  Truck,
  Briefcase,
  CheckCircle2,
  Award,
  Users,
  TrendingUp,
  Globe,
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Orca Middle East | Leading Contracting & Transport Solutions',
  description: 'Professional general contracting, transportation, and heavy equipment rental services across the Middle East for government, O&G, and private developers.',
}

const services = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'General Contracting',
    description: 'Comprehensive civil works and construction solutions for infrastructure and building projects.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Transportation & Logistics',
    description: 'Reliable freight transport and logistics management across the Middle East region.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Heavy Equipment Rental',
    description: 'Wide range of excavators, bulldozers, cranes, and specialized equipment for rent.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Maintenance Services',
    description: 'Professional building maintenance and facility management services.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Specialized Solutions',
    description: 'Custom services tailored to your unique project requirements.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Regional Coverage',
    description: 'Serving government, O&G, private developers, and retail clients across the Middle East.',
  },
]

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '500+', label: 'Equipment Fleet' },
  { number: '50+', label: 'Team Members' },
]

const testimonials = [
  {
    name: 'Ahmed Al Mansouri',
    company: 'Major Construction Developer',
    text: 'Orca Middle East delivered exceptional results on our infrastructure project. Their professionalism and expertise are unmatched.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Fatima Al Zahra',
    company: 'Oil & Gas Solutions',
    text: 'Reliable, efficient, and always on-time. We continue to partner with Orca for all our transport and equipment needs.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Hassan Al Qahwati',
    company: 'Government Infrastructure',
    text: 'Their commitment to safety and quality makes them our preferred contractor for major government projects.',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
]

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Orca Middle East',
    description: 'Leading provider of general contracting, transportation, and heavy equipment rental solutions across the Middle East',
    url: 'https://orca-me.com',
    telephone: siteConfig.contact.primaryPhone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Business Bay',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    sameAs: [
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.linkedin,
      siteConfig.socialMedia.instagram,
      siteConfig.socialMedia.twitter,
    ].filter(Boolean),
    areaServed: ['AE', 'SA', 'KW'],
    foundingDate: '2009',
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Trusted Industry Leader"
          title="Professional Contracting & Transport Solutions"
          description="Delivering excellence in general contracting, transportation, and heavy equipment rental across the Middle East since 2009."
          primaryCTA={{ text: 'Get Started', href: '/contact' }}
          secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
          backgroundImage="/hero-contracting.jpg"
        />

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to meet the diverse needs of government, private developers, and O&G sector clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Featured Project
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Major Highway Infrastructure Development in UAE - Completed ahead of schedule with zero safety incidents.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Professional Project Management', 'Advanced Equipment & Technology', 'Safety First Approach', 'Quality Assurance'].map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/portfolio">View More Projects</Link>
                </Button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/portfolio-1.jpg"
                  alt="Featured project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/equipment-fleet.jpg"
                  alt="Equipment fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Modern Equipment Fleet
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our extensive fleet of modern, well-maintained equipment is ready for your project needs.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Excavators & Bulldozers', 'Cranes & Lifting Equipment', 'Heavy Trucks & Vehicles', 'Specialized Machinery'].map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/equipment">Browse Equipment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Client Testimonials
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by leading organizations across the Middle East
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-border">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} profile photo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-foreground italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation on your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black hover:bg-primary-foreground/10"
              >
                <Link href="tel:+971XXXXXXXXX">Call Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
