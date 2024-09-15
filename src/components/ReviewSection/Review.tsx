import ReviewDeshboard from "./ReviewDeshboard";
import ReviewSlider from "./ReviewSlider/ReviewSlider";



const Review = () => {
    return (
        <div>
            
            {/* Deshboard Review */}
            <div>
                <ReviewDeshboard></ReviewDeshboard>
            </div>

            {/* Review Slider Section */}
            <div>
                <ReviewSlider></ReviewSlider>
            </div>

        </div>
    );
};

export default Review;