import Team from "@/Components/OurTeam/Team";
import TeamBanner from "@/Components/OurTeam/TeamBanner";



const page = () => {
    return (
        <div>

            {/* Team Banner */}
            <div>
                <TeamBanner></TeamBanner>
            </div>

            {/* Team  */}
            <div>
                <Team></Team>
            </div>

        </div>
    );
};

export default page;