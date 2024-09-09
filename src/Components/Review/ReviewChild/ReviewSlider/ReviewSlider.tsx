import Slider from "./Slider";



const ReviewSlider = () => {
    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl  lg:flex  lg:items-center ">
                    <div className="mx-auto max-w-3xl text-center mt-10 mb-10">
                        
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            WHAT PARTICIPANTS ARE SAYING.

                        </h1>

                        {/* Slider */}
                        <div>
                            <Slider></Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewSlider;