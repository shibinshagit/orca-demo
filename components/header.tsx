'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Users },
    { href: '/services', label: 'Services', icon: BriefcaseBusiness },
    { href: '/portfolio', label: 'Portfolio', icon: FolderKanban },
    { href: '/equipment', label: 'Equipment', icon: Truck },
    { href: '/contact', label: 'Contact', icon: PhoneCall },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/images.png"
                alt="Orca Middle East logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="hidden sm:inline font-semibold tracking-tight text-lg text-foreground">
              Orca Middle East
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
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
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
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
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors inline-flex items-center gap-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
