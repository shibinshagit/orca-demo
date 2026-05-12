# Orca Middle East - Company Website

Professional website for Orca Middle East General Contracting & Transport, a leading provider of contracting, transportation, and heavy equipment rental solutions across the Middle East.

## Features

- **6 Professional Pages**: Home, About, Services, Portfolio, Equipment, Contact
- **WhatsApp Integration**: Floating chat button for direct customer communication
- **Social Media Integration**: Links to Facebook, LinkedIn, Instagram, Twitter, and YouTube
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Structured data, sitemap, robots.txt, and meta tags
- **Professional Components**: Header, Footer, Hero sections, service cards, testimonials
- **Contact Forms**: Functional inquiry forms with email integration
- **Modern Design**: Professional color scheme with blue and orange accents

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui component library
- **Deployment**: Vercel (recommended)

## Getting Started

### Installation

1. Clone this repository or download the project
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Company Information

Edit `/lib/site-config.ts` to update:
- Contact information (phone, email)
- WhatsApp integration details
- Social media links
- Office locations
- Company statistics

### Update Content

Edit individual pages in `/app`:
- **Home**: `/app/page.tsx` - Hero, services, testimonials
- **About**: `/app/about/page.tsx` - Company history, team, values
- **Services**: `/app/services/page.tsx` - Service offerings
- **Portfolio**: `/app/portfolio/page.tsx` - Project showcase
- **Equipment**: `/app/equipment/page.tsx` - Equipment fleet
- **Contact**: `/app/contact/page.tsx` - Contact form and locations

### Update Images

Replace images in `/public`:
- `hero-contracting.jpg` - Home page hero image
- `portfolio-1.jpg` - Project portfolio image
- `equipment-fleet.jpg` - Equipment fleet image
- `team-photo.jpg` - Team/company photo

### Customize Design

- **Colors**: Edit `/app/globals.css` CSS custom properties (--primary, --secondary, --accent)
- **Typography**: Update font configuration in `/app/layout.tsx`
- **Styling**: Modify Tailwind classes in component files

## Key Files

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── services/page.tsx    # Services page
│   ├── portfolio/page.tsx   # Portfolio page
│   ├── equipment/page.tsx   # Equipment page
│   ├── contact/page.tsx     # Contact page
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer with links
│   ├── hero-section.tsx     # Reusable hero section
│   ├── service-card.tsx     # Service card component
│   ├── whatsapp-button.tsx  # WhatsApp floating button
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── site-config.ts       # Site configuration (UPDATE THIS!)
│   └── utils.ts             # Utility functions
└── public/
    ├── images/              # Company images
    ├── sitemap.xml          # XML sitemap for SEO
    └── robots.txt           # Robots file for search engines
```

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure it
5. Click "Deploy"

### Domain Setup

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., orca-me.com)
3. Update your domain registrar's DNS records to point to Vercel
4. Vercel provides the DNS records to use

### Environment Variables

If you need to add environment variables (for email services, APIs, etc.):
1. Go to Settings → Environment Variables in Vercel
2. Add your variables
3. Redeploy

## Contact Form Integration

The contact form is currently set up for basic functionality. To enable email notifications:

1. **Option 1: Resend (Recommended)**
   - Sign up at [resend.com](https://resend.com)
   - Add API key to environment variables
   - Update `/app/contact/page.tsx` to use Resend client

2. **Option 2: SendGrid**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Add API key to environment variables
   - Update `/app/contact/page.tsx` to use SendGrid client

3. **Option 3: Your Email Service**
   - Configure your preferred email service
   - Create an API route at `/app/api/contact/route.ts`
   - Update the form to call your API

## SEO Optimization

The website includes:
- ✅ Meta tags and descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD) for organization
- ✅ XML sitemap at `/public/sitemap.xml`
- ✅ robots.txt for search engine crawling
- ✅ Responsive design for mobile indexing
- ✅ Fast loading times optimized

### Verify SEO

1. Submit sitemap to [Google Search Console](https://search.google.com/search-console)
2. Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Monitor performance and indexing

## Performance Optimization

- Images are optimized and lazy-loaded
- Code splitting with Next.js App Router
- CSS is minimized and optimized
- Vercel automatically optimizes assets

### Check Performance

- Use [PageSpeed Insights](https://pagespeed.web.dev/) to check performance
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for comprehensive audit
- Monitor Core Web Vitals in your Vercel dashboard

## Support

For support and questions:
- Update contact information in `/lib/site-config.ts`
- WhatsApp number is configured for quick support
- Email inquiries go to the contact form

## License

This website is built for Orca Middle East General Contracting & Transport.

## Version History

- **v1.0** (2026-05-12) - Initial launch with 6 pages, WhatsApp integration, social media links, and full SEO optimization

## Next Steps

1. **Update `/lib/site-config.ts`** with your actual contact information
2. **Replace images** in `/public` with your company photos
3. **Update content** on each page with your specific services and projects
4. **Set up email integration** for the contact form
5. **Deploy to Vercel** following the deployment instructions above
6. **Configure custom domain** through your domain registrar
7. **Monitor analytics** through Google Analytics or similar service

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)
