import type { Metadata } from 'next';
import ContactCard from '@/components/cards/ContactCard';
import PageHeader from '@/components/headers/PageHeader';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

// images
import profileImage from '@/assets/images/image-1-transparent.png';
import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
    title: 'Contact | Faosy Adebimpe Portfolio',
    description:
        'Get in touch with Faosy Adebimpe to discuss your project or collaboration opportunities.',
};

const contactData = [
    {
        id: '1',
        title: 'Physical Address',
        description: ['Oyo, Nigeria'],
        icon: MapPinIcon,
    },
    {
        id: '2',
        title: 'Email Address',
        description: ['faosyadebimpe@gmail.com'],
        icon: MailIcon,
    },
    {
        id: '3',
        title: 'Phone Numbers',
        description: ['+234 8149778099', '+234 9155779072'],
        icon: PhoneIcon,
    },
];

const Contact = () => {
    return (
        <div className="px-7">
            <PageHeader
                title="Contact"
                description="Reach out to discuss your ideas, request a quote, or just say hello. I’m always open to new opportunities and collaborations."
            />
            <div className="grid gap-12 grid-cols-1 sm:grid-cols-3">
                {contactData.map((contact) => (
                    <ContactCard key={contact.id} {...contact} />
                ))}
            </div>

            <div className="mt-[50px] md:mt-[70px] lg:mt-[100px] sm:flex sm:gap-[35px] sm:items-center">
                {/* <div className="size-[440px] sm:size-[300px] md:size-[400px] lg:size-[500px] xl:size-[600px] bg-[#212121] flex justify-center items-center rounded-full overflow-hidden"> */}
                <div className="size-[350px] sm:size-[300px] md:size-[400px] lg:size-[500px] xl:size-[600px] bg-[#212121] flex justify-center items-center rounded-full overflow-hidden mx-auto max-w-full">
                    <Image
                        src={profileImage}
                        width={500}
                        height={500}
                        title="profile image"
                        alt="profile image"
                        className="object-contain object-top"
                    />
                </div>

                <div className="mt-[35px] flex-1">
                    <div className="flex gap-[15px] flex-col items-center sm:items-start">
                        <h2 className="text-(--theme-color) leading-[26.4px] text-center sm:text-left uppercase font-extrabold">
                            GET IN TOUCH
                        </h2>
                        <h3 className="text-(--white) text-[40px] font-extrabold leading-[40px] text-center sm:text-left lg:text-[60px] lg:leading-[60px]">
                            Let&apos;s talk about your project
                        </h3>
                    </div>

                    <div className="mt-[30px]">
                        <p className="text-center sm:text-left text-[#898989] leading-[26.4px]">
                            Pellentesque tincidunt tristique neque, eget
                            venenatis enim gravida quis. Fusce at egestas
                            libero. Cras convallis egestas ullamcorper
                            suspendisse.
                        </p>
                    </div>

                    <div className="mt-[45px]">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
