'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { socialMedia, contact, offices } = siteConfig

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/images.png"
                  alt="Orca Middle East logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold tracking-tight text-lg">Orca Middle East</h3>
            </div>
            <p className="text-sm text-sidebar-foreground/80">
              Leading provider of general contracting, transportation, and heavy equipment rental solutions across the Middle East.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-sidebar-primary transition-colors inline-flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sidebar-primary transition-colors inline-flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-sidebar-primary transition-colors inline-flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-sidebar-primary transition-colors inline-flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5" />
                  Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-sidebar-primary" />
                <a href={`tel:${contact.primaryPhone}`} className="hover:text-sidebar-primary transition-colors">
                  {contact.primaryPhone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-sidebar-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-sidebar-primary transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-sidebar-primary" />
                <span>{offices[0]?.city || 'Dubai, UAE'}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialMedia.facebook && (
                <a
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialMedia.linkedin && (
                <a
                  href={socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialMedia.twitter && (
                <a
                  href={socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socialMedia.instagram && (
                <a
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sidebar-foreground/60">
              &copy; {currentYear} Orca Middle East General Contracting & Transport. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-sidebar-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-sidebar-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
