import { ContactCardType } from '@/types';

const ContactCard = ({
    // id,
    title,
    description,
    icon: Icon,
}: ContactCardType) => {
    return (
        <div className='h-56 sm:h-76 center-center bg-(--contact-card-bg) text-(--white) rounded-md transition hover:bg-(--theme-color) hover:scale-105'>
            <div className='w-full h-full p-3 flex gap-5 flex-col justify-center items-center break-all text-center'>
                <div className=''>
                    <Icon className='size-8' />
                </div>
                <h2 className='text-lg font-bold'>{title}</h2>
                <div className='flex flex-col gap-1'>
                    {description.map((description, index) => (
                        <p key={index} className=''>
                            {description}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
