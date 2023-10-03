import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Navbar from "../../components/Navbar/Navbar";
import RightNavBar from "../../components/RightNavBar/RightNavBar";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData()
    return (
        <div>
            <Header/>
            <LatestNews></LatestNews>
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2">
                    <h2 className="text-2xl font-semibold">Dragon News Home</h2>
                    {
                        news.map((aNews,indx)=><NewsCard aNews={aNews} key={indx}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightNavBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;