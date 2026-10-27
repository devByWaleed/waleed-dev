// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://waleed-code.netlify.app' // Replace with your actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // disallow: ['/private/'], // Uncomment if you have private routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}