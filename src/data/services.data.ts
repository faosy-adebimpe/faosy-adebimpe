import {
    Globe,
    ShoppingCart,
    Palette,
    Server,
    BarChart3,
    Plug,
    Wand2,
    Search,
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        icon: Globe,
        title: 'Web Development',
        description:
            'I build fast, responsive, and accessible websites using modern frontend frameworks like React and Next.js. Clean UI, SEO-friendly, and fully mobile optimized.',
        tools: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'HTML',
            'CSS',
            'JavaScript',
        ],
    },
    {
        id: 2,
        icon: ShoppingCart,
        title: 'E-commerce Development',
        description:
            'I create custom online stores with features like product listings, user authentication, cart, and payment integrations designed to boost conversion and performance.',
        tools: ['React', 'Redux', 'MongoDB', 'Next.js', 'Stripe', 'Node.js'],
    },
    {
        id: 3,
        icon: Palette,
        title: 'UI/UX Implementation',
        description:
            'I bring designs to life with pixel-perfect accuracy, translating Figma or Adobe XD designs into interactive interfaces using Tailwind CSS, Framer Motion, and React.',
        tools: [
            'Figma',
            'Tailwind CSS',
            'React',
            'Framer Motion',
            'HTML',
            'CSS',
        ],
    },
    {
        id: 4,
        icon: Server,
        title: 'Backend & API Development',
        description:
            'I develop secure, scalable REST APIs and backend logic using Node.js, Express, and MongoDB. Clean architecture, reusable code, and proper error handling included.',
        tools: ['Node.js', 'Express', 'MongoDB', 'Postman', 'JWT', 'REST APIs'],
    },
    {
        id: 5,
        icon: BarChart3,
        title: 'Dashboard & Admin Panels',
        description:
            'I build custom dashboards and admin tools for managing data, users, and workflows perfect for startups, SaaS, or internal tools.',
        tools: ['React', 'Chart.js', 'Tailwind CSS', 'MongoDB', 'Next.js'],
    },
    {
        id: 6,
        icon: Plug,
        title: 'Third-Party Integrations',
        description:
            'Seamless integration with services like Stripe, Firebase, SendGrid, and more from authentication and email to analytics and payments.',
        tools: ['Stripe', 'Firebase', 'SendGrid', 'Auth0', 'React'],
    },
    {
        id: 7,
        icon: Wand2,
        title: 'Code Refactoring & Optimization',
        description:
            'I help clean up messy codebases, optimize performance, and improve maintainability. Perfect for legacy projects or teams that need structure.',
        tools: ['ESLint', 'Prettier', 'Git', 'React', 'Next.js'],
    },
    {
        id: 8,
        icon: Search,
        title: 'SEO & Performance Optimization',
        description:
            'I optimize your site for search engines and speed, including meta tags, semantic markup, lazy loading, and Lighthouse audits.',
        tools: ['Next.js', 'Lighthouse', 'HTML', 'Meta Tags', 'Lazy Loading'],
    },
];

export default servicesData;
