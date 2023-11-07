import Banner from "../Banner";
import Features from "./Features";
import OurMission from "./OurMission";
import Slider from "./Slider";
import YearlyInfo from "./YearlyInfo";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <Slider></Slider>
            <OurMission/>
            <YearlyInfo/>
        </div>
    );
};

export default Home;