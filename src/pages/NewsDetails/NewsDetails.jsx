import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightNavBar from "../../components/RightNavBar/RightNavBar";
import Details from "../Details/Details";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const news = useLoaderData();
    const {id}= useParams();

    const [newsDetail,setNewsDetail] = useState(null)
    useEffect(()=>{
        const findNews = news.find(aNews=>aNews._id == id)
        setNewsDetail(findNews)
    },[id,news])
    console.log(typeof id,newsDetail)
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold">Dragon News</h2>
                    {
                        newsDetail?<Details newsDetail = {newsDetail}></Details>:
                        ""
                    }
                </div>
                <div>
                    <RightNavBar/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;