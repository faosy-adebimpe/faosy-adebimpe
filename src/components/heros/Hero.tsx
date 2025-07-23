import SocialIcons from './SocialIcons';

const Hero = () => {
    return (
        <section className='bg-[url("/images/image-1-wide-head.jpg")] bg-black/80 text-(--white) bg-cover bg-top-right bg-blend-multiply'>
            <div className="wrapper flex flex-col gap-7 items-center py-[35dvh] sm:items-start">
                <h3 className="font-bold text-(--theme-color)">
                    HELLO, MY NAME IS
                </h3>
                <h1 className="font-black text-center text-[60px] md:text-[70px] lg:text-[140px] lg:w-1/2 md:text-left leading-[1em]">
                    Faosy Adebimpe
                </h1>
                <h3 className="font-bold">I&apos;M A SOFTWARE ENGINEER</h3>
                {/* <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <a
                        href="/cv-faosy-adebimpe.pdf"
                        download
                        className="inline-block px-7 py-3 rounded-lg bg-[var(--theme-color)] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-transparent hover:border-[var(--theme-color)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]"
                    >
                        Download CV
                    </a>
                </div> */}
                <SocialIcons />
            </div>
        </section>
    );
};

export default Hero;

// bg-[url('/images/log-bg-img.png')] bg-cover bg-center
