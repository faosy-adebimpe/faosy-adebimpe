const DownloadCV = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-start">
            <a
                href="/full-stack-developer-faosy-adebimpe-cv.pdf"
                download
                className="inline-block px-4 py-2 rounded-md bg-[var(--theme-color)] text-white font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 border border-transparent hover:border-[var(--theme-color)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] text-sm"
            >
                Download CV
            </a>
        </div>
    );
};

export default DownloadCV;
