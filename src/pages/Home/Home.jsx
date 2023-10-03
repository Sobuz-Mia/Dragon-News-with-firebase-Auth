import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header/>
            <LatestNews></LatestNews>
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="border">
                    <h2 className="font-poppins">left sidebar</h2>
                </div>
                <div className="col-span-2 border">
                    middle
                </div>
                <div className="border">
                    right sidebar
                </div>
            </div>
        </div>
    );
};

export default Home;