'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  Menu,
  PhoneCall,
  Truck,
  Users,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Users },
    { href: '/services', label: 'Services', icon: BriefcaseBusiness },
    { href: '/portfolio', label: 'Portfolio', icon: FolderKanban },
    { href: '/equipment', label: 'Equipment', icon: Truck },
    { href: '/contact', label: 'Contact', icon: PhoneCall },
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-max">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-primary/30 shadow-md">
              <Image
                src="/images.png"
                alt="Orca Middle East logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block font-semibold tracking-tight text-base text-foreground">
                Orca Middle East
              </span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Contracting and Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-background/65 p-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-full inline-flex items-center gap-1.5 ${
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-xl transition-colors border border-transparent hover:border-border/70"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 w-full ${
                    pathname === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-3"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
