'use client';

import { useModalStore } from '@/store/modalStore';
import { NavLinkType } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ title, href }: NavLinkType) => {
    const pathname = usePathname();
    const isPath = pathname === href;
    const {closeSidebar} = useModalStore();
    return (
        <Link href={href} onClick={closeSidebar}>
            <div className='relative inline-block group cursor-pointer'>
                <div
                    className={classNames(
                        'pb-2 mt-2 text-(--nav-link-color) text-[15px] font-semibold text transition-all duration-300',
                        { 'text-white': isPath, 'hover:text-white': !isPath }
                    )}
                >
                    {title}
                </div>
                <div
                    className={classNames(
                        'absolute left-0 bottom-0 h-[2px] bg-(--theme-color) w-0 transition-all duration-300',
                        { 'w-full': isPath, 'group-hover:w-full': !isPath }
                    )}
                ></div>
                {/* <div className='underline'></div> */}
            </div>
        </Link>
    );
};

export default NavLink;
