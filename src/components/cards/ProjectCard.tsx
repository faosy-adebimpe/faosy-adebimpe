'use client';

import { ProjectType } from '@/types';
import OpenExternalLinkIcon from '../icons/OpenExternalLinkIcon';
import Image from 'next/image';
import classNames from 'classnames';
import { useState } from 'react';

const ProjectCard = ({ title, image, url }: ProjectType) => {
    const [hover, setHover] = useState(false);
    return (
        // <div
        //         className='w-full h-[370px] sm:h-[250px] md:h-[270px] lg:h-[350] flex flex-col gap-5 items-center sm:items-start'
        //         onMouseEnter={() => !hover && setHover(true)}
        //         onMouseLeave={() => hover && setHover(false)}
        //     >
        <div
            className="w-full h-[400px] sm:h-[250px] lg:h-[400px] flex flex-col gap-5 items-center sm:items-start"
            onMouseEnter={() => !hover && setHover(true)}
            onMouseLeave={() => hover && setHover(false)}
        >
            <div className="w-full h-full bg-red-200 cusor-pointer transition-opacity duration-300 opacity-70 hover:opacity-100 rounded-lg overflow-hidden relative">
                <Image
                    src={image}
                    alt={`${title} image`}
                    width={500}
                    height={500}
                    className="bg-red-200 w-full h-full object-cover object-center"
                />
                <div className=" absolute inset-0 flex justify-center items-center">
                    <a
                        href={url}
                        target="_blank"
                        className={classNames(
                            'bg-(--theme-color) text-(--white) text-lg size-[48px] rounded-full flex justify-center items-center transition-all hover:scale-110',
                            {
                                // expand: hover,
                            }
                        )}
                        onMouseEnter={() => hover && setHover(false)}
                        onMouseLeave={() => !hover && setHover(true)}
                    >
                        <OpenExternalLinkIcon />
                    </a>
                </div>
            </div>
            <h3 className="font-bold text-base">{title}</h3>
        </div>
    );
};

export default ProjectCard;
