import RevuSlid from "./RevuSlid";


const ReviewSlider = () => {
    return (
        <div>
            <section className="">
                <div className="mx-auto max-w-screen-xl  lg:flex  lg:items-center ">
                    <div className="mx-auto max-w-3xl text-center mt-10 mb-10">

                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            WHAT PARTICIPANTS ARE SAYING.

                        </h1>
                    </div>
                </div>
            </section>

            {/* Slider */}
            <div>
                <RevuSlid></RevuSlid>
            </div>
            
        </div>
    );
};

export default ReviewSlider;



