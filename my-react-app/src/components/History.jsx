export default function TimelineCenteredwithIcons() {
    return (
        <>
            {/* Timeline: Centered with Icons */}
            <div className="relative py-5 dark:text-gray-100">
                {/* Vertical Guide */}
                <div
                    className="absolute top-0 bottom-0 left-0 flex w-14 flex-col justify-center md:w-20 lg:left-1/2 lg:-ml-10"
                    aria-hidden="true"
                >
                    <div className="mx-auto h-2.5 w-1 grow-0 rounded-t bg-linear-to-b from-transparent to-teal-100 dark:to-teal-900" />
                    <div className="mx-auto w-1 grow bg-teal-100 dark:bg-teal-900" />
                    <div className="mx-auto h-2.5 w-1 grow-0 rounded-b bg-linear-to-t from-transparent to-teal-100 dark:to-teal-900" />
                </div>
                {/* END Vertical Guide */}

                {/* Timeline */}
                <ul className="relative space-y-4 pl-14 md:pl-20 lg:pl-0">
                    {/* Event */}
                    <li className="relative lg:mr-auto lg:w-1/2 lg:pr-10">
                        <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-14 -translate-x-full justify-center md:w-20 lg:right-0 lg:left-auto lg:translate-x-10">
                            <div className="flex size-8 items-center justify-center rounded-full bg-teal-500 text-white ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:text-teal-900 dark:ring-teal-900 dark:ring-offset-gray-900">
                                <svg
                                    className="hi-mini hi-check inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-100 p-4 hover:ring-3 hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700">
                            <h4 className="mb-2 font-semibold">3.0 update is now live!</h4>
                            <p className="text-sm leading-relaxed">
                                It's finally here are comes packed with many awesome features.
                                Be sure to{" "}
                                <a
                                    href="#"
                                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                                >
                                    download it
                                </a>{" "}
                                and let us know{" "}
                                <a
                                    href="#"
                                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                                >
                                    what you think
                                </a>
                                !
                            </p>
                        </div>
                    </li>
                    {/* END Event */}

                    {/* Event */}
                    <li className="relative lg:ml-auto lg:w-1/2 lg:pl-10">
                        <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-14 -translate-x-full justify-center md:w-20 lg:-translate-x-10">
                            <div className="flex size-8 items-center justify-center rounded-full bg-teal-500 text-white ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:text-teal-900 dark:ring-teal-900 dark:ring-offset-gray-900">
                                <svg
                                    className="hi-mini hi-exclamation-triangle inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-100 p-4 hover:ring-3 hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700">
                            <h4 className="mb-2 font-semibold">Maintenance notice</h4>
                            <p className="text-sm leading-relaxed">
                                We are going to apply some security fixes next week. Please
                                check out the{" "}
                                <a
                                    href="#"
                                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                                >
                                    schedule
                                </a>{" "}
                                for more information about any downtime.
                            </p>
                        </div>
                    </li>
                    {/* END Event */}

                    {/* Event */}
                    <li className="relative lg:mr-auto lg:w-1/2 lg:pr-10">
                        <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-14 -translate-x-full justify-center md:w-20 lg:right-0 lg:left-auto lg:translate-x-10">
                            <div className="flex size-8 items-center justify-center rounded-full bg-teal-500 text-white ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:text-teal-900 dark:ring-teal-900 dark:ring-offset-gray-900">
                                <svg
                                    className="hi-mini hi-users inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                </svg>
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-100 p-4 hover:ring-3 hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700">
                            <h4 className="mb-2 font-semibold">
                                We reached 3,500 paying users
                            </h4>
                            <p className="text-sm leading-relaxed">
                                Thank you all so much for your support!
                            </p>
                        </div>
                    </li>
                    {/* END Event */}

                    {/* Event */}
                    <li className="relative lg:ml-auto lg:w-1/2 lg:pl-10">
                        <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-14 -translate-x-full justify-center md:w-20 lg:-translate-x-10">
                            <div className="flex size-8 items-center justify-center rounded-full bg-teal-500 text-white ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:text-teal-900 dark:ring-teal-900 dark:ring-offset-gray-900">
                                <svg
                                    className="hi-mini hi-plus inline-block size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-100 p-4 hover:ring-3 hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700">
                            <h4 className="mb-2 font-semibold">
                                Beta registrations are now open
                            </h4>
                            <p className="text-sm leading-relaxed">
                                We are going to be beta testing our 3.0 release. Be sure to{" "}
                                <a
                                    href="#"
                                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                                >
                                    register
                                </a>{" "}
                                for a chance to participate and check out all the new features
                                before everyone else.
                            </p>
                        </div>
                    </li>
                    {/* END Event */}
                </ul>
                {/* END Timeline */}
            </div>
            {/* END Timeline: Centered with Icons */}
        </>
    );
}

