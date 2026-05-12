// Site Configuration - Update these values with your actual details

export const siteConfig = {
  name: 'Orca Middle East',
  description: 'Leading provider of general contracting, transportation, and heavy equipment rental solutions across the Middle East',
  
  // Contact Information
  contact: {
    primaryPhone: '+971501234567', // Update with actual phone
    secondaryPhone: '+966501234567', // Update with actual phone
    email: 'info@orcame.com',
    salesEmail: 'sales@orcame.com',
  },

  // WhatsApp Configuration
  whatsapp: {
    phoneNumber: '971501234567', // Without the + sign
    message: 'Hello, I am interested in your services. Can you provide more information?',
  },

  // Social Media Links
  socialMedia: {
    facebook: 'https://facebook.com/orcamideasteast', // Update with your actual URL
    linkedin: 'https://linkedin.com/company/orca-middle-east', // Update with your actual URL
    instagram: 'https://instagram.com/orcamideast', // Update with your actual URL
    twitter: 'https://twitter.com/orcamideast', // Update with your actual URL
    youtube: 'https://youtube.com/@orcamideast', // Update with your actual URL
  },

  // Office Locations
  offices: [
    {
      city: 'Dubai, UAE',
      address: 'Business Bay, Dubai, UAE',
      phone: '+971501234567',
      email: 'dubai@orcame.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM',
    },
    {
      city: 'Riyadh, Saudi Arabia',
      address: 'Al Olaya, Riyadh, Saudi Arabia',
      phone: '+966501234567',
      email: 'riyadh@orcame.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM',
    },
  ],

  // Company Info
  company: {
    foundedYear: 2009,
    employees: 50,
    projects: 200,
    equipment: 500,
  },

  // SEO
  seo: {
    keywords: [
      'contracting',
      'transportation',
      'heavy equipment rental',
      'construction',
      'Middle East',
      'UAE',
      'Saudi Arabia',
    ],
  },
}

export type SiteConfig = typeof siteConfig
