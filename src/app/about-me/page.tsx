import type { Metadata } from 'next';
import PageHeader from '@/components/headers/PageHeader';

// images
import aboutImage from '@/assets/images/image-3.jpg';
import Image from 'next/image';
import aboutMeData from '@/data/about-me.data';
import AboutMeCard from '@/components/cards/AboutMeCard';

export const metadata: Metadata = {
    title: 'About Me | Faosy Adebimpe Portfolio',
    description:
        'Learn more about Faosy Adebimpe’s background, skills, and experience as a developer.',
};

const AboutMe = () => {
    return (
        <div className="px-7">
            <PageHeader
                title="About Me"
                description="I'm a Software Engineer based in Nigeria, focused on building clean, responsive, and user-friendly web apps with React, TypeScript, and Tailwind CSS. Open to remote roles."
            />
            <div className="flex gap-[35px] flex-col items-center sm:flex-row sm:items-start">
                {/* <div className="w-full min-h-[547px] bg-white rounded-md"> */}
                <div className="flex-1 w-full min-h-[547px] sm:min-h-[397px] bg-white rounded-md relative overflow-hidden">
                    <Image
                        src={aboutImage}
                        fill
                        title="about me image"
                        alt="about me image"
                        className="object-cover object-top rounded-md"
                    />
                </div>

                <div className="flex-1">
                    <h2 className=""></h2>
                    <div className="flex flex-col items-center gap-[50px]">
                        {aboutMeData.map((item) => (
                            <AboutMeCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
