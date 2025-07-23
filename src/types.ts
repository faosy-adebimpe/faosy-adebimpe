// import { StaticImageData } from 'next/image';

import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Svg = {
    width?: number;
    height?: number;
};

export type ServiceCardType = {
    serviceIcon: string;
    serviceTitle: string;
    serviceText: string;
};

export type ProjectType = {
    id: string;
    title: string;
    description: string;
    // image: StaticImageData;
    image: string;
    url: string;
};

export type ServiceType = {
    id: number;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
    >;
    title: string;
    description: string;
    tools: string[];
};

export type TechStackType = {
    id: number;
    category: string;
    skills: string[];
};

export type NavLinkType = {
    id: string;
    title: string;
    url: string;
    href: string;
};

export type PageHeaderType = {
    title: string;
    description?: string;
};

export type ContactCardType = {
    id: string;
    title: string;
    description: string[];
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >;
};

export type ModalStoreType = {
    sidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
};

export type ContactFormType = {
    name: string;
    email: string;
    message: string;
};

export type AboutMeCardType = {
    id: string;
    title: string;
    subtitle: string;
};
