import React from 'react';
import SectionHeader from '../services/SectionHeader';
import projectsData from './projectsData';
import Project from './Project';

const Projects = () => {
    return (
        <section className="section" id="projects">
            <div className="wrapper">
                <SectionHeader
                    sectionNumber="03."
                    sectionTitle="Projects"
                    viewAll="view all projects"
                />

                {/* <div className='mt-16 flex gap-12 flex-wrap justify-center'> */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 justify-center">
                    {projectsData.slice(0, 3).map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
