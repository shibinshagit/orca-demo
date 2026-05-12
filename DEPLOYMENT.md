# Deployment Guide - Orca Middle East Website

This guide walks you through deploying your website to production on Vercel.

## Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] Updated `/lib/site-config.ts` with your actual company details
- [ ] Replaced all placeholder images with your company photos
- [ ] Updated content on all pages with accurate information
- [ ] Tested the website locally: `npm run dev`
- [ ] Built the project successfully: `npm run build`
- [ ] Created a GitHub account (if deploying through Vercel)
- [ ] Have your domain name ready (e.g., orca-me.com)

## Step 1: Prepare Your Code

### Option A: Using GitHub (Recommended)

1. Initialize a Git repository:
   ```bash
   cd /path/to/orca-website-development
   git init
   git add .
   git commit -m "Initial commit: Orca Middle East website"
   ```

2. Create a new repository on GitHub
   - Go to [github.com/new](https://github.com/new)
   - Name it `orca-website` or similar
   - Initialize without README (since you already have one)

3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/orca-website.git
   git branch -M main
   git push -u origin main
   ```

### Option B: Manual Upload

1. Compress the project: `zip -r orca-website.zip /path/to/orca-website-development`
2. You'll upload this during the Vercel deployment process

## Step 2: Deploy to Vercel

### Method 1: Deploy from GitHub (Easiest)

1. Visit [vercel.com](https://vercel.com) and sign up (free)
2. Click "New Project"
3. Connect your GitHub account
4. Select the `orca-website` repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"
7. Wait for deployment to complete (usually 2-3 minutes)

### Method 2: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from the project directory:
   ```bash
   cd /path/to/orca-website-development
   vercel
   ```

3. Follow the prompts:
   - Select "Yes" to create a new project
   - Select your team/workspace
   - Set project name: `orca-website`
   - Framework: `Next.js`

4. Vercel will provide a live URL

## Step 3: Configure Custom Domain

### If you're using Vercel for hosting:

1. **Register your domain** (if not already done)
   - Services like Namecheap, GoDaddy, Google Domains, etc.
   - Recommended: Choose `.com` domain

2. **Connect domain to Vercel:**
   - Go to your Vercel Project Dashboard
   - Navigate to Settings → Domains
   - Enter your domain name (e.g., `orca-me.com`)
   - Click "Add Domain"

3. **Update DNS records:**
   - Vercel provides DNS records to add to your domain registrar
   - Go to your domain registrar's settings
   - Add Vercel's DNS records
   - Propagation takes 24-48 hours

4. **Alternative - Vercel Nameservers:**
   - Vercel can manage DNS for you
   - Follow the nameserver instructions in Vercel
   - Update your domain registrar to point to Vercel's nameservers

### Verification:
- Check that `orca-me.com` loads your website
- HTTPS should be automatically enabled

## Step 4: Post-Deployment Tasks

### 1. Enable HTTPS
- Vercel automatically provides SSL/TLS certificates
- HTTPS should be enabled by default

### 2. Set Up Analytics (Optional)
Use your preferred privacy-compliant analytics provider (for example, Google Analytics or Plausible) based on your business requirements.

### 3. Submit to Search Engines

**Google Search Console:**
1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://orca-me.com`
3. Verify ownership (follow instructions)
4. Submit sitemap: `https://orca-me.com/sitemap.xml`
5. Monitor indexing and performance

**Bing Webmaster Tools:**
1. Visit [bing.com/webmasters](https://bing.com/webmasters)
2. Add your website
3. Verify ownership
4. Submit sitemap

### 4. Set Up Email Notifications

**Option A: Contact Form Email Integration**

Using **Resend** (Recommended):
```bash
npm install resend
```

Update `/app/api/contact/route.ts`:
```tsx
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, message } = await request.json();
  
  try {
    await resend.emails.send({
      from: 'noreply@orca-me.com',
      to: 'info@orcame.com',
      subject: `New inquiry from ${name}`,
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
```

Add environment variable in Vercel:
1. Go to Project Settings → Environment Variables
2. Add: `RESEND_API_KEY=your_api_key`
3. Redeploy

### 5. Monitor Performance

- Check [vercel.com/analytics](https://vercel.com) for speed and usage
- Use [PageSpeed Insights](https://pagespeed.web.dev/) monthly
- Set up performance alerts

## Updating the Website

After deployment, you can update content anytime:

1. **Edit files locally:**
   ```bash
   # Make your changes
   npm run dev  # Test locally
   ```

2. **Push changes:**
   ```bash
   git add .
   git commit -m "Update services content"
   git push
   ```

3. **Vercel auto-deploys:**
   - Your changes automatically deploy to production
   - Usually takes 2-5 minutes
   - Monitor at vercel.com dashboard

## Troubleshooting

### Site not loading?
- Check domain DNS records are correctly configured
- Wait 48 hours for DNS propagation
- Verify in Vercel dashboard that domain is connected

### Slow page load?
- Images are too large - optimize before uploading
- Use Next.js Image component for optimization
- Check Core Web Vitals in PageSpeed Insights

### WhatsApp button not working?
- Update phone number in `/lib/site-config.ts`
- Include country code (e.g., 971 for UAE)
- Test the link manually

### Contact form not sending emails?
- Check email service API key is added to environment variables
- Verify email template is correct
- Check Vercel function logs for errors

## Maintenance & Updates

### Monthly Tasks:
- [ ] Monitor website analytics
- [ ] Check Google Search Console for issues
- [ ] Update project portfolio with new work
- [ ] Review contact inquiries

### Quarterly Tasks:
- [ ] Update company statistics if changed
- [ ] Refresh portfolio images
- [ ] Check all links are working
- [ ] Update services if offerings change

### Annual Tasks:
- [ ] Full website audit
- [ ] Update team members/leadership info
- [ ] Refresh design if needed
- [ ] Upgrade dependencies

## Support

If you encounter issues:

1. **Check Vercel status:** [status.vercel.com](https://status.vercel.com)
2. **Review Vercel logs:** Dashboard → Deployments → View Build Log
3. **Check Next.js docs:** [nextjs.org/docs](https://nextjs.org/docs)
4. **Community help:** [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

## Security Best Practices

- [ ] Enable 2FA on GitHub and Vercel accounts
- [ ] Regularly update dependencies: `npm audit`
- [ ] Use environment variables for sensitive data
- [ ] Monitor Vercel security alerts
- [ ] Keep backups of your code

## Performance Optimization

Your website is already optimized with:
- Next.js automatic image optimization
- Code splitting and dynamic imports
- Server-side rendering for fast loads
- CSS minification and optimization
- Built-in security headers

Current expected performance:
- **Lighthouse Score**: 90+ out of 100
- **Page Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Mobile Score**: 85+ out of 100

## Celebrating Your Launch!

Your website is now live! Consider:
1. Announcing on social media
2. Sending announcement emails to clients
3. Adding website link to email signatures
4. Updating LinkedIn and other profiles
5. Sharing with your team

---

**Questions?** Check the [README.md](./README.md) for more information or contact Vercel support.
