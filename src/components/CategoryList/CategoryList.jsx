import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-extrabold">Job category</h2>
                <p className="text-base font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 py-8 px-6">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;