import AboutNav from "./AboutChaild/AboutNav";
import AboutTitle from "./AboutChaild/AboutTitle";
import BannerImage from "./AboutChaild/BannerImage";
import Demo from "./AboutChaild/Demo";



const AboutUs = () => {
    return (
        <div>
            
            {/* About navbar section */}
            <div>
                <AboutNav></AboutNav>
            </div>

            {/* iMAGE SECTION */}
            <div>
                <BannerImage></BannerImage>
            </div>

            {/* Titel section */}
            <div>
                <AboutTitle></AboutTitle>
            </div>

            <div>
                <Demo></Demo>
            </div>

        </div>
    );
};

export default AboutUs;