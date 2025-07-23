import { ServiceType } from '@/types';
import classNames from 'classnames';

const ServiceCard2 = ({ icon: Icon, title, description }: ServiceType) => {
    return (
        // #898989 #1f1f1f
        <div
            className={classNames(
                'text-center flex flex-col items-center text-(--white) bg-[#1f1f1f] rounded-lg px-[25px] py-[40px] lg:px-[70px] lg:py-[80px] sm:items-start sm:text-start transition-all hover:bg-(--theme-color) hover:scale-105'
                // { 'border border-red-500 sm:col-start-2': id === 7 }
            )}
        >
            <div className="font-bold">
                {Icon && <Icon className="size-8" />}
            </div>
            <h2 className="text-[20px] font-extrabold leading-[30px] mt-[35px] mb-[16px]">
                {title}
            </h2>
            <p className="leading-[26.4px]">{description}</p>
        </div>
    );
};

export default ServiceCard2;
