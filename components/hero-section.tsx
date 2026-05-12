'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
  backgroundImages?: string[]
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundImages,
}: HeroSectionProps) {
  const imageSlides = useMemo(() => {
    const defaults = ['/hero-contracting.jpg', '/equipment-fleet.jpg', '/team-photo.jpg']

    if (backgroundImages?.length) {
      return backgroundImages
    }

    if (!backgroundImage) {
      return defaults
    }

    return [backgroundImage, ...defaults.filter((img) => img !== backgroundImage)]
  }, [backgroundImage, backgroundImages])

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (imageSlides.length <= 1) {
      return
    }

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % imageSlides.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [imageSlides.length])

  return (
    <section className="relative isolate overflow-hidden bg-background py-14 sm:py-16 md:py-24 min-h-[64vh] sm:min-h-[68vh] md:min-h-[72vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imageSlides.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${
              index === activeSlide ? 'opacity-80' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Hero background"
              fill
              className={`object-cover object-center brightness-[0.9] saturate-[1.1] ${
                index === activeSlide
                  ? 'scale-105 animate-[kenburns_12s_ease-in-out_infinite_alternate]'
                  : 'scale-100'
              }`}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/50 to-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-background/20 sm:from-background/65"></div>
      </div>
      <div className="absolute inset-0 hero-overlay-grid opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_45%,rgba(255,255,255,0.06))] animate-[shimmer-pan_9s_linear_infinite]"></div>
      <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-[float-soft_8s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-[float-soft_10s_ease-in-out_infinite]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 items-end">
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 p-0 sm:p-6 md:p-10 rounded-none sm:rounded-2xl md:rounded-3xl border-0 sm:border sm:border-white/20 bg-transparent sm:bg-black/35 backdrop-blur-0 sm:backdrop-blur-xl shadow-none sm:shadow-[0_30px_65px_rgba(0,0,0,0.35)]">
            {subtitle && (
              <p className="inline-flex items-center rounded-full border border-white/35 bg-black/25 sm:bg-white/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold text-white mb-3 sm:mb-4 md:mb-5 uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                {subtitle}
              </p>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight text-balance drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]">
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 sm:mb-7 md:mb-9 leading-relaxed text-pretty drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              >
                <Link href={primaryCTA.href} className="inline-flex items-center gap-2">
                  {primaryCTA.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {secondaryCTA && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/60 bg-black/25 sm:bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>

            {imageSlides.length > 1 && (
              <div className="lg:hidden mt-5 flex items-center justify-center gap-2">
                {imageSlides.map((_, index) => (
                  <button
                    key={`mobile-dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide
                        ? 'w-8 bg-accent'
                        : 'w-2.5 bg-white/40 hover:bg-white/65'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {imageSlides.length > 1 && (
            <aside className="hidden lg:block animate-in fade-in-0 slide-in-from-right-6 duration-700">
              <div className="rounded-2xl border border-white/20 bg-black/25 backdrop-blur-md p-5 shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
                <p className="text-xs uppercase tracking-[0.16em] text-white/75 mb-3">Visual Gallery</p>
                <div className="flex gap-2.5 mb-4">
                  {imageSlides.map((img, index) => (
                    <button
                      key={`thumb-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`relative h-14 w-20 rounded-lg overflow-hidden border transition-all ${
                        index === activeSlide
                          ? 'border-accent ring-2 ring-accent/60'
                          : 'border-white/30 hover:border-white/60'
                      }`}
                      aria-label={`Switch to slide ${index + 1}`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {imageSlides.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeSlide
                          ? 'w-8 bg-accent'
                          : 'w-2.5 bg-white/35 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
