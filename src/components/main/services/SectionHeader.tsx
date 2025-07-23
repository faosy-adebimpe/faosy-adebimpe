import Link from 'next/link';

const SectionHeader = ({
    sectionNumber,
    sectionTitle,
    viewAll,
}: {
    sectionNumber: string;
    sectionTitle: string;
    viewAll?: string;
}) => {
    return (
        <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:items-end">
            <div className="flex flex-col items-center gap-7 sm:items-start">
                <h5 className="font-bold text-(--theme-color) text-[16px]">
                    {sectionNumber}
                </h5>
                <h2 className="font-bold text-[40px] md:text-[50px] text-center">
                    {sectionTitle}
                </h2>
            </div>
            {viewAll && (
                <Link
                    href={`/${sectionTitle.toLocaleLowerCase()}`}
                    className="bg-[#292929] text-(--white) px-[30px] py-[14px] rounded-lg cursor-pointer transition-all hover:bg-(--icon-background-hover-color)"
                >
                    <p className="uppercase font-bold">{viewAll}</p>
                </Link>
            )}
        </div>
    );
};

export default SectionHeader;
