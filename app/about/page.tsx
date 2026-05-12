import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Image from 'next/image'
import { Award, Shield, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'About Orca Middle East | Our Story & Mission',
  description: 'Learn about Orca Middle East General Contracting & Transport. Established 2009, serving the Middle East with excellence.',
}

const teamMembers = [
  {
    name: 'Mohammed Al Maktoum',
    role: 'Chief Executive Officer',
    image: '/team-photo.jpg',
  },
  {
    name: 'Fatima Al Zahra',
    role: 'Chief Operations Officer',
    image: '/team-photo.jpg',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Director of Projects',
    image: '/team-photo.jpg',
  },
  {
    name: 'Layla Al Mansouri',
    role: 'Head of Safety & Compliance',
    image: '/team-photo.jpg',
  },
]

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Safety First',
    description: 'Zero tolerance for unsafe practices. Every team member goes home safely.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality Excellence',
    description: 'Delivering superior quality on every project, meeting and exceeding standards.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Embracing modern technology and practices for efficient solutions.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Client Focus',
    description: 'Your success is our success. We build lasting partnerships.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Our Story"
          title="About Orca Middle East"
          description="Leading the contracting and transport industry with integrity, innovation, and excellence since 2009."
          primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        />

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Established Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2009, Orca Middle East has grown to become a trusted leader in general contracting, transportation, and heavy equipment rental across the Middle East region. Our commitment to excellence, safety, and customer satisfaction has made us the preferred choice for government bodies, private developers, and major corporations.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over 15 years of experience, 200+ completed projects, and a fleet of 500+ modern equipment, we have the expertise and resources to handle projects of any scale and complexity.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/team-photo.jpg"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To deliver exceptional contracting, transportation, and equipment rental solutions that exceed client expectations, maintain the highest safety standards, and contribute to the sustainable development of the Middle East region.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-foreground leading-relaxed">
                  To be the most trusted and innovative contracting and transport company in the Middle East, recognized for our commitment to excellence, safety, and client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Experienced professionals dedicated to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden border border-border">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certifications & Accreditations
              </h2>
              <p className="text-lg text-muted-foreground">
                Meeting and exceeding international standards
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015', 'OHSAS 18001'].map(
                (cert, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 text-center"
                  >
                    <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-semibold text-foreground">{cert}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Partner with us for your next project.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
