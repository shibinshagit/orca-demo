import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Calendar, Users, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Portfolio | Orca Middle East Projects',
  description: 'Showcase of successful projects completed by Orca Middle East across contracting, transportation, and equipment rental.',
}

const projects = [
  {
    id: 1,
    title: 'Major Highway Infrastructure',
    category: 'Civil Works',
    location: 'Abu Dhabi, UAE',
    date: '2023',
    image: '/portfolio-1.jpg',
    description: 'Complete highway infrastructure development including roadways, drainage systems, and traffic management solutions.',
    highlights: [
      'Multi-lane highway construction',
      'Advanced drainage systems',
      'Safety and compliance focus',
      'Completed ahead of schedule',
    ],
    client: 'UAE Government',
  },
  {
    id: 2,
    title: 'Industrial Complex Construction',
    category: 'Building',
    location: 'Dubai, UAE',
    date: '2022',
    image: '/portfolio-1.jpg',
    description: 'Large-scale industrial facility construction with specialized equipment and expert management.',
    highlights: [
      'Industrial-grade construction',
      'Modern safety standards',
      'Custom specifications',
      'Efficient project management',
    ],
    client: 'Private Developer',
  },
  {
    id: 3,
    title: 'O&G Transportation Project',
    category: 'Transportation',
    location: 'Saudi Arabia',
    date: '2023',
    image: '/equipment-fleet.jpg',
    description: 'Specialized transportation and logistics for oil and gas sector operations.',
    highlights: [
      'Specialized equipment',
      'Regulatory compliance',
      'Safety protocols',
      'On-time delivery',
    ],
    client: 'Oil & Gas Corporation',
  },
  {
    id: 4,
    title: 'Equipment Fleet Expansion',
    category: 'Equipment Rental',
    location: 'Multiple Sites',
    date: '2023',
    image: '/equipment-fleet.jpg',
    description: 'Comprehensive equipment rental services for multiple concurrent projects.',
    highlights: [
      'Modern equipment fleet',
      'Flexible rental terms',
      'Maintenance included',
      'Regional availability',
    ],
    client: 'Multiple Clients',
  },
  {
    id: 5,
    title: 'Commercial Development',
    category: 'Building',
    location: 'Qatar',
    date: '2022',
    image: '/portfolio-1.jpg',
    description: 'State-of-the-art commercial development with premium finishes and modern amenities.',
    highlights: [
      'Premium construction',
      'Modern facilities',
      'Quality assurance',
      'Client satisfaction',
    ],
    client: 'Commercial Developer',
  },
  {
    id: 6,
    title: 'Municipal Infrastructure',
    category: 'Civil Works',
    location: 'Sharjah, UAE',
    date: '2021',
    image: '/portfolio-1.jpg',
    description: 'Municipal infrastructure improvement project enhancing public services and amenities.',
    highlights: [
      'Public infrastructure',
      'Community focus',
      'Government standards',
      'Sustainable design',
    ],
    client: 'Municipality',
  },
]

const categories = ['All', 'Civil Works', 'Building', 'Transportation', 'Equipment Rental']

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Our Work"
          title="Completed Projects"
          description="A showcase of successful projects that demonstrate our expertise, quality, and commitment to excellence."
          primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        />

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-foreground"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {project.client}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <Button asChild variant="ghost" className="w-full text-accent hover:text-accent/80">
                        <Link href={`#project-${project.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Appreciate
              </h2>
              <p className="text-lg text-muted-foreground">
                Key strengths demonstrated in every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'On-Time Delivery',
                'Quality Excellence',
                'Safety First',
                'Cost Efficiency',
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{highlight}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '200+', label: 'Successful Projects' },
                { number: '15+', label: 'Years Experience' },
                { number: '500+', label: 'Equipment Units' },
                { number: '50+', label: 'Team Members' },
              ].map((stat, index) => (
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Next Success Story Starts Here
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and how we can deliver exceptional results.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
