import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import DemoAbout from "./AboutChaild/DemoAbout";
import FootAbout from "./AboutChaild/FootAbout";
import ImageBanner from "./AboutChaild/ImageBanner";
import InfoAbout from "./AboutChaild/InfoAbout";



const AboutUs = () => {
    return (
        <div>
            
            {/* Title section */}
            <div>
                <SectionTitle heading={"About Us"}></SectionTitle>
            </div>

            {/* Banner Image Section */}
            <div>
                <ImageBanner></ImageBanner>
            </div>

            {/* About Info Section */}
            <div>
                <InfoAbout></InfoAbout>
            </div>

            {/* About Demo Section */}
            <div>
                <DemoAbout></DemoAbout>
            </div>

            {/* About Foot section */}
            <div>
                <FootAbout></FootAbout>
            </div>


        </div>
    );
};

export default AboutUs;