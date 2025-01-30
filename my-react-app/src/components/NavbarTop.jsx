export default function HeroImageSidewithSimpleHeader() {
    return (
        <>
            {/* Hero Section: Image Side with Simple Header */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
                {/* Main Header */}
                <header
                    id="page-header"
                    className="relative flex flex-none items-center py-8"
                >
                    {/* Main Header Content */}
                    <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
                        <div>
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                            >
                                <svg className="bi bi-alt inline-block size-5" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path
                                        d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z"/>
                                </svg>
                                <span>Demid Krom</span>
                            </a>
                        </div>
                        <nav className="space-x-3 md:space-x-6">
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-900 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400"
                            >
                                <span>Features</span>
                            </a>
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-900 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400"
                            >
                                <span>Pricing</span>
                            </a>
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-900 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400"
                            >
                                <span>Support</span>
                            </a>
                        </nav>
                    </div>
                    {/* END Main Header Content */}
                </header>
                {/* END Main Header */}
            </div>
            {/* END Hero Section: Image Side with Simple Header */}
        </>
    );
}
