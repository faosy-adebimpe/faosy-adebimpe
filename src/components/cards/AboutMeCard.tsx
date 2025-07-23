import { AboutMeCardType } from '@/types';

const AboutMeCard = ({ id, title, subtitle }: AboutMeCardType) => {
    return (
        <div className="flex gap-[16px] flex-col items-center text-center sm:flex-row sm:items-start sm:text-start">
            <h2 className="text-(--theme-color) text-[30px] font-extrabold leading-[45px]">
                {id}
            </h2>
            <div className="flex flex-col items-center sm:items-start">
                <h2 className="text-(--white) text-[20px] font-bold leading-[30px] mb-[7px]">
                    {title}
                </h2>
                <p className="text-(--white) leading-[26.4px]">{subtitle}</p>
            </div>
        </div>
    );
};

export default AboutMeCard;
