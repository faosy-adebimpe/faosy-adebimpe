import { NavLinkType } from '@/types';
import React from 'react';
import NavLink from './NavLink';
import classNames from 'classnames';

const navLinks: NavLinkType[] = [
    {
        id: '1',
        title: 'Home',
        url: '#',
        href: '/',
    },
    {
        id: '2',
        title: 'Services',
        url: '#services',
        href: '/services',
    },
    {
        id: '3',
        title: 'Projects',
        url: '#projects',
        href: '/projects',
    },
    {
        id: '4',
        title: 'About Me',
        url: '#about-me',
        href: '/about-me',
    },
    {
        id: '5',
        title: 'Contact',
        url: '#contact',
        href: '/contact',
    },
];

const allowedSpacings = [0, 1, 2, 4, 6, 8, 10, 12]; // Tailwind-supported gaps

const NavLinks = ({
    direction = 'row',
    spacing = 10,
}: {
    direction?: 'row' | 'col';
    spacing?: number;
}) => {
    const spacingClass = allowedSpacings.includes(spacing)
        ? `gap-${spacing}`
        : 'gap-10';

    return (
        <div
            className={classNames(
                `flex`,
                `flex-${direction}`,
                spacingClass,
                `items-center`
            )}
        >
            {navLinks.map((navLink) => (
                <NavLink key={navLink.id} {...navLink} />
            ))}
        </div>
    );
};

export default NavLinks;
