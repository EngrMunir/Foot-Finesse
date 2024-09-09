


const ReviewHome = () => {
    return (
        <div className="mt-2 mb-2">
            <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
                    <div className="grid grid-cols-1 divide-y text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-gray-700/75">
                        <dl className="space-y-1 px-5 py-8">
                            <dt className="text-4xl font-extrabold text-black dark:text-white">
                                8,600+
                            </dt>
                            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                                Products
                            </dd>
                        </dl>
                        <dl className="space-y-1 px-5 py-8">
                            <dt className="text-4xl font-extrabold text-black dark:text-white">
                                2,500+
                            </dt>
                            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                                Clients
                            </dd>
                        </dl>
                        <dl className="space-y-1 px-5 py-8">
                            <dt className="text-4xl font-extrabold text-black dark:text-white">
                                760k+
                            </dt>
                            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                                Sals
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;