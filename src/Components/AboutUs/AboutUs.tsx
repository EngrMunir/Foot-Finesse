import AbBanner from "./AboutChaild/AbBanner";
import AboutNav from "./AboutChaild/AboutNav";
import AboutTitle from "./AboutChaild/AboutTitle";
import BannerImage from "./AboutChaild/BannerImage";
import Demo from "./AboutChaild/Demo";
import Team from "./AboutChaild/Team";



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

            {/* Banner section */}
            <div>
                <AbBanner></AbBanner>
            </div>

            {/* Team Section */}
            <div>
                <Team></Team>
            </div>

        </div>
    );
};

export default AboutUs;