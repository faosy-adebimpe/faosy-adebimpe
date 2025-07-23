import TechStackCard from '@/components/cards/TechStackCard';
import SectionHeader from '../services/SectionHeader';
import techStackData from './techStackData';

const Techstack = () => {
    return (
        <section className="section" id="techstack">
            <div className="wrapper">
                <SectionHeader
                    sectionNumber="02."
                    sectionTitle="Techstack"
                    // viewAll='view all techstack'
                />
                {/* <div className='mt-16 flex gap-5 flex-wrap justify-center'> */}
                <div className="card-wrapper">
                    {techStackData.slice(0, 3).map((techStack) => (
                        <TechStackCard key={techStack.id} {...techStack} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Techstack;
