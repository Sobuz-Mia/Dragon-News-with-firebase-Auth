import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Navbar from "../../components/Navbar/Navbar";
import RightNavBar from "../../components/RightNavBar/RightNavBar";

const Home = () => {
    return (
        <div>
            <Header/>
            <LatestNews></LatestNews>
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2 border">
                    middle
                </div>
                <div className="">
                    <RightNavBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;