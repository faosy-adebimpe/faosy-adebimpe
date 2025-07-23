'use client';

import { ArrowUpIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const NavigateTop = () => {
    const [viewNavigationButton, setViewNavigationButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const yLevel = window.scrollY;
            if (yLevel >= 1000 && !viewNavigationButton) {
                setViewNavigationButton(true);
            } else if (yLevel < 1000 && viewNavigationButton) {
                setViewNavigationButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // clean up for data leak / memory leak
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <a
            href="#"
            className={classNames(
                'size-10 rounded-full flex justify-center items-center bg-(--theme-color) text-(--white) cursor-pointer fixed bottom-7 right-7 transition-all duration-300 hover:opacity-80',
                {
                    'opacity-100 pointer-events-auto': viewNavigationButton,
                    'opacity-0 pointer-events-none': !viewNavigationButton,
                }
            )}
        >
            <ArrowUpIcon className="size-5" />
        </a>
    );
};

export default NavigateTop;
