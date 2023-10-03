
import { useEffect, useState } from "react";

const LeftSideBar = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="p-2">
            <h2 className="mb-4">All Caterogy</h2>
            <button className="btn w-full normal-case text-2xl">National News</button>
            <p className="ml-8 mt-2">
                {categories.map(category=> <span className="block mb-4" key={category.id}>{category.name}</span>)}
            </p>
            <div>
                
            </div>
        </div>
    );
};

export default LeftSideBar;