import type { MetadataRoute } from 'next';

const NEXT_PUBLIC_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'http://127.0.0.1:3000';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
        // sitemap: 'https://acme.com/sitemap.xml',
    };
}
