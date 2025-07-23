import { ServiceType } from '@/types';

const ServiceCard = ({ icon: Icon, title, description }: ServiceType) => {
    return (
        <div className='card flex gap-5 flex-col justify-center items-center sm:items-start bg-(--card-background-color) rounded-md p-10 duration-300 transition-all hover:scale-105 hover:bg-(--theme-color)'>
            <h2 className='font-bold'>{Icon && <Icon className='size-8' />}</h2>
            <h2 className='font-bold text-center sm:text-left'>{title}</h2>
            <p className='text-center sm:text-left'>{description}</p>
        </div>
    );
};

export default ServiceCard;
