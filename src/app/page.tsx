import type { Metadata } from 'next';
import Hero from '@/components/heros/Hero';
import Contact from '@/components/main/contact/Contact';
import Projects from '@/components/main/projects/Projects';
import Services from '@/components/main/services/Services';
import Techstack from '@/components/main/tech-stacks/Techstack';
import NavigateTop from '@/components/navigators/NavigateTop';

export const metadata: Metadata = {
    title: 'Home | Faosy Adebimpe Portfolio',
    description:
        'Welcome to Faosy Adebimpe’s portfolio. Discover projects, services, and background as a developer.',
};

export default function Home() {
    return (
        <main id="main">
            <Hero />
            <div className="px-3 flex gap-10 flex-col items-center">
                <Services />
                <Techstack />
                <Projects />
                <Contact />
            </div>
            <NavigateTop />
        </main>
    );
}
