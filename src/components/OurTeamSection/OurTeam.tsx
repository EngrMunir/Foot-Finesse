import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import TeamProfile from "./TeamProfile";



const OurTeam = () => {
    return (
        <div>
            
            {/* Team Title section */}
            <div>
                <SectionTitle heading={"Our Team"}></SectionTitle>
            </div>

            {/* Team Profile Section */}
            <div>
                <TeamProfile></TeamProfile>
            </div>

        </div>
    );
};

export default OurTeam;