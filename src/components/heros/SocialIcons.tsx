import FacebookIcon from '../icons/FacebookIcon';
import XIcon from '../icons/XIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import WhatsappIcon from '../icons/WhatsappIcon';

const SocialIcons = () => {
    return (
        <div className="flex gap-3 items-center mt-5">
            <a
                // href=""
                href="https://web.facebook.com/profile.php?id=61554921745465"
                target="_blank"
                className=" size-[52px] sm:size-[62px] flex justify-center items-center rounded-full bg-(--icon-background-color) text-(--white) cursor-pointer transition-all hover:bg-(--icon-background-hover-color)"
            >
                <FacebookIcon />
            </a>
            <a
                // href="#"
                href="https://x.com/faosy_adebimpe"
                target="_blank"
                className="size-[52px] sm:size-[62px] flex justify-center items-center rounded-full bg-(--icon-background-color) text-(--white) cursor-pointer transition-all hover:bg-(--icon-background-hover-color)"
            >
                <XIcon />
            </a>
            <a
                href="https://www.instagram.com/faosyadebimpe/"
                target="_blank"
                className="size-[52px] sm:size-[62px] flex justify-center items-center rounded-full bg-(--icon-background-color) text-(--white) cursor-pointer transition-all hover:bg-(--icon-background-hover-color)"
            >
                <InstagramIcon />
            </a>
            <a
                href="https://www.linkedin.com/in/faosy-adebimpe-119ab0349/"
                target="_blank"
                className="size-[52px] sm:size-[62px] flex justify-center items-center rounded-full bg-(--icon-background-color) text-(--white) cursor-pointer transition-all hover:bg-(--icon-background-hover-color)"
            >
                <LinkedInIcon />
            </a>
            <a
                href="https://wa.me/message/PXWK36GNUYKLJ1"
                target="_blank"
                className="size-[52px] sm:size-[62px] flex justify-center items-center rounded-full bg-(--icon-background-color) text-(--white) cursor-pointer transition-all hover:bg-(--icon-background-hover-color)"
            >
                <WhatsappIcon />
            </a>
        </div>
    );
};

export default SocialIcons;
