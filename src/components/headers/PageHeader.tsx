import { PageHeaderType } from '@/types';
import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

const PageHeader = ({ title, description }: PageHeaderType) => {
    return (
        // <section className='w-full h-[30dvh] sm:mt-[100px] sm:mb-[40px] lg:mt-[120px] lg:mb-[90px]'>
        // <section className="w-full h-[30dvh] sm:mt-[50px] sm:mb-[40px] lg:mt-[100px] lg:mb-[90px]">
        <section className="w-full h-[35dvh] lg:h-[43dvh] sm:mt-[50px] sm:mb-[90px] lg:mt-[100px] lg:mb-[90px] md:max-w-[549px] lg:max-w-[738px] mx-auto">
            <div className="w-full h-full flex gap-[20px] flex-col justify-center items-center">
                <div className="uppercase text-[12px] text-(--white) flex gap-[7px] items-center font-semibold mb-2">
                    <Link href="/" className="uppercase text-(--theme-color)">
                        HOME
                    </Link>
                    <ChevronRightIcon className="size-3" />
                    <p className="">{title}</p>
                </div>
                <h2 className="text-[25px] sm:text-[50px] lg:text-[100px] font-black">
                    {title}
                </h2>
                {description && (
                    <p className="text-[18px] font-normal leading-[29.7px] text-center text-(--white) hidden sm:block">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
