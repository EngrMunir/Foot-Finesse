import Image from "next/image";

import image6 from "/public/AboutUs/Image/pic6-6.jpg";



const Team = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
                    {/* Heading */}
                    <div className="text-center">
                        <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                            Real People
                        </div>
                        <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                            Meet our talented team
                        </h2>
                        <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
                            They are working nonstop behind the scenes to help you build
                            better products, web services and websites.
                        </h3>
                    </div>
                    {/* END Heading */}

                    {/* Team */}
                    <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-16">
                        <div>
                            <span className="mb-5 inline-block rounded-full bg-white p-2 shadow-lg dark:bg-gray-700/75 dark:shadow-gray-950">
                                <Image
                                    src={image6}
                                    alt="User Avatar"
                                    height={150} width={150}
                                    className="inline-block size-28 rounded-full"
                                />
                            </span>
                            <h4 className="mb-0.5 text-xl font-bold">Irma Norton</h4>
                            <p className="font-medium text-gray-600 dark:text-gray-400">
                                Founder &amp; CEO
                            </p>
                        </div>
                        <div>
                            <span className="mb-5 inline-block rounded-full bg-white p-2 shadow-lg dark:bg-gray-700/75 dark:shadow-gray-950">
                                <Image
                                    src={image6}
                                    alt="User Avatar"
                                    height={150} width={150}
                                    className="inline-block size-28 rounded-full"
                                />
                            </span>
                            <h4 className="mb-0.5 text-xl font-bold">Alejandro Lee</h4>
                            <p className="font-medium text-gray-600 dark:text-gray-400">
                                Product Design
                            </p>
                        </div>
                        <div>
                            <span className="mb-5 inline-block rounded-full bg-white p-2 shadow-lg dark:bg-gray-700/75 dark:shadow-gray-950">
                                <Image
                                    src={image6}
                                    alt="User Avatar"
                                    height={150} width={150}
                                    className="inline-block size-28 rounded-full"
                                />
                            </span>
                            <h4 className="mb-0.5 text-xl font-bold">Elsa King</h4>
                            <p className="font-medium text-gray-600 dark:text-gray-400">
                                Web Developer
                            </p>
                        </div>
                        <div>
                            <span className="mb-5 inline-block rounded-full bg-white p-2 shadow-lg dark:bg-gray-700/75 dark:shadow-gray-950">
                                <Image
                                    src={image6}
                                    alt="User Avatar"
                                    height={150} width={150}
                                    className="inline-block size-28 rounded-full"
                                />
                            </span>
                            <h4 className="mb-0.5 text-xl font-bold">Alex Saunders</h4>
                            <p className="font-medium text-gray-600 dark:text-gray-400">
                                Marketing
                            </p>
                        </div>
                        <div>
                            <span className="mb-5 inline-block rounded-full bg-white p-2 shadow-lg dark:bg-gray-700/75 dark:shadow-gray-950">
                                <Image
                                    src={image6}
                                    alt="User Avatar"
                                    height={150} width={150}
                                    className="inline-block size-28 rounded-full"
                                />
                            </span>
                            <h4 className="mb-0.5 text-xl font-bold">Herman Reese</h4>
                            <p className="font-medium text-gray-600 dark:text-gray-400">
                                Support Specialist
                            </p>
                        </div>
                        <div>
                            <span className="mb-5 inline-block rounded-full bg-white p-2 shadow-lg dark:bg-gray-700/75 dark:shadow-gray-950">
                                <Image
                                    src={image6}
                                    alt="User Avatar"
                                    height={150} width={150}
                                    className="inline-block size-28 rounded-full"
                                />
                            </span>
                            <h4 className="mb-0.5 text-xl font-bold">Sue Keller</h4>
                            <p className="font-medium text-gray-600 dark:text-gray-400">
                                Web Developer
                            </p>
                        </div>
                    </div>
                    {/* END Team */}
                </div>
            </div>
        </div>
    );
};

export default Team;