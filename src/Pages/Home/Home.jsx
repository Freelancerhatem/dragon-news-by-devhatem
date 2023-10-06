import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard/NewsCard";


const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BreakingNews></BreakingNews>           
            <div className="grid grid-cols-1 md:grid-cols-4 mt-6">
            <div className="border">
            <LeftSideNav></LeftSideNav>
            </div>
            <div className="lg:col-span-2 border">
             {
                AllNews.map((news,index)=><NewsCard key={index} news={news}></NewsCard>)
             }  
            </div>
            <div className="border">
                
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;