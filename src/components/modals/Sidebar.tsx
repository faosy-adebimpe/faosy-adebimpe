import { XIcon } from 'lucide-react';
import SocialIcons from '../heros/SocialIcons';
import NavLinks from '../navs/NavLinks';
import Logo from '../icons/Logo';
import classNames from 'classnames';
import { useModalStore } from '@/store/modalStore';
import DownloadCV from '../buttons/DownloadCV';

const Sidebar = () => {
    const { sidebarOpen, closeSidebar } = useModalStore();
    return (
        <div
            // bg-black/90
            className={classNames(
                // 'w-full fixed left-0 top-0 z-10 bg-black/70 backdrop-blur-md cc transition-all duration-200 lg:hidden bg-[url("/images/background-images/sidebar-bg.jpg")] bg-cover bg-center bg-blend-multiply',
                'w-full fixed left-0 top-0 z-10 bg-black/70 backdrop-blur-md cc transition-transform lg:hidden bg-[url("/images/background-images/sidebar-bg.jpg")] bg-cover bg-center bg-blend-multiply',
                {
                    ' h-screen': sidebarOpen,
                    'h-0 opacity-0 pointer-events-none': !sidebarOpen,
                }
            )}
        >
            <button
                className="absolute top-5 right-5 text-(--nav-link-color) size-9 rounded-full cc transition hover:bg-(--theme-color)/10"
                onClick={closeSidebar}
            >
                <XIcon className="size-5 transition hover:rotate-180 font-semibold" />
            </button>
            <div className="flex gap-7 flex-col items-center">
                <div className="text-5xl cc mb-7">
                    <Logo />
                </div>
                <NavLinks direction="col" spacing={8} />

                <DownloadCV />
                <div className="">
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
