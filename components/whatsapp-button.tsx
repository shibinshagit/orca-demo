'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export function WhatsAppButton() {
  const { phoneNumber, message } = siteConfig.whatsapp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(34,197,94,0.45)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-[float-soft_4s_ease-in-out_infinite]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  )
}
