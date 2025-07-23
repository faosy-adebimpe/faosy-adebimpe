'use client';

import { useState, useEffect } from 'react';
import Logo from '../icons/Logo';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import NavLinks from './NavLinks';
import { usePathname } from 'next/navigation';
import Sidebar from '../modals/Sidebar';
import { useModalStore } from '@/store/modalStore';
import DownloadCV from '../buttons/DownloadCV';
import Link from 'next/link';
// import Link from 'next/link';

const Navbar = () => {
    // imported states
    const pathname = usePathname();
    const isHome = pathname === '/';

    // local states
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // modal
    const { openSidebar } = useModalStore();
    return (
        <nav
            className={classNames(
                ' text-(--white)',
                {
                    'w-screen fixed left-0 top-0 z-10 transition-all duration-300':
                        isHome,
                    'w-full bg-(--nav-background-color)': !isHome,
                },
                {
                    'bg-(--nav-background-color)': isScrolled && isHome,
                    'bg-(--nav-background-color)/30': !isScrolled && isHome,
                }
            )}
        >
            <div className="wrapper flex justify-between items-center py-5 lg:py-10  limit-width">
                <Link href="/">
                    <div className="text-3xl sm:text-4xl md:text-5xl">
                        <Logo />
                    </div>
                </Link>
                <div className="hidden lg:block">
                    <NavLinks direction="row" />
                </div>
                <div className="flex items-center gap-5 mr-5 lg:mr-0">
                    {!true && (
                        <div className="">
                            <MagnifyingGlassIcon className="size-5 hover:text-(--theme-color) transition-all cursor-pointer" />
                        </div>
                    )}
                    <button className="lg:hidden" onClick={openSidebar}>
                        <Bars3Icon className="size-6 hover:text-(--theme-color) transition-all cursor-pointer" />
                    </button>
                    <div className="hidden lg:block ml-7">
                        {/* <Link
                            href="/contact"
                            className="px-[15px] py-[7px] bg-(--theme-color) text-(--white) rounded-md transition-all hover:bg-(--theme-color)/70"
                        >
                            <span className="font-semibold text-[13px] ">
                                LET&apos;S TALK
                            </span>
                        </Link> */}
                        <DownloadCV />
                    </div>
                </div>
            </div>
            <Sidebar />
        </nav>
    );
};

export default Navbar;
