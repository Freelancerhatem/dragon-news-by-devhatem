import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useState } from "react";


const News = () => {
    const {_id} =useParams();
    const newsdata = useLoaderData();
    
    // console.log(newsdata)
    // console.log(_id)
    const aNews = newsdata.find(item=>item._id == _id);
    const {thumbnail_url,details,title} = aNews;

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <div className="w-full ">
                        <img className="w-full h-[50vh] px-10 mt-4"  src={thumbnail_url} alt="" />
                    </div>
                    <div className="px-10">
                    <h1 className="text-3xl font-semibold my-2">{title}</h1>
                    <p>{details}</p>
                    </div>
                    <Link to='/' className="px-10"><button className="btn btn-outline mt-2">Go Home</button></Link>
                    
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
            
        </div>
    );
};

export default News;