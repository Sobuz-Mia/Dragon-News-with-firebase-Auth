import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className="flex items-center my-7">
            <button className="btn btn-outline bg-[#D72050] text-white mr-3 normal-case">Latest</button>
           <p className="">
           <Marquee>Match Highlights: Germany vs Spain — as it happened   !Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
           </p>
        </div>
    );
};

export default LatestNews;