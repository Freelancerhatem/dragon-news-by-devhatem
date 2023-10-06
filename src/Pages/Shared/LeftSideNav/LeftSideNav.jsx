import { useEffect, useState } from "react";




const LeftSideNav = () => {
    const[categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('./public/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])

    return (
        <div>
           { categories.map((title,index)=>
           <h1 key={index} className="text-2xl my-2 ml-2 px-2 bg-slate-200 rounded-sm w-52">{index+1}.{title.name}</h1>
           
           
           )}
            
        </div>
    );
};

export default LeftSideNav;
