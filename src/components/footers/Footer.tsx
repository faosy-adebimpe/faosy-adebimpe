import Link from 'next/link';
import SocialIcons from '../heros/SocialIcons';
import Logo from '../icons/Logo';
import Newsletter from './Newsletter';

const Footer = () => {
    return (
        <footer className="limit-width mt-20 px-3 pt-12 pb-3 bg-(--footer-background-color)">
            <div className="wrapper grid gap-[50px] justify-center sm:justify-start lg:grid-cols-3">
                <div className="flex flex-col gap-[40px] items-center 0 sm:items-start">
                    <div className="flex gap-[24px] flex-col items-center sm:items-start">
                        <div className="text-5xl">
                            <Logo />
                        </div>
                        <p className="leading-[26.4px] text-[#898989] text-center sm:text-start">
                            Clean code. Sleek design. Functional results.
                            Helping brands and ideas come alive on the web.
                        </p>
                    </div>
                    <Newsletter />
                </div>
                <div className="footer-section">
                    <h2 className="footer-subtitle">Site Menu</h2>
                    <div className="footer-section-lists">
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/about-me">About Me</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h2 className="footer-subtitle">Contact me</h2>
                    <div className="footer-section-lists">
                        <p>Phone: (+234) 8149778099</p>
                        <p>Email: faosyadebimpe@gmail.com</p>
                        <a
                            href="mailto:faosyadebimpe@gmail.com"
                            className="link"
                        >
                            Direct mail
                        </a>
                    </div>

                    <div className="footer-section mt-[40px]">
                        <h2 className="footer-subtitle">Social Icons</h2>
                        <SocialIcons />
                    </div>
                </div>
                <div className="">
                    <p className="text-[#585858] text-[15px] leading-[19.5px] text-center sm:text-start">
                        Copyright &copy; 2025 - Faosy Adebimpe
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
