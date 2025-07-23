import type { Metadata } from 'next';
import ServiceCard2 from '@/components/cards/ServiceCard2';
import PageHeader from '@/components/headers/PageHeader';
import servicesData from '@/components/main/services/servicesData';

export const metadata: Metadata = {
    title: 'Services | Faosy Adebimpe Portfolio',
    description:
        'Explore the range of services offered by Faosy Adebimpe, including web development, consulting, and more.',
};

const page = () => {
    // perRow = 3
    const perRow = 3;
    const fullRows = servicesData.slice(
        0,
        Math.floor(servicesData.length / perRow) * perRow
    );
    const remainder = servicesData.slice(fullRows.length);
    return (
        <div className="px-7">
            <PageHeader
                title="Services"
                description="Discover the range of services I offer, from web development to consulting. Let’s work together to bring your vision to life."
            />
            <div className="">
                <div className="grid gap-[29px] sm:grid-cols-3 sm:gap-x-[25px] sm:gap-y-[15px] lg:gap-[35px] justify-center">
                    {fullRows.map((service) => (
                        <ServiceCard2 key={service.id} {...service} />
                    ))}
                </div>
                <div className="grid gap-[29px] sm:grid-cols-3 sm:gap-x-[25px] sm:gap-y-[15px] lg:gap-[35px] justify-center sm:full sm:flex mt-[29px] sm:mt-[15px] lg:mt-[35px]">
                    {remainder.map((service) => (
                        <ServiceCard2 key={service.id} {...service} />
                    ))}
                </div>
                {/* <div className="grid gap-[29px] sm:grid-cols-3 sm:gap-x-[25px] sm:gap-y-[15px] lg:gap-[35px] justify-center">
                    {servicesData.map((service) => (
                        <ServiceCard2 key={service.id} {...service} />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default page;
