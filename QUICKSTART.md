# Quick Start Guide - Launch in 30 Minutes

This guide will get your website live in less than 30 minutes!

## Prerequisites
- GitHub account (free at github.com)
- Vercel account (free at vercel.com)
- Your company details (phone, email, locations)
- 2-3 company photos

## 5-Minute Setup

### Step 1: Update Your Details (5 minutes)

Edit `/lib/site-config.ts`:

```typescript
// CRITICAL: Update these values!
export const siteConfig = {
  name: 'Orca Middle East',  // Already set
  
  contact: {
    primaryPhone: '+971501234567',     // ← UPDATE WITH YOUR PHONE
    secondaryPhone: '+966501234567',   // ← UPDATE WITH YOUR PHONE
    email: 'info@orcame.com',          // ← UPDATE WITH YOUR EMAIL
    salesEmail: 'sales@orcame.com',    // ← UPDATE WITH YOUR EMAIL
  },

  whatsapp: {
    phoneNumber: '971501234567',       // ← UPDATE (no + sign)
    message: 'Hello, I am interested in your services...',
  },

  socialMedia: {
    facebook: 'https://facebook.com/orcamideast',    // ← UPDATE YOUR LINKS
    linkedin: 'https://linkedin.com/company/orca',   // ← UPDATE YOUR LINKS
    instagram: 'https://instagram.com/orcamideast',  // ← UPDATE YOUR LINKS
    twitter: 'https://twitter.com/orcamideast',      // ← UPDATE YOUR LINKS
    youtube: 'https://youtube.com/@orcamideast',     // ← UPDATE YOUR LINKS
  },

  offices: [
    {
      city: 'Dubai, UAE',
      address: 'Your Address Here',              // ← UPDATE
      phone: '+971501234567',                     // ← UPDATE
      email: 'dubai@orcame.com',                  // ← UPDATE
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
    {
      city: 'Riyadh, Saudi Arabia',
      address: 'Your Address Here',               // ← UPDATE
      phone: '+966501234567',                     // ← UPDATE
      email: 'riyadh@orcame.com',                 // ← UPDATE
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
  ],

  company: {
    foundedYear: 2009,   // ← UPDATE IF DIFFERENT
    employees: 50,       // ← UPDATE IF DIFFERENT
    projects: 200,       // ← UPDATE IF DIFFERENT
    equipment: 500,      // ← UPDATE IF DIFFERENT
  },
}
```

**That's it! Your site configuration is done.**

## Deployment (Quick Version)

### Option A: GitHub + Vercel (Easiest - 10 minutes)

**1. Push to GitHub:**
```bash
# In the project directory
git init
git add .
git commit -m "Orca website ready to deploy"
git remote add origin https://github.com/YOUR_USERNAME/orca-website.git
git branch -M main
git push -u origin main
```

**2. Deploy on Vercel:**
1. Go to https://vercel.com/new
2. Click "Import from GitHub"
3. Select your `orca-website` repository
4. Click "Deploy"
5. **Your site is live!** (in ~2 minutes)

### Option B: Direct Deploy with Vercel CLI (5 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
# Follow prompts, choose "Yes" to create new project
# Done! Your site is live!
```

## After Deployment

### ✅ Verify It Works
1. Check the URL provided by Vercel
2. Test all pages load correctly
3. Test WhatsApp button clicks
4. Try the contact form

### 📱 Connect Custom Domain (Optional, 5 minutes)

1. Go to Vercel Dashboard
2. Find your project
3. Settings → Domains
4. Add your domain (orca-me.com)
5. Update your domain registrar DNS settings
6. Wait 24 hours for DNS to propagate

### 🔍 Tell Google About Your Site (2 minutes)

1. Go to https://search.google.com/search-console
2. Add property with your domain
3. Verify ownership (follow instructions)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

## You're Done! 🎉

Your professional website is now live and ready to accept customers!

## Next Steps (Not Required, Optional)

- [ ] Update home page content with your projects
- [ ] Add more portfolio projects
- [ ] Set up email notifications for contact forms
- [ ] Add more team member profiles
- [ ] Monitor analytics

## Common Issues & Fixes

**"Domain not working?"**
- DNS changes take 24-48 hours to propagate
- Check your domain registrar settings match Vercel

**"WhatsApp button not working?"**
- Make sure phone number is set correctly in `site-config.ts`
- Format should be: `971XXXXXXXXX` (no +, no spaces)

**"Contact form not sending?"**
- Form saves locally - email integration is optional
- To enable emails, follow DEPLOYMENT.md

**"Site is slow?"**
- First load always cached by Vercel
- Subsequent loads are instant
- Try hard refresh (Ctrl+Shift+R)

## Essential Links

- 📖 Full Setup: [README.md](./README.md)
- 🚀 Deployment Details: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 📊 Project Info: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
- 🔗 Vercel: https://vercel.com
- 📚 Next.js Docs: https://nextjs.org/docs

## That's All!

Your website is now ready for the world! Update content anytime and push to GitHub - Vercel will automatically deploy your changes.

**Congratulations on your new professional website!** 🚀
