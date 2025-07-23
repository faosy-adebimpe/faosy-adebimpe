import type { Metadata } from 'next';
import ProjectCard from '@/components/cards/ProjectCard';
import PageHeader from '@/components/headers/PageHeader';
import projectsData from '@/components/main/projects/projectsData';

export const metadata: Metadata = {
    title: 'Projects | Faosy Adebimpe Portfolio',
    description:
        'Browse a selection of Faosy Adebimpe’s recent projects and case studies.',
};

const page = () => {
    const perRow = 3;
    const fullRows = projectsData.slice(
        0,
        Math.floor(projectsData.length / perRow) * perRow
    );
    const remainder = projectsData.slice(fullRows.length);
    return (
        <div className="px-7">
            <PageHeader
                title="Projects"
                description="A showcase of my recent work, featuring web applications and solutions built with modern technologies. Dive in to see what I’ve created."
            />

            <div className="">
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-[70px] justify-center sm:gap-[35px]">
                    {fullRows.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <div className="mt-16 grid grid-cols-1 gap-[70px] sm:flex justify-center sm:gap-[35px]">
                    {remainder.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
            {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-[70px] justify-center sm:gap-[35px]">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div> */}
        </div>
    );
};

export default page;
