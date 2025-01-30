export default function PageSeparatorsGradient() {
    return (
        <>
            {/* Page Separators: Gradient */}
            {/* Alter the py-* class to push previous/after sections to match your preference */}
            <div className="bg-white py-20 dark:bg-gray-900">
                <div className="relative container mx-auto h-[13px] bg-linear-to-r from-sky-200 via-purple-200 to-pink-200 px-4 lg:px-8 xl:max-w-7xl dark:from-sky-500 dark:via-purple-500 dark:to-pink-500">
                    <div className="absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r from-sky-100 via-purple-100 to-pink-100 dark:from-sky-800 dark:via-purple-800 dark:to-pink-800"></div>
                    <div className="absolute top-0 right-0 left-0 z-1 h-1.5 bg-linear-to-b from-white dark:from-gray-900"></div>
                    <div className="absolute top-0 left-0 z-10 h-[7px] w-60 bg-linear-to-r from-white dark:from-gray-900"></div>
                    <div className="absolute top-0 right-0 z-10 h-[7px] w-60 bg-linear-to-l from-white dark:from-gray-900"></div>
                    <div className="absolute right-0 bottom-0 left-0 h-1.5 bg-linear-to-r from-sky-100 via-purple-100 to-pink-100 dark:from-sky-800 dark:via-purple-800 dark:to-pink-800"></div>
                    <div className="absolute right-0 bottom-0 left-0 z-1 h-1.5 bg-linear-to-t from-white dark:from-gray-900"></div>
                    <div className="absolute bottom-0 left-0 z-10 h-[7px] w-60 bg-linear-to-r from-white dark:from-gray-900"></div>
                    <div className="absolute right-0 bottom-0 z-10 h-[7px] w-60 bg-linear-to-l from-white dark:from-gray-900"></div>
                </div>
            </div>
            {/* END Page Separators: Gradient */}
        </>
    );
}
