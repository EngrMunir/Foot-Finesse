


const Compare = () => {
    return (
        <div className="mt-28 justify-center grid">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2  text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 1</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 2</th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                    <img
                                        alt=""
                                        src="https://i.ibb.co.com/Lx6nXWg/d24128e58f49b52a981ec79a3476ef7d.jpg"
                                        className="h-56 w-56l rounded-md object-cover"
                                    />
                                </a>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                    <img
                                        alt=""
                                        src="https://i.ibb.co.com/DphWjx4/a3bf40693736d5e57b042fe56594aafa.jpg"
                                        className="h-56 w-56 rounded-md object-cover"
                                    />
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Show Name</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Playground Runner
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Playground Runner
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">category</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Man Shoes
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            Man Shoes
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                29.99 $
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                30 $
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Discount Price</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                28 $
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                27 $
                            </td>

                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rating</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                4.5
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                4.6
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Elegant leather loafers for formal occasions.
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Durable shoes designed for everyday play
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Compare;