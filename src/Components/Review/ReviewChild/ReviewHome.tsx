


const ReviewHome = () => {
    return (
        <div className="mt-28">
            <div className="">
                <div className="container mx-auto  ">
                    <div className="grid grid-cols-1 divide-y text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-gray-700/75">
                        <dl className="space-y-1 px-5 py-8">
                            <dt className="text-4xl font-extrabold text-black ">
                                1400+
                            </dt>
                            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                                Products
                            </dd>
                        </dl>
                        <dl className="space-y-1 px-5 py-8">
                            <dt className="text-4xl font-extrabold text-black">
                                4000+
                            </dt>
                            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                                Clients
                            </dd>
                        </dl>
                        <dl className="space-y-1 px-5 py-8">
                            <dt className="text-4xl font-extrabold text-black ">
                                8000k+
                            </dt>
                            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                                Sales
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;