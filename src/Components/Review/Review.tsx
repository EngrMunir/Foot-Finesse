import ReviewHome from "./ReviewChild/ReviewHome";
import ReviewSlider from "./ReviewChild/ReviewSlider/ReviewSlider";



const Review = () => {
    return (
        <div className="">

            {/* Review Home section */}
            <div>
                <ReviewHome></ReviewHome>
            </div>

            {/* Review Slider Section */}
            <div>
                <ReviewSlider></ReviewSlider>
            </div>


        </div>
    );
};

export default Review;