export default function ContactSplit() {
    return (
        <>
            {/* Contact Section: Split */}
            <div className="relative flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
                <div className="absolute top-0 right-0 bottom-0 w-full bg-white lg:w-1/2 dark:bg-gray-800" />
                <div className="relative container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
                        {/* Heading */}
                        <div className="flex items-center space-y-6 lg:px-14 xl:px-28">
                            <div className="w-full">
                                <div className="mb-1 text-sm font-bold tracking-wider text-teal-600 uppercase dark:text-teal-500">
                                    We reply in 24hrs
                                </div>
                                <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                                    Get in touch
                                </h2>
                                <h3 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                                    If something does not make sense, feel free to contact us and
                                    we will get back to you as soon as possible.
                                </h3>
                                <h4 className="mt-12 mb-2 text-sm font-semibold tracking-wider uppercase">
                                    Company Inc.
                                </h4>
                                <div className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    1080 Sunshine Valley, Suite 2563
                                    <br />
                                    San Francisco, CA 85214
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                </div>
                            </div>
                        </div>
                        {/* END Heading */}

                        {/* Contact Form */}
                        <div className="flex flex-col items-center lg:px-14 xl:px-20">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="w-full space-y-6"
                            >
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="firstname"
                                            className="inline-block font-medium"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="lastname"
                                            className="inline-block font-medium"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="email" className="inline-block font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="message" className="inline-block font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                                        defaultValue={""}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-5 py-3 leading-6 font-semibold text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring-3 focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 lg:w-auto dark:focus:ring-teal-400/90"
                                >
                                    <svg
                                        className="hi-mini hi-paper-airplane inline-block size-5 opacity-50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                                    </svg>
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                        {/* END Contact Form */}
                    </div>
                </div>
            </div>
            {/* END Contact Section: Split */}
        </>
    );
}
