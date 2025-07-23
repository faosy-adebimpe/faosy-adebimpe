// import { ServiceCardType } from '@/types';
import ServiceCard from '../../cards/ServiceCard';
import SectionHeader from './SectionHeader';
import servicesData from './servicesData';

// const services: ServiceCardType[] = [
//     {
//         serviceIcon: 'Icon',
//         serviceTitle: 'Filming Services',
//         serviceText:
//             'Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.',
//     },
//     {
//         serviceIcon: 'Icon',
//         serviceTitle: 'Digital Marketing',
//         serviceText:
//             'Vivamus luctus maximus vestibulum. Donec et enim vitae tellus auctor menean leo diamfeugiat nulla sed.',
//     },
//     {
//         serviceIcon: 'Icon',
//         serviceTitle: 'Visual Effects',
//         serviceText:
//             'Praesent commodo pharetra. Fusce fermentum anteac met interdum elementum arculectus lacinia nonsa.',
//     },
// ];

const Services = () => {
    return (
        <section className='section' id='services'>
            <div className='wrapper'>
                <SectionHeader
                    sectionNumber='01.'
                    sectionTitle='Services'
                    viewAll='view all services'
                />
                {/* <div className='mt-16 flex gap-5 flex-wrap justify-center'> */}
                <div className='card-wrapper'>
                    {servicesData.slice(0, 3).map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
